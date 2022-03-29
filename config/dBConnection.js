const mysql = require("mysql");//importação do módulo mysql

module.exports = ()=>{//modularização da conexão com o banco de dados
    return mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"portal_noticias"
    });//criação da conexão com o banco de dados "portal_noticias"
}
