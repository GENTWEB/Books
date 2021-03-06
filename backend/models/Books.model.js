const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
    book_titlle: {
        type: String
    },
    book_author: {
        type: String
    },
    book_description: {
        type: String
    },
    book_rating: {
        type: String
    }
});

module.exports = mongoose.model('Book', Book);