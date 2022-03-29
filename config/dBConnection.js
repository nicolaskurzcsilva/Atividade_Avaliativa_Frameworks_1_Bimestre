const mysql = require("mysql");

module.exports = ()=>{//modularização da conexão com o banco de dados
    return mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"portal_noticias"
    });
}