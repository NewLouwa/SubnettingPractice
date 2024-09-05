import { ProfileLayout } from "..\layout\ProfileLayout.js";

// Fonction pour afficher la page de profil
export function ProfilePage() {
    const content = document.createElement('div');
    content.classList.add('profile-page');

    // Titre de la page de profil
    const title = document.createElement('h2');
    title.textContent = 'Mon Profil';

    // Information utilisateur (ajusté selon votre projet Firebase)
    const userInfo = document.createElement('div');
    userInfo.classList.add('user-info');
    userInfo.innerHTML = `
        <p><strong>Nom d'utilisateur :</strong> <span id="username">JohnDoe</span></p>
        <p><strong>Email :</strong> <span id="user-email">johndoe@example.com</span></p>
        <p><strong>Date d'inscription :</strong> <span id="signup-date">01 Janvier 2024</span></p>
    `;

    // Bouton pour déconnexion
    const logoutBtn = document.createElement('button');
    logoutBtn.textContent = 'Se déconnecter';
    logoutBtn.addEventListener('click', () => {
        // Vous ajouterez la fonction Firebase Auth de déconnexion ici
        alert('Déconnexion réussie!');
        window.location.href = '#home';  // Retour à l'accueil après déconnexion
    });

    content.appendChild(title);
    content.appendChild(userInfo);
    content.appendChild(logoutBtn);

    // Utiliser le layout de profil pour injecter le contenu
    ProfileLayout(content);
}