// server/authController.js
const admin = require('./firebaseAdmin');  // Firebase Admin SDK
const { generateShortUUID } = require('./tools/GenerateUUID');  // UUID generator
const db = admin.firestore();  // Firestore instance

// Signup Function
exports.signup = async (req, res) => {
    const { email, username, password, useUUID } = req.body;

    try {
        // Generate a UUID if the user opts to use UUID as their password
        let finalPassword = password;
        let userUUID = null;

        if (useUUID) {
            userUUID = generateShortUUID(10);  // Generate a 10-character UUID
            finalPassword = userUUID;  // Use UUID as the password
        }

        // Create the user in Firebase Auth, the password will be hashed by Firebase
        const userRecord = await admin.auth().createUser({
            email: email,
            password: finalPassword,  // Firebase will handle password hashing
            displayName: username
        });

        // Store additional user info (UUID, email, username, etc.) in Firestore
        await db.collection('users').doc(userRecord.uid).set({
            email: email,
            username: username,
            uuid: userUUID,  // Store UUID if used as password
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            useUUID: useUUID,  // Flag to check if UUID login is enabled
            role: 'user',  // Default role can be 'user' (or 'admin' if needed)
            lastLogin: null  // Set this later during login
        });

        // Return success response with UUID (if used)
        res.status(201).json({
            message: 'Utilisateur créé avec succès',
            userId: userRecord.uid,
            uuid: useUUID ? userUUID : null  // Return UUID if used as password
        });
    } catch (error) {
        if (error.code === 'auth/email-already-exists') {
            return res.status(400).json({ error: 'Cet email est déjà utilisé.' });
        }
        console.error("Erreur lors de la création de l'utilisateur:", error);
        res.status(500).json({ error: error.message });
    }
};

// Login Function
// Login Function
exports.login = async (req, res) => {
    const { email, password, uuid } = req.body;

    try {
        // Handle login with UUID
        if (uuid) {
            const userSnapshot = await db.collection('users').where('uuid', '==', uuid).get();

            if (userSnapshot.empty) {
                return res.status(401).json({ error: 'UUID invalide' });
            }

            const userDoc = userSnapshot.docs[0];
            const userEmail = userDoc.data().email;

            // Now log in with Firebase using email and UUID as the password
            // Firebase handles the password verification internally
            await admin.auth().getUserByEmail(userEmail);  // Ensure user exists in Firebase Auth

            return res.status(200).json({
                message: 'Connexion réussie avec UUID',
                userId: userDoc.id,
                email: userEmail,
                username: userDoc.data().username
            });
        }

        // Handle login with email and password
        const userRecord = await admin.auth().getUserByEmail(email);
        if (!userRecord) {
            return res.status(401).json({ error: 'Email non trouvé' });
        }

        // Firebase Auth automatically handles password hashing and verification.
        return res.status(200).json({
            message: 'Connexion réussie avec email',
            userId: userRecord.uid,
            email: userRecord.email
        });
    } catch (error) {
        console.error("Erreur lors de la connexion:", error.message);
        res.status(500).json({ error: error.message });
    }
};


// Middleware to check authentication
exports.checkAuth = async (req, res) => {
    try {
        const user = req.user;  // Assume req.user is set by authentication middleware
        res.json({ isLoggedIn: !!user });
    } catch (error) {
        console.error("Erreur lors de la vérification de l'authentification:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Logout Function
exports.logoutUser = async (req, res) => {
    try {
        // Add your logout logic here (e.g., clear session or token)
        res.json({ success: true });
    } catch (error) {
        console.error("Erreur lors de la déconnexion:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
