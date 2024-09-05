import { signUpUser } from '../auth.js';

// Fonction pour afficher la modale d'inscription
export function showSignupModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'signup-modal';

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => modal.remove());

    const modalTitle = document.createElement('h2');
    modalTitle.textContent = 'Inscription';

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.id = 'username';
    usernameInput.placeholder = 'Nom d\'utilisateur';

    const passwordChoiceLabel = document.createElement('p');
    passwordChoiceLabel.textContent = 'Voulez-vous créer un mot de passe ou utiliser une clé générée automatiquement ?';

    const passwordChoice = document.createElement('div');
    const usePasswordOption = document.createElement('input');
    usePasswordOption.type = 'checkbox';
    usePasswordOption.id = 'use-password';
    
    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = 'Je veux créer un mot de passe';

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.placeholder = 'Mot de passe (optionnel)';
    passwordInput.style.display = 'none';  // Caché par défaut

    // Afficher ou masquer le champ mot de passe selon le choix de l'utilisateur
    usePasswordOption.addEventListener('change', (event) => {
        passwordInput.style.display = event.target.checked ? 'block' : 'none';
    });

    const submitBtn = document.createElement('button');
    submitBtn.id = 'submit-signup';
    submitBtn.textContent = 'S\'inscrire';
    submitBtn.addEventListener('click', () => {
        const username = usernameInput.value;
        const usePassword = usePasswordOption.checked;
        const password = passwordInput.value;

        if (username.trim() === "") {
            alert("Veuillez entrer un nom d'utilisateur.");
        } else {
            // Inscription avec ou sans mot de passe
            signUpUser(username, usePassword, password);
            modal.remove();
        }
    });

    passwordChoice.appendChild(usePasswordOption);
    passwordChoice.appendChild(passwordLabel);
    
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(usernameInput);
    modalContent.appendChild(passwordChoiceLabel);
    modalContent.appendChild(passwordChoice);
    modalContent.appendChild(passwordInput);
    modalContent.appendChild(submitBtn);

    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}
