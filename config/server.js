const express = require("express");//importação do motor de telas "ejs"
const app = express();
app.set("view-engine", "ejs");
app.set("views", "./app/views");

module.exports = app;//exportando o "ejs" para a const app