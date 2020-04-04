//requires
const path=require('path');
const express = require("express");
const bodyParser=require('body-parser');
const exphbs = require("express-handlebars");
const errorController=require('./controller/error');
const db=require('./config/connection')


//server port
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));
const apiRoutes=require("./routes/api-routes.js");
 
app.use('/main',apiRoutes);
app.use(errorController.get404);


//listening port
db.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
