const connectRedis = require('connect-redis');
const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
    host: '127.0.0.1',
    port: 6379
});

module.exports = RedisStore

/*
    * redis 값 삽입 or 수정 or 삭제마다 매매체결여부 확인
    
    * 주문 시 필요사항
        - 주문번호, 매매구분(매수,매도), 날짜, 음원아이디, 가격(시장가,지정가), 수량, 

    * 물량대기리스트
        nft_id(음원아이디) :
            buy(매매구분-매수) :
                1000(가격대) : [
                                [ 주문번호1, 매매구분1, 등록날짜1, 가격1, 수량1 ],
                                [ 주문번호2, 매매구분2, 등록날짜2, 가격2, 수량2 ],
                                [ ... ]
                              ]
                1010(가격대) : [ ... ]
            sell(매매구분-매수) : ...
                995(가격표) :  [
                                [ 주문번호1, 매매구분1, 등록날짜1, 가격1, 수량1 ],
                                [ 주문번호2, 매매구분2, 등록날짜2, 가격2, 수량2 ],
                                [ ... ]
                              ]
                            
    * 내 주문현황
        - 미체결 : 주문번호
        - 체결 : nft_id, 체결가격, 체결수량, 체결금액
*/