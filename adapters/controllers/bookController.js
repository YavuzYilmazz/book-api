// /src/adapters/controllers/bookController.js
class BookController {
    constructor(createBook, getAllBooks, deleteBook, updateBook) {
        this.createBook = createBook;
        this.getAllBooks = getAllBooks;
        this.deleteBook = deleteBook;
        this.updateBook = updateBook;
    }

    // Create a new book
    async create(req, res) {
        const bookData = req.body;
        try {
            await this.createBook.execute(bookData);
            return res.status(201).json({ message: 'Book created successfully!' });
        } catch (error) {
            console.log(bookData);
            return res.status(500).json({ error: error.message });
        }
    }

    // Get all books
    async getAll(req, res) {
        try {
            const books = await this.getAllBooks.execute();
            return res.status(200).json(books);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Delete a book by ID
    async delete(req, res) {
        const id = req.params.id;
        try {
            await this.deleteBook.execute(id);
            return res.status(200).json({ message: 'Book deleted successfully!' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Update a book by ID
    async update(req, res) {
        const id = req.params.id;
        const bookData = req.body;
        try {
            await this.updateBook.execute(id, bookData);
            return res.status(200).json({ message: 'Book updated successfully!' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = BookController;
