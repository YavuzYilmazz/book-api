// /src/framework/routes/bookRoutes.js

const express = require('express');
const BookController = require('../../adapters/controllers/bookController');
const CreateBook = require('../../use-cases/create-book/createBook');
const GetAllBooks = require('../../use-cases/get-all-books/getAllBooks');
const DeleteBook = require('../../use-cases/delete-book/deleteBook');
const UpdateBook = require('../../use-cases/update-book/updateBook');
const BookRepository = require('../../adapters/repositories/bookRepository');

const bookRoutes = express.Router();

const bookRepository = new BookRepository();
const createBook = new CreateBook(bookRepository);
const getAllBooks = new GetAllBooks(bookRepository);
const deleteBook = new DeleteBook(bookRepository);
const updateBook = new UpdateBook(bookRepository);
const bookController = new BookController(createBook, getAllBooks, deleteBook, updateBook);

bookRoutes.post('/', (req, res) => bookController.create(req, res));
bookRoutes.get('/', (req, res) => bookController.getAll(req, res));
bookRoutes.delete('/:id', (req, res) => bookController.delete(req, res));
bookRoutes.put('/:id', (req, res) => bookController.update(req, res));

module.exports = bookRoutes;
