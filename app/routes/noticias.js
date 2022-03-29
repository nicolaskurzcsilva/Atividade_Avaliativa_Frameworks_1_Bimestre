module.exports=(app)=>{//exportação da rota "/noticias"
    app.get("/noticias", (req, res)=>{
        const dbConnection = require("../../config/dBConnection");//importação da conexão com o banco de dados que está modularizada em outro diretório
        const connection = dbConnection();//criação de uma variável dbConnection e executando ela
            connection.query("select * from noticias", (error, result)=>{
                if(error){//verificação da requisição para caso haja algum erro
                    console.log(error);
                }
                res.render("noticias/noticias.ejs", {noticias:result});//responder à requisição "/noticias" com a renderização da tela noticias/noticias.ejs
    });    
}
