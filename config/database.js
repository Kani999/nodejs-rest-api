const CONFIG = require('./config');
const mysql = require("mysql");

// Connection pool
const pool = mysql.createPool({
            connectionLimit : 10,
            host     : CONFIG.db_host,
            user     : CONFIG.db_user,
            password : CONFIG.db_password,
            database : CONFIG.db_name,
            debug    : false 
            });                    

function executeQuery(sql, callback) {
    pool.getConnection((err,connection) => {
        if(err) {
            return callback(err, null);
        } else {
            if(connection) {
                connection.query(sql, function (error, results, fields) {
                connection.release();
                if (error) {
                    console.log('Err: ' + error);
                    return callback(error, null);
                } 
                return callback(null, results);
                });
            }
        }
    });
}

function query(sql, callback) {    
    executeQuery(sql,function(err, data) {
        if(err) {
            return callback(err);
        }       
        callback(null, data);
    });
}

module.exports = {
    query: query
}
