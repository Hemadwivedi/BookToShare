
const path=require('path');
const express=require('express');

const app=express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//handlebar configuration
const hbs=require('express-handlebars');

app.engine('handlebars',hbs({ defaultLayout:'main',layoutsDir: __dirname+'/views/layout/' }));
app.set('views',path.join(__dirname,'views'));
app.set('view engine',"handlebars");


// for loging
const passport = require("./config/passport");
const session = require("express-session");
app.use(session({ secret: "hemashirleyeti", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//routing
require("./routes/html-routes")(app);
const  loginRouts = require("./routes/login-routes");
const  bookRoutes = require("./routes/book-routes");
const  userRoutes = require("./routes/user-routes");

app.use(loginRouts);
app.use('/api/user', userRoutes);
app.use('/api/book', bookRoutes);

//Server start
const PORT = process.env.PORT || 8080;

var db = require("./models");

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});