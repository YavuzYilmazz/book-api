// /src/domain/entities/book.js

const mongoose = require('mongoose');
const authorSchema = require('./author');

// Define the book schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: authorSchema, // Using the author schema
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    publisher: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
