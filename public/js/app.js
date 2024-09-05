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

// Gérer les clics sur les liens de navigation
document.addEventListener('click', (e) => {
    if (e.target.id === 'home-link') {
        e.preventDefault();
        navigateTo('home');
    } else if (e.target.id === 'profile-link') {
        e.preventDefault();
        navigateTo('profile');
    }
});

// Lancer l'application sur la page d'accueil
HomePage();

