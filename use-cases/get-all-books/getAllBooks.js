// /src/use-cases/get-all-books/getAllBooks.js

class GetAllBooks {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }

    async execute() {
        return await this.bookRepository.getAll();
    }
}


module.exports = GetAllBooks;
