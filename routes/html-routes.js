var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app){

    app.get("/", function(req, res){
        if(req.user){
            res.render("home");
        }else {
            res.sendFile(path.join(__dirname, "../public/login.html"));
        }
    });

    app.get("/signup", function(req, res){
        if(req.user){
            res.render("home");
        }else {
            res.sendFile(path.join(__dirname, "../public/signup.html"));
        }

    });
    
    app.get("/add-book", function(req, res){
        if(req.user){
            res.render("add-book");
        }else{
            res.sendFile(path.join(__dirname, "../public/login.html"))
        }
    });
    
};