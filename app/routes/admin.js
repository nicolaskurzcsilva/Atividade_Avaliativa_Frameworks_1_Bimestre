module.exports=(app)=>{//exportação da rota "/formulario_inclusao_noticia"
    app.get("/formulario_inclusao_noticia", (req,res)=>{
        res.render("admin/form_add_noticia.ejs");//responder à requisição "/formulario_inclusao_noticia" com a tela admin/form_add_noticia.ejs
    });    
}
