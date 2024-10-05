// /src/use-cases/update-book/updateBook.js

class UpdateBook {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }

    async execute(id, data) {
        await this.bookRepository.update(id, data);
    }
}

module.exports = UpdateBook;
