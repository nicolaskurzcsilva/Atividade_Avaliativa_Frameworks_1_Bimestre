const express = require("express");//importação do motor de telas "ejs"
const app = express();//execução do "express"
app.set("view-engine", "ejs");//configuração do ejs como motor de telas
app.set("views", "./app/views");//alteração do diretório da pasta views

module.exports = app;//exportação do "ejs" para a const app
