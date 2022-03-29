const app = require("./config/server.js");//importação do módulo express do arquivo server.js
const rotaAdmin = require("./app/routes/admin.js")(app);//importação da rota "/formulario_inclusao_noticia"
const rotaHome = require("./app/routes/home.js")(app);//importação da rota principal do projeto "localhost:3000/"
const rotaNoticias = require("./app/routes/noticias.js")(app);//importação da rota "/noticias"

//Criação de um servidor que está rodando na porta 3000
app.listen("3000", ()=>{
	console.log("Server On");
});
