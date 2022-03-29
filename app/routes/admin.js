module.exports=(app)=>{//modularização da rota "/formulario_inclusao_noticia"
    app.get("/formulario_inclusao_noticia", (req,res)=>{
        res.render("admin/form_add_noticia.ejs");
    });    
}