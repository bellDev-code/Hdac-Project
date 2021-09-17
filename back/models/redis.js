const redis = require('redis');
const redisClient = redis.createClient({
    host: '127.0.0.1',
    port: 6379
});

let ordNo = 0

function checkOrderPair(key, newQuery) {
    // https://zzdd1558.tistory.com/220?category=718961
    // input  : LRANGE B000002:buy:2000 0 0
    // output : 1) "{\"ordNo\":501,\"ordDate\":1631808827548,\"orderer\":\"0x05cC9059d3c51533991E7bADC59Cc9B6fa51C530\",\"volume\":31}"
    // input  : LSET B000002:buy:2000 0 "replaceVal"
    // output : 1) "{\"ordNo\":501,\"ordDate\":163 ... :31}" --> "replaceVal"
    // input  : LLEN B000002:buy:2000
    // output : 현재길이가 나옴 2개 원소 보유시 2 return

    // console.log(key);
    let filteredKeyList;

    // 전체키 중 거래하는 항목과 일치하는 거래리스트를 가져옴
    redisClient.keys('*', (err, result) => {
        const originKey = key.split(':')

        let newNftId = originKey[0]
        let newGubun = originKey[1]
        let newAmount = originKey[2]
        let sortedKeyList = (newGubun == "B" ? result.sort() : result.sort().reverse())

        filteredKeyList =
            sortedKeyList.filter((item) => {
                const oldKey = item.split(':')

                let oldNftId = oldKey[0]
                let oldGubun = oldKey[1]

                return newNftId == oldNftId && newGubun != oldGubun
            });

        console.log("#", filteredKeyList);


        // 정렬된 키 리스트에서 키를 하나씩 조회함

        for (var filteredKey of filteredKeyList) {
            console.log("\n", key, filteredKey);

            var newOffer = key.split(':')[2]
            var oldOffer = filteredKey.split(':')[2]

            // 제안한 가격보다 합리적(쌀때)
            if (newOffer < oldOffer) {
                redisClient.lrange(`${filteredKey}`, 0, -1, (err, result) => {
                    for (var item of result) {
                        console.log("#", item);
                    }
                    console.log("\n")
                });
            }
            // 제안한 가격에 거래가 불가능 할 경우 거래장부에 등록


        }
    })

    // 거래리스트에서 newQuery 에게 가장 최선인 것으로 연산

    // redisClient.lrange(`${key}`, 0, -1, (err, result) => {
    //     for (var row of result) {
    //         var item = JSON.parse(row)
    //         //if (item.volume) console.log(item);
    //     }
    // });
}
//testcase_rapid_order();
checkOrderPair('A000001:B:1600', 100);

function sendOrder(nftId, orderType = true, orderer, amount, volume) {

    let key =
        orderType === true ? `${nftId}:B:${amount}` :
        orderType === false ? `${nftId}:S:${amount}` : ''

    let value = {
        'ordNo': ordNo,
        'ordDate': Date.now(),
        'orderer': orderer,
        'volume': volume,
    }

    redisClient.LPUSH(`${key}`, JSON.stringify(value), function (err, result) {
        if (err) {
            console.log(err); // callback(err, null);
            return;
        } else {
            //console.log(`[SUCCESS] ${result}, ${key}, ${JSON.stringify(value)}`);
        }
    });

    redisClient.lrange(`${key}`, 0, -1, function (err, result) {
        if (err) {
            console.log(err); // callback(err, null);
            return;
        } else {
            console.log(key, result);
        }
    })

    ordNo += 1;
}

// make a orders (rapid)
function testcase_rapid_order() {
    const maxOrders = 1000

    redisClient.flushall();

    while (true) {
        if (ordNo > maxOrders) {
            setTimeout(function () {
                redisClient.keys('*', function (err, keys) {
                    console.log("####### RESULT #######")
                    //console.log(keys.sort());
                    console.log("######################")
                })
            }, 500)
            break;
        }
        const nftId_avgAmount = [
            [
                'A000001', 1000
            ],
            [
                'B000002', 1500
            ],
            [
                'C000003', 1200
            ],
            [
                'D000004', 800
            ],
            [
                'E000005', 900
            ]
        ]
        const userAddr = [
            '0x2D8043F4EeE9Fd69F95d132d368A335c7fBFCFcc',
            '0x74606022451Fe552f70aE921aA8AAcA051C273e6',
            '0xd1102105039728Cb93f27310DaF291941b91a26c',
            '0x9728Cb93210503d10126DaF2110f2739a1941b9c',
            '0x0AC9cd3c51533991E7059DC59C5bfa51C53c9B60',
            '0x05cC9059d3c51533991E7bADC59Cc9B6fa51C530',
            '0x3991E759d3c5bAD05cC90153C591C53c9BCfa560',
            '0xdD05cE75c931CbA00539995C53Cc561faB95391C',
        ]

        var rNFT = Math.floor(Math.random() * 4);
        var rUserIdx = Math.floor(Math.random() * 7);
        var orderType = Math.floor(Math.random() * 9) % 2 == 0 ? true : false;

        var qnty_min = 1;
        var qnty_max = 100;

        var rAmount = Math.floor(Math.random() * (qnty_max - qnty_min)) + qnty_min;
        var rVolume = Math.floor(Math.random() * (qnty_max - qnty_min)) + qnty_min;

        sendOrder(nftId_avgAmount[rNFT][0],
            orderType,
            userAddr[rUserIdx],
            nftId_avgAmount[rNFT][1] + (Math.floor(rAmount / 10) * 100),
            rVolume);
    }
}




module.exports = sendOrder


/*
    * redis 값 삽입 or 수정 or 삭제마다 매매체결여부 확인
    

    * 주문 시 필요사항
        : 음원아이디, 매매구분(매수,매도), 주문번호, 날짜, 원주문자, 가격(지정가, 시장가는 자동으로 ), 수량


    * 데이터 형식
        주문번호 : 문자열 숫자형 ( 000000000000 )
        주문일자 : unix_timestamp //연월일시분초 ( YYMMDDhhmmss )
        원주문자 : 블록체인 지갑주소, 16진수 (0x01AB26F...)
        가격 : int32 ( 최대 4,294,967,296 )
        수량 : int32 ( "" )


    * 물량 대기 리스트
        nft_id(음원아이디) :
            buy(매매구분-매수) :
                가격 :
                    [ 주문번호1, 주문일자1, 원주문자1, 수량1 ],      
                    [ 주문번호2, 주문일자2, 원주문자2, 수량2 ],      
                    [ ... ]

            sell(매매구분-매수) :
                 가격 :
                    [ 주문번호1, 주문일자1, 원주문자1, 수량1 ],
                    [ 주문번호2, 주문일자2, 원주문자2, 수량2 ],
                    [ ... ]


    * 내 주문현황
        미체결  : 주문번호, nft_id, 체결가격, 체결수량, 체결금액
        체결    : 주문번호, nft_id, 체결가격, 체결수량, 체결금액

*/