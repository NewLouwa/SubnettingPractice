require('dotenv').config();  // Load environment variables
const express = require('express');
const path = require('path');
const admin = require('./server/firebaseAdmin');  // Import Firebase Admin SDK if needed

const app = express();

// Serve static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html as the entry point (for SPA behavior)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Optional: Create an API route that uses Firebase Admin for server-side logic
app.get('/api/data', (req, res) => {
    admin.firestore().collection('users').get()
        .then(snapshot => {
            const users = [];
            snapshot.forEach(doc => users.push(doc.data()));
            res.json(users);
        })
        .catch(err => res.status(500).send('Error fetching data'));
});

// Fallback route for Single Page Application (SPA) to serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});