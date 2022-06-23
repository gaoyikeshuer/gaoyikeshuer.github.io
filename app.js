
const express = require("express");
const app = express();
const mysql = require("mysql");
var port = 8000;
var bodyParser = require("body-parser");
var session = require("express-session");
var fileUpload = require("express-fileupload");

app.use(express.static("public"));
app.set("view-engine", "ejs");
app.set("views", "views");
app.get("/", function(req,res){
    res.render("index.ejs")
})
app.listen(port);
console.log("Server running on http://localhost:" + port);