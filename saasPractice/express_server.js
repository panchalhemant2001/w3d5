var express = require("express");


var app = express();
var PORT = process.env.PORT || 8080;


app.set("view engine", "ejs");


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));


app.get("/", (req, res) => {
  res.redirect("/index");
});

app.get("/index", (req, res) => {
  res.render("index");
});


var server = app.listen(PORT, () => {
  console.log("Saas listening on port ${PORT}");
});