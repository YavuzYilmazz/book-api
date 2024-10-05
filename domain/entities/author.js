// /src/domain/entities/author.js

const mongoose = require('mongoose');

// Define the author schema
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    }
});

// Export the schema
module.exports = authorSchema;
