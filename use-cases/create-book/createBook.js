// /src/use-cases/create-book/createBook.js

const Book = require('../../domain/entities/book');

class CreateBook {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }

    async execute(data) {
        const book = new Book({
            title: data.title,
            author: data.author,
            price: data.price,
            isbn: data.isbn,
            language: data.language,
            pages: data.pages,
            publisher: data.publisher
        });
        await this.bookRepository.save(book);
    }
}

module.exports = CreateBook;
