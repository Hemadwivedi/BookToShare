var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    app.get("/", function (req, res) {
        if (req.user) {
            res.render("home", {user: req.user});
        } else {
            res.sendFile(path.join(__dirname, "../public/login.html"));
        }
    });

    app.get("/signup", function (req, res) {
        if (req.user) {
            res.render("home");
        } else {
            res.sendFile(path.join(__dirname, "../public/signup.html"));
        }

    });

    app.get("/add-book", isAuthenticated, function (req, res) {
        res.render("add-book");
    });

    app.get("/browse-book", isAuthenticated, function (req, res) {
        res.render("browse-book");
    });
    app.get("/search-apibook", isAuthenticated, function (req, res) {
        res.render("search-apibook");
    });


};