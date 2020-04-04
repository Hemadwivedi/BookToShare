var db = require("../models");

exports.createUser = (req, res, next) => {
    db.User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password
    }).then(function () {
        res.redirect("/");
    }).catch(function (err) {
        res.status(401).json(err);
    });
};

exports.getAllUser =  (req, res, next) => {
    db.User.findAll().then(function () {
        res.redirect(307, "/api/login");
    }).catch(function (err) {
        errorHandler(err);
        res.status(401).json(err);
    });
};