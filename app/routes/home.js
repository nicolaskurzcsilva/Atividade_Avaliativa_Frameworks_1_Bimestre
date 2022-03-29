module.exports=(app)=>{//exportação da rota principal do projeto "localhost:3000/"
    app.get("/", (req,res)=>{
        res.render("home/index.ejs");
    });
}
