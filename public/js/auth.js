import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';
import { generateShortUUID } from './tools/GenerateUUID.js';  // Importer la fonction pour générer une clé unique
import firebaseConfig from '../firebaseConfig.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Fonction pour inscrire un utilisateur
export function signUpUser(username, usePassword, password = null) {
    const email = `${username}@example.com`;  // Générer un email factice à partir du nom d'utilisateur
    let finalPassword = password;

    // Si l'utilisateur choisit de ne pas créer de mot de passe, générer une clé unique avec `generateShortUUID`
    if (!usePassword) {
        finalPassword = generateShortUUID(10);
        console.log(`Clé unique générée pour la connexion : ${finalPassword}`);
    }

    // Inscrire l'utilisateur avec Firebase Auth
    createUserWithEmailAndPassword(auth, email, finalPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, { displayName: username })
                .then(() => {
                    console.log(`Inscription réussie pour : ${username}. Clé de connexion : ${finalPassword}`);
                })
                .catch((error) => {
                    console.error("Erreur lors de la mise à jour du profil : ", error);
                });
        })
        .catch((error) => {
            console.error("Erreur d'inscription : ", error.message);
        });
}
