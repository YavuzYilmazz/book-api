// /src/use-cases/delete-book/deleteBook.js

class DeleteBook {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }

    async execute(id) {
        await this.bookRepository.delete(id);
    }
}

module.exports = DeleteBook;
