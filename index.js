// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file as the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to serve SSE
app.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Initial event to confirm connection
    res.write(`data: Connected\n\n`);

    // Send data every 2 seconds
    const intervalId = setInterval(() => {
        const now = new Date().toLocaleTimeString();
        res.write(`data: ${now}\n\n`);
    }, 2000);

    // Close the connection when the client disconnects
    req.on('close', () => {
        clearInterval(intervalId);
        res.end();
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
