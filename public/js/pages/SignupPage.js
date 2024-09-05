import { BaseLayout } from './layout/BaseLayout.js';   // One directory up, then into layout
import { showSignupModal } from "../modals/SignupModal.js";

// Fonction pour afficher la page d'inscription
export function SignupPage() {
    const content = document.createElement('div');
    content.classList.add('signup-page');
    
    const title = document.createElement('h2');
    title.textContent = 'Inscription';

    const signupBtn = document.createElement('button');
    signupBtn.textContent = 'S\'inscrire';
    signupBtn.addEventListener('click', showSignupModal);

    content.appendChild(title);
    content.appendChild(signupBtn);

    // Utiliser le layout de base
    BaseLayout(content);
}