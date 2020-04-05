const express = require('express');

const router = express.Router();

const bookController = require('../controller/bookController');

router.post('/create', bookController.createBook);

router.get('/search' , bookController.searchBook);


module.exports = router;