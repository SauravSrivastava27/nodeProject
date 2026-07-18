// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON payloads
app.use(express.json());

// A simple root route
app.get('/', (req, res) => {
    res.send('Welcome to your Node.js Application!');
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running asynchronously on port ${PORT}`);
});