// Model은 DB에서 값을 가져와 Controller에 반환함

// const redisClient = redis.createClient({
//     host: '127.0.0.1',
//     port: 6379
// });

const db = {
    connectionLimit: 10,
    host: "127.0.0.1",
    user: "root",
    password: "welcome9s",
    database: "mufun",
}
// const dbPool = require('mysql').createPool(db);
const dbPool = async() => {
    return await require('mysql').createPool(db);}

const sql = require('../config/sql.js');

//dbPool.connect()

module.exports = {
    sendQuery : async (query, param='', where='') => {
        try{
            console.log("first")
            dbPool.getConnection(function(err, connection){
                if(!err){
                    console.log("연결성공")
                    var rows = connection.query(sql[query].query);
                    console.log("##",JSON.stringify(rows),"#");
                    connection.release();
                    return JSON.stringify(rows);
                }
                else{
                    console.log("test");
                }
            })
          }
          catch(err){
            console.log(dbPool);
            console.log(err);
            throw err;
          }
    }
}
  
