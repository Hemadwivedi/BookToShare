var db = require("../models");

exports.createBook = (req, res, next) => {
    db.Book.create({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        description: req.body.description,
        jpegImg: req.body.jpegImg
    }).then(function () {
        res.redirect('/api/book/search');
    })
};

exports.searchBook = (req, res, next) => {
    db.Book.findAll()
        .then(function (books) {
            const booksData = books.map(book => book.dataValues);
            res.render("search-book", {books: booksData});
        });
};
/*exports.updateBook=(req,res,next)=>{
    db.Book.update({
        title: req.body.title,
        author:req.body.title,
        price: req.body.price,
        description: req.body.description,
        jpegImg: req.body.jpegImg

    }).then(function)
}*/

