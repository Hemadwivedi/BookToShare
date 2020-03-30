//requires
var express = require("express");
var exphbs = require("express-handlebars");

//server port
var app = express();
var PORT = process.env.PORT || 8080;

//the express app and everything that the app will use
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);








//listening port
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });