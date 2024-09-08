// server/userController.js
const admin = require('./firebaseAdmin');  // Firebase Admin SDK
const db = admin.firestore();  // Firestore instance

// Fetch Email from UUID
exports.getEmailFromUUID = async (req, res) => {
    const { uuid } = req.params;

    try {
        const userSnapshot = await db.collection('users').where('uuid', '==', uuid).get();
        if (userSnapshot.empty) {
            return res.status(404).json({ error: 'UUID not found' });
        }

        const userDoc = userSnapshot.docs[0];
        const email = userDoc.data().email;

        // Return the email as JSON
        res.status(200).json({ email: email });
    } catch (error) {
        console.error('Error fetching email from UUID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Fetch User Profile
exports.getUserProfile = async (req, res) => {
    const { uid } = req.params;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ error: 'User not found' });
        }

        const userData = userDoc.data();
        res.status(200).json(userData);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
