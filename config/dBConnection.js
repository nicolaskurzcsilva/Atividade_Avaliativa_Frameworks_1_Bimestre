const mysql = require("mysql");//importação do módulo mysql

module.exports = ()=>{//exportação da conexão com o banco de dados
    return mysql.createConnection({//execução do mysql
        host:"localhost",
        user:"root",
        password:"root",
        database:"portal_noticias"
    });//criação da conexão com o banco de dados "portal_noticias"
}
