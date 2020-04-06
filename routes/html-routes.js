var path = require("path");
var axios = require("axios");

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

    app.get("/search-apibook/:search", function (req, res) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`)
        .then(function(res){
            console.log(res.data.items)//7-11
        })
      });
};

//use .map method res.data.items
//books.selectAll()
