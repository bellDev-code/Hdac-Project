// Model은 DB에서 값을 가져와 Controller에 반환함

// const redisClient = redis.createClient({
//     host: '127.0.0.1',
//     port: 6379
// });

const dbInfo = {
    connectionLimit: 10,
    host: "127.0.0.1",
    user: "root",
    password: "welcome9s",
    database: "mufun",
}

const dbPool = require('mysql').createPool(dbInfo);
const sql = require('../config/sql.js');

module.exports = {
    sendQuery : (query, param='', where='') => {
        return new Promise((resolve, reject) => dbPool.query(sql[query].query, (error, results, fields) => {
            if (error) {
                resolve({error})
            } else resolve(results)
        }));
    }
}
  
