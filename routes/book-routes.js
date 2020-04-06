const express = require('express');

const router = express.Router();

const bookController = require('../controller/bookController');

router.post('/create', bookController.createBook);

router.get('/search' , bookController.searchBook);

router.get('/:bookId' , bookController.getBookById);

router.post('/:bookId' , bookController.editBook);

router.delete('/:bookId' , bookController.deleteBook);

module.exports = router;