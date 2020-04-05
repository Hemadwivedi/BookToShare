const express = require('express');
const passport = require('../config/passport')

const router = express.Router();

router.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
});

router.get("/api/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

module.exports = router;

