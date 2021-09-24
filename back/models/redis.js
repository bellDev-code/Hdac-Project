const redis = require('redis');
const redisClient = redis.createClient({
    host: '127.0.0.1',
    port: 6379
});

const redisCmd = {
    keys: function (key) {
        return new Promise((resolve, reject) => {
            redisClient.keys(key, (err, reply) => {
                resolve(reply);
            });
        });
    },
    lset: function (key, idx, value) {
        return new Promise((resolve, reject) => {
            redisClient.lset(key, idx, JSON.stringify(value), (err, reply) => {
                resolve(reply);
            });
        })
    },
    lrange: function (key, start = 0, end = -1) {
        return new Promise((resolve, reject) => {
            redisClient.lrange(key, start, end, (err, reply) => {
                resolve(reply);
            });
        })
    },
    lpop: function (key) {
        return new Promise((resolve, reject) => {
            redisClient.lpop(key, (err, reply) => {
                resolve(reply);
            });
        })
    },
    rpush: function (key, value) {
        return new Promise((resolve, reject) => {
            redisClient.RPUSH(key, JSON.stringify(value), function (err, reply) {
                if (err) {
                    console.log(err); // callback(err, null);
                    return -1;
                } else {
                    return 1;
                    //console.log(`[SUCCESS] ${result}, ${key}, ${JSON.stringify(value)}`);
                }
            });
        })
    },
    lpush: function (key, value) {
        return new Promise((resolve, reject) => {
            redisClient.LPUSH(key, JSON.stringify(value), function (err, reply) {
                if (err) {
                    console.log(err); // callback(err, null);
                    return -1;
                } else {
                    return 1;
                    //console.log(`[SUCCESS] ${result}, ${key}, ${JSON.stringify(value)}`);
                }
            });
        })
    },
    // https://zzdd1558.tistory.com/220?category=718961
    // input  : LLEN B000002:buy:2000
    // output : 현재길이가 나옴 2개 원소 보유시 2 return
}

let ordNo = 0

async function validityCheck(orderer, key, offerVolume) {
    var orderer = 0;
    var keyItems = key.split(':');

    var status = false;

    if (offerVolume <= 0) {
        status = true;
    }
    if ((keyItems.filter(item => item == undefined)).length > 0) {
        status = true;
    }
    return status;
}


async function checkOrderPair(orderer, key, offerVolume) {
    console.log(orderer, key, offerVolume);
    // 전체키 중 거래하는 항목과 일치하는 거래리스트를 가져옴
    const keyData = key.split(':');
    const nftID = keyData[0];
    const orderType = keyData[1];
    const amount = keyData[2];

    const keyList = await redisCmd.keys('*');
    const filteredKeyList = (orderType == "B" ? keyList.sort() : keyList.sort().reverse())
        .filter((item) => {
            return nftID == item.split(':')[0] && orderType != item.split(':')[1];
        });

    for (var filteredKey of filteredKeyList) {
        const filteredKeyData = filteredKey.split(':');
        const filteredDataList = await redisCmd.lrange(filteredKey);

        const oldAmount = filteredKeyData[2]

        var currentIdx = 0;

        // 제안한 가격보다 합리적(쌀때)
        if (orderType == "B" || orderType == "S") {
            if (amount >= oldAmount) {
                for (var rawItem of filteredDataList) {
                    var item = JSON.parse(rawItem);

                    // 시장에 등록된 구매수량이 판매하려는 수량보다 작을 때
                    if (offerVolume > item.volume) {

                        console.log(JSON.stringify(item), offerVolume, item.volume, offerVolume - item.volume);

                        offerVolume = offerVolume - item.volume;
                        item.volume = 0;
                        redisCmd.lpop(filteredKey);

                        console.log(JSON.stringify(item), "\n");
                        console.log(key, ">", filteredKey, "pair_less")
                        // 완료된 거래 기록남기기 추가필요...
                    }

                    // 시장에 등록된 구매수량이 판매하려는 수량보다 클 때
                    else if (offerVolume < item.volume) {

                        console.log(JSON.stringify(item), offerVolume, item.volume, 0);

                        item.volume = item.volume - offerVolume;
                        offerVolume = 0;
                        redisCmd.lset(filteredKey, currentIdx, item)

                        console.log(key, ">", filteredKey, "pair_full - ", JSON.stringify(item), "\n");
                        return -1;
                        // 완료된 거래 기록남기기 추가필요...
                    }

                    currentIdx += 1;
                }
            }
        } else {
            console.log("default", orderType);
            // 기능추가

        }
    }
    // 제안한 가격에 거래가 불가능 할 경우 거래장부에 등록
    //sendOrder(nftID, (orderType == "B" ? true : false), orderer, amount, offerVolume)
    return {
        amount: amount,
        volume: offerVolume
    };
}

// 주문 전송 redis
async function sendOrder(nftId, orderType, orderer, amount, volume) {
    if (validityCheck(orderer, key, offerVolume)) {
        return -1;
    }

    console.log(nftId, orderType, orderer, amount, volume);

    let key = `${nftId}:${orderType}:${amount}`

    var pairResult = await checkOrderPair(orderer, key, volume);

    amount = pairResult.amount;
    volume = pairResult.volume;

    let value = {
        'ordNo': ordNo,
        'ordDate': Date.now(),
        'orderer': orderer,
        'volume': volume,
    }
    console.log("##", key, value);
    redisCmd.rpush(key, value);
    //console.log(await redisCmd.lrange(key));

    ordNo += 1;
}

// 가짜 주문 생성
async function testcase_rapid_order() {
    const maxOrders = 1000
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

    //redisClient.flushall();

    while (true) {
        if (ordNo > maxOrders) {
            //console.log(await redisCmd.keys('*'));
            break;
        }

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

        ordNo += 1;
    }
}

redisClient.flushall();
// testcase_rapid_order();
// checkOrderPair('0x05cC9059d3c515339___Wan9s_test__________', 'A000001:S:1600', 10000);


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