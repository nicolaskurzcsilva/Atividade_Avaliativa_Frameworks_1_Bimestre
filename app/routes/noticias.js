module.exports=(app)=>{//modularização da rota "/noticias"
    app.get("/noticias", (req, res)=>{
        const dbConnection = require("../../config/dBConnection");//importação da conexão com o banco de dados que está modularizada em outro diretório
        const connection = dbConnection();//criação de uma variável dbConnection e executando ela
            connection.query("select * from noticias", (error, result)=>{//verificação da requisição para caso haja algum erro
                if(error){
                    console.log(error);
                }
                res.render("noticias/noticias.ejs", {noticias:result});//renderização da rota "/noticias"
            });
    });
}
