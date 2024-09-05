import { BaseLayout } from '../layout/BaseLayout.js';

// Fonction pour afficher la page d'accueil
export function HomePage() {
    const content = document.createElement('div');
    content.classList.add('home-page');

    // Titre de la page d'accueil
    const title = document.createElement('h2');
    title.textContent = 'Bienvenue sur Cours de Sciences Informatiques 👨‍💻';

    // Texte d'accroche plus décontracté
    const description = document.createElement('p');
    description.textContent = 'Explore les sous-réseaux, les adresses IP, et les masques à travers des exercices amusants et interactifs. 🚀';

    // Une invitation avec un bouton incitatif pour commencer
    const startBtn = document.createElement('button');
    startBtn.classList.add('cta-button');
    startBtn.textContent = 'Commencez l\'aventure maintenant 🚀';
    startBtn.addEventListener('click', () => {
        window.location.href = '#signup';  // Redirige vers la page d'inscription
    });

    // Ajouter des éléments au contenu
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(startBtn);

    // Utiliser le layout de base pour rendre le contenu
    BaseLayout(content);
    console.log("HomePage loaded");
}