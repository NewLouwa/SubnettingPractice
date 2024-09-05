import { BaseLayout } from '../layout/BaseLayout.js';   // Use forward slashes
import { SignupPage } from './pages/SignupPage.js';
import { HomePage } from './pages/HomePage.js';
import { ProfilePage } from './pages/ProfilePage.js';

// Fonction pour gérer la navigation
function navigateTo(page) {
    switch(page) {
        case 'signup':
            SignupPage();
            break;
        case 'profile':
            ProfilePage();
            break;
        default:
            HomePage();
            break;
    }
}

// Gérer la navigation basée sur le hash de l'URL
function handleHashChange() {
    const hash = window.location.hash.substring(1); // Retirer le # du hash
    navigateTo(hash);
}

// Ajouter un écouteur pour les changements de hash
window.addEventListener('hashchange', handleHashChange);

// Gérer les clics sur les liens de navigation et modifier le hash
document.addEventListener('click', (e) => {
    if (e.target.id === 'home-link') {
        e.preventDefault();
        window.location.hash = 'home';  // Met à jour le hash, ce qui déclenche handleHashChange()
    } else if (e.target.id === 'profile-link') {
        e.preventDefault();
        window.location.hash = 'profile';
    } else if (e.target.id === 'signup-link') {
        e.preventDefault();
        window.location.hash = 'signup';
    }
});

// Initialiser l'application sur la page appropriée en fonction du hash
handleHashChange(); // Vérifie le hash actuel à l'ouverture
