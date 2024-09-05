// server/firebaseAdmin.js
require('dotenv').config();
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK (usually using service account)
admin.initializeApp({
    credential: admin.credential.applicationDefault(),  // Alternatively, use a service account
    projectId: process.env.FIREBASE_PROJECT_ID
});

module.exports = admin;