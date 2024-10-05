// /src/server.js

const app = require('./framework/http/expressApp');
const connectDB = require('./infrastructure/database/mongoConnection');

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
