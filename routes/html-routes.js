var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app){
    app.get("/", function(req, res){
        if(req.user){
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/assets/login.html"));
    });

    app.get("/signup", function(req, res){
        if(req.user){
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/assets/signup.html"))
    });

    app.get("/members", isAuthenticated, function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/members.html"))
    })
}