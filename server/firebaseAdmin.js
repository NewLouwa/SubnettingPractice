// server/firebaseAdmin.js

const admin = require('firebase-admin');
const serviceAccount = require('./subnetexercises-firebase-adminsdk.json');  // Download this from Firebase Console

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://subnetexercises-default-rtdb.firebaseio.com"  // Correct URL for the Firebase Realtime Database
  });

module.exports = admin;