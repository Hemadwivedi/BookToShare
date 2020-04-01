//requires
var express = require("express");
var exphbs = require("express-handlebars");
var passport = require("./config/passport");

//server port
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");

//the express app and everything that the app will use
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// for loging
// app.use(session({ secret: "hemashirleyeti", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// // Requiring our routes
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

//listening port
// db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
//   });
// });

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
