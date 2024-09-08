// index.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./server/routes');  // Import routes from routes.js

const app = express();
app.use(bodyParser.json());  // Parse JSON bodies

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use routes from routes.js
app.use('/api', routes);  // All routes prefixed with /api will be handled by routes.js

// Fallback route to serve index.html for any unrecognized routes (Single Page Application behavior)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
