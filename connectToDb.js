
// returns a new Database connection

const pool = require('pg').Pool;
const config = {
    user : 'postgres',
    password : 'hello',
    database : 'test',
    host : 'localhost',
    max : 10,
    idleTimeoutMillis : 2000
}

module.exports = new pool(config);