const db = require('../config/connection');
module.exports = class Book {
    constructor(id, title, imageUrl, description, price) {
      this.id = id;
      this.title = title;
      this.imageUrl = imageUrl;
      this.description = description;
      this.price = price;
    }
  
    save() {
      return db.execute(
        'INSERT INTO book (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
        [this.title, this.price, this.imageUrl, this.description]
      );
    }
  
    static deleteById(id) {}
  
    static fetchAll() {
      return db.execute('SELECT * FROM book');
    }
  
    static findById(id) {
      return db.execute('SELECT * FROM book WHERE book.id = ?', [id]);
    }
  };
  