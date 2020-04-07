var db = require("../models");

exports.getCart = (req, res, next) => {
    db.User.findByPk(req.user.id)
        .then(user => user.getCart())
        .then(cart => cart.getBooks())
        .then(books => res.json(books));
};

exports.addToCart = (req, res, next) => {
    const selector = {where: {id: req.params.bookId}};
    db.Book.findOne(selector)
        .then(book => {
            return db.User.findByPk(req.user.id)
                .then(user => user.getCart())
                .then(cart => cart.addBook(book))
        }).then(result => res.json(result))

};

