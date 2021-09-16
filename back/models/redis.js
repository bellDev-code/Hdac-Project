const redisClient = require('redis').createClient({
    host: '127.0.0.1',
    port: 6379
});

let ordNo = 0

function sendOrder(nftId, orderType = true, orderer, amount, volume) {

    let key = ""
    let value = {
        'ordNo': ordNo,
        'ordDate': Date.now(),
        'orderer': orderer,
        'amount': amount,
        'volume': volume,
    }

    if (orderType === true) {
        key = `${nftId}:buy:${amount}`
    } else if (orderType === false) {
        key = `${nftId}:sell:${amount}`
    } else {
        return
    }

    redisClient.LPUSH(`${key}`, JSON.stringify(value), function (err, result) {
        if (err) {
            console.log(err); // callback(err, null);
            return;
        } else {
            console.log(result, `${key}, ${JSON.stringify(value)}`);
        }
    });

    redisClient.lrange(`${key}`, 0, -1, function (err, result) {
        if (err) {
            console.log(err); // callback(err, null);
            return;
        } else {
            console.log(key);
            console.log("result:", result);
        }
    })

    ordNo += 1;
}

function testcase_a() {
    sendOrder('a0155', true, "0x06defa25", 1000, 10);
    sendOrder('a0155', false, "0x0622fa11", 1200, 15);
    sendOrder('a0523', true, "0x06defa2a", 1100, 5);
    sendOrder('a0523', false, "0x0622fa11", 1150, 12);
}

setInterval(testcase_a, 3000);

module.exports = sendOrder
// module.exports = sendOrder;


/*

    * redis 값 삽입 or 수정 or 삭제마다 매매체결여부 확인
    

    * 주문 시 필요사항
        : 음원아이디, 매매구분(매수,매도), 주문번호, 날짜, 원주문자, 가격(지정가, 시장가는 자동으로 ), 수량


    * 데이터 형식
        주문번호 : 문자열 숫자형 ( 000000000000 )
        주문일자 : 연월일시분초 ( YYMMDDhhmmss )
        원주문자 : 블록체인 지갑주소, 16진수 (0x01AB26F...)
        가격 : int32 ( 최대 4,294,967,296 )
        수량 : int32 ( "" )


    * 물량 대기 리스트
        nft_id(음원아이디) :
            buy(매매구분-매수) : ...
                    [ 주문번호1, 주문일자1, 원주문자1, 가격1, 수량1 ],      
                    [ 주문번호2, 주문일자2, 원주문자2, 가격2, 수량2 ],      
                    [ ... ]

            sell(매매구분-매수) : ...
                    [ 주문번호1, 주문일자1, 원주문자1, 가격1, 수량1 ],
                    [ 주문번호2, 주문일자2, 원주문자2, 가격2, 수량2 ],
                    [ ... ]


    * 내 주문현황
        미체결  : 주문번호, nft_id, 체결가격, 체결수량, 체결금액
        체결    : 주문번호, nft_id, 체결가격, 체결수량, 체결금액

*/