let chai;
let chaiHttp;
let mongoose;
let server;
let Book;
let request;
let app;

before(async function () {
    this.timeout(10000);  // Set timeout to 10 seconds for the connection

    chai = await import('chai');  // Dynamically import chai
    chaiHttp = await import('chai-http');  // Dynamically import chai-http
    mongoose = require('mongoose');  // Regular require for other CommonJS modules
    server = require('../server');  // server module
    Book = require('../domain/entities/book');  // Book model
    request = require("supertest");
    app = require("../framework/http/expressApp");

    chai.should();
    chai.use(chaiHttp.default);  // Attach the default export of chai-http to chai
});

afterEach(async function () {
    await mongoose.connection.db.dropDatabase();  // Drop the database after each test
});

after(async function () {
    await mongoose.disconnect();  // Properly disconnect from MongoDB
});
  
describe('Books API Endpoints', () => {
    describe('POST /books', () => {
        it('should create a new book', async () => {
            let book = {
                title: 'The Pragmatic Programmer',
                author: {
                    name: 'Andy Hunt',
                    country: 'USA',
                    birthDate: '1964-07-12'
                },
                price: 35.99,
                isbn: '978-0201616224',
                language: 'English',
                pages: 352,
                publisher: 'Addison-Wesley'
            };

            const res = await request(app).post("/books").send(book);
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Book created successfully!');
        });
    });

    describe('GET /books', () => {
        it('should GET all the books', async () => {
            const books = [
                {
                    "title": "Design12",
                    "author": {
                        "name": "Erich Gamma",
                        "country": "USA",
                        "birthDate": "1961-01-01"
                    },
                    "price": 39.99,
                    "isbn": "978-0201633610",
                    "language": "English",
                    "pages": 395,
                    "publisher": "Addison-Wesley"
                }
              ];
              await Book.insertMany(books);
              const res = await request(app).get("/books");
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(1);
        });
    });

    describe('PUT /books/:id', () => {
        it('should UPDATE a book by the given id', async () => {
            let book = new Book({
                title: 'Clean Architecture',
                author: {
                    name: 'Robert C. Martin',
                    country: 'USA',
                    birthDate: '1952-12-05'
                },
                price: 29.99,
                isbn: '978-0132350884',
                language: 'English',
                pages: 464,
                publisher: 'Prentice Hall'
            });

            await book.save();
            const res = await request(app)
                .put('/books/' + book._id)
                .send({
                    title: 'Clean Architecture - Updated',
                    author: {
                        name: 'Robert C. Martin',
                        country: 'USA',
                        birthDate: '1952-12-05'
                    },
                    price: 34.99,
                    isbn: '978-0132350884',
                    language: 'English',
                    pages: 464,
                    publisher: 'Prentice Hall'
                });

            res.should.have.status(200);
            res.body.should.have.property('message').eql('Book updated successfully!');
        });
    });

    describe('DELETE /books/:id', () => {
        it('should DELETE a book by the given id', async () => {
            let book = new Book({
                title: 'Refactoring',
                author: {
                    name: 'Martin Fowler',
                    country: 'UK',
                    birthDate: '1963-01-18'
                },
                price: 39.99,
                isbn: '978-0201485677',
                language: 'English',
                pages: 464,
                publisher: 'Addison-Wesley'
            });

            await book.save();

            const res = await request(app)
                .delete('/books/' + book._id);

            res.should.have.status(200);
            res.body.should.have.property('message').eql('Book deleted successfully!');
        });
    });
});
