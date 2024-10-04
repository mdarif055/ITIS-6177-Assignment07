const express = require('express');
const app = express();
const PORT = 3000;

// Define a GET endpoint with query parameters
app.get('/api/say', (req, res) => {
    // Retrieve query parameters
    const keyword = req.query.keyword || 'Have a Good Day';

    // Send a JSON response
    res.json({ message: `Mohammad Arif says ${keyword}!` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});