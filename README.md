# book-api Project

## Project Overview
This project is a **Book Management API** built using Node.js, Express, and MongoDB. The API supports creating, updating, deleting, and fetching books. The system is dockerized, and includes a MongoDB database and full test coverage using Mocha, Chai, and Supertest.

---

## Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Environment Variables](#environment-variables)
5. [Running the Application](#running-the-application)
6. [Running Tests](#running-tests)
7. [API Documentation](#api-documentation)
8. [Docker Usage](#docker-usage)
9. [Contributing](#contributing)
10. [Contact](#contact)
11. [Help Video](#help-video)

---

## Requirements

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/download/) v18+
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation

Follow the steps below to set up and run the project:


1. **Clone the repository:**

   ```bash
   git clone https://github.com/YavuzYilmazz/book-api.git
   cd book-api
   ```


2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root of your project and add the following values. You can use `.env.dist` file :

   ```bash
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/Book
   ```


4. **MongoDB Setup:**

   If you are not using Docker, ensure that MongoDB is running locally on port `27017`.

## Project Structure

The project follows **clean architecture** principles. Below is an overview of the key directories and files:

```
book-api/
│
├── adapters/                 # Adapters for controllers and repositories
│   ├── controllers/          # Request handling logic
│   └── repositories/         # Database access logic
│
├── domain/                   # Business logic and entities
│   └── entities/             # Business entities (Book, Author, etc.)
│
├── framework/                # Framework-specific implementations
│   └── routes/               # API routes definitions
│   └── http/                 # Express app configuration
│
├── infrastructure/           # Infrastructure logic (e.g., database connections)
│   └── database/             # MongoDB connection
│
├── test/                     # Unit and integration tests
│
├── use-cases/                # Use-case specific logic (CRUD operations)
│
└── Dockerfile                # Docker configuration
└── docker-compose.yml        # Docker Compose configuration
└── package.json              # Project metadata and scripts
```

## Environment Variables

Make sure to set up the following environment variables in your `.env` file. You can use 
`.env.dist` file:


## Running the Application

Once you've set up the environment variables, you can run the project locally or using Docker.

### Running Locally

1. **Start the MongoDB instance** (if not using Docker):

   ```bash
   mongod
   ```

2. **Start the app:**

   ```bash
   npm start
   ```

The application will run on `http://localhost:3000`.

### Running with Docker

If you'd prefer to use Docker, follow the steps below:

1. **Build and run the containers:**

   ```bash
   docker-compose up --build
   ```

2. The app will be available at `http://localhost:3000`.

## Running Tests

The project includes a full test suite written with Mocha, Chai, and Supertest.

To run the tests:

```bash
npm test
```


## API Documentation

# API Endpoints

| Method | Endpoint                         | Description                           |
|--------|----------------------------------|---------------------------------------|
| GET    | /books                           | Retrieve all books                    |
| POST   | /books                           | Add a new book                        |
| PUT    | /books/:id                       | Update a book by ID                   |
| DELETE | /books/:id                       | Delete a book by ID                   |


Here is a brief overview of the available API endpoints:

### `POST /books`

Create a new book.

- **Request Body:**

  ```json
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
  ```

- **Response:**
  ```json
  {
    "message": "Book created successfully"
  }
  ```

### `GET /books`

Fetch all books.

- **Response:**
  ```json
  [
    {
      "id": "6123456789abcdef",
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
  ]
  ```

### `PUT /books/:id`

Update a book by ID.

- **Request Body:**

  ```json
  {
    "title": "Clean Architecture - Updated",
    "author": {
      "name": "Robert C. Martin",
      "country": "USA",
      "birthDate": "1952-12-05"
    },
    "price": 34.99,
    "isbn": "978-0132350884",
    "language": "English",
    "pages": 464,
    "publisher": "Prentice Hall"
  }
  ```

- **Response:**
  ```json
  {
    "message": "Book updated successfully!"
  }
  ```


### `DELETE /books/:id`

Delete a book by ID.

- **Response:**
  ```json
  {
    "message": "Book updated successfully!"
  }
  ```

## Docker Usage

The Docker configuration consists of two services: `backend` and `mongo`.

### Docker Services

1. **MongoDB Service**  
   The `mongo` service runs a MongoDB instance with username and password authentication. Data is persisted in a local volume `./data/db`.

2. **Backend Service**  
   The `backend` service runs the Node.js application.

### Useful Docker Commands

- **Start containers:**

  ```bash
  docker-compose up
  ```

- **Stop containers:**

  ```bash
  docker-compose down
  ```

- **Rebuild containers:**

  ```bash
  docker-compose up --build
  ```

- **Run tests in Docker:**

  ```bash
  docker-compose run test
  ```

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add some feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.


## Contact 

If you have any questions or need help with the setup, feel free to reach out to me at [yavuz.yilmaz1@outlook.com].

## Help Video
