// Requiring dependencies
var express = require("express");

var PORT = process.env.PORT || 8080;

// setting up the express app
var app = express();

app.use(express.static("public"));

// To parse the application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import the routes to give the server access
var routes = require("./controllers/burgers_controller.js")

app.use(routes);

//Starting server to listen to client requests
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:", PORT);
})

module.exports = app;