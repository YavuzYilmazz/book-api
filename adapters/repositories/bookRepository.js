// /src/adapters/repositories/bookRepository.js

const Book = require('../../domain/entities/book');

class BookRepository {
    async save(bookData) {
        await bookData.save(); 
    }

    async getAll() {
        return await Book.find();
    }

    async update(id, bookData) {
        return await Book.findByIdAndUpdate(id, bookData, { new: true });
    }

    async delete(id) {
        return await Book.findByIdAndDelete(id);
    }
}

module.exports = BookRepository;
