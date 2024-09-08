import { BaseLayout } from '../layout/BaseLayout.js';
import { handleSignupClick, handlePasswordToggle, togglePasswordVisibility } from '../utils/Signup.js';  // Correct function name import
import { handleLogin } from '../utils/Login.js';  // Import the login logic

export function SignupPage() {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '/css/signup.css';
    document.head.appendChild(style);

    const content = document.createElement('div');
    content.classList.add('signup-page');

    const container = document.createElement('div');
    container.classList.add('signup-container');

    /* --------- Signup Form --------- */
    const signupForm = document.createElement('div');
    signupForm.classList.add('signup-form');
    const signupTitle = document.createElement('h2');
    signupTitle.textContent = 'Inscription';

    const signupEmail = document.createElement('input');
    signupEmail.type = 'email';
    signupEmail.placeholder = 'Email';

    const confirmEmail = document.createElement('input');
    confirmEmail.type = 'email';
    confirmEmail.placeholder = 'Confirmez l\'email';

    const signupUsername = document.createElement('input');
    signupUsername.placeholder = 'Nom d\'utilisateur';

    const signupChoiceLabel = document.createElement('p');
    signupChoiceLabel.textContent = 'Voulez-vous utiliser une clé UUID générée automatiquement ou créer un mot de passe ?';

    const signupChoice = document.createElement('div');
    const useUUIDOption = document.createElement('input');
    useUUIDOption.type = 'checkbox';
    useUUIDOption.id = 'use-uuid';  // Checkbox to switch between UUID and password
    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = 'Je veux créer un mot de passe';

    const uuidExplanation = document.createElement('span');
    uuidExplanation.textContent = "Qu'est-ce qu'un UUID et pourquoi l'utiliser ?";
    uuidExplanation.style.cursor = 'pointer';
    uuidExplanation.style.color = '#007bff';
    uuidExplanation.style.marginLeft = '10px';
    
    uuidExplanation.addEventListener('click', () => {
        const modal = document.getElementById('uuidModal');
        const overlay = document.getElementById('modalOverlay');
        modal.style.display = 'block';
        overlay.style.display = 'block';
    });

    // Password input with toggle visibility and confirmation
    const passwordWrapper = document.createElement('div');
    passwordWrapper.classList.add('password-wrapper');

    const signupPassword = document.createElement('input');
    signupPassword.type = 'password';
    signupPassword.placeholder = 'Mot de passe';
    signupPassword.style.display = 'none';  // Hidden by default

    const confirmPassword = document.createElement('input');
    confirmPassword.type = 'password';
    confirmPassword.placeholder = 'Confirmez le mot de passe';
    confirmPassword.style.display = 'none';  // Hidden by default

    const signupPasswordToggle = document.createElement('span');
    signupPasswordToggle.classList.add('password-toggle');
    signupPasswordToggle.textContent = '👁️';
    signupPasswordToggle.style.display = 'none';  // Hidden by default

    // Attach toggle visibility event
    signupPasswordToggle.addEventListener('click', () => {
        togglePasswordVisibility(signupPassword, confirmPassword, signupPasswordToggle);
    });

    // Checkbox Toggle Logic for showing/hiding password fields
    useUUIDOption.addEventListener('change', (event) => {
        const isChecked = event.target.checked;
        handlePasswordToggle(signupPassword, confirmPassword, signupPasswordToggle, isChecked);
    });

    handlePasswordToggle(signupPassword, confirmPassword, signupPasswordToggle, useUUIDOption.checked);  // Ensure correct display on load

    const signupButton = document.createElement('button');
    signupButton.textContent = 'S\'inscrire';

    signupButton.addEventListener('click', (e) => {
        handleSignupClick(e, signupEmail, confirmEmail, signupUsername, signupPassword, confirmPassword, useUUIDOption);
    });

    signupChoice.appendChild(useUUIDOption);
    signupChoice.appendChild(passwordLabel);
    signupChoice.appendChild(uuidExplanation);

    signupForm.appendChild(signupTitle);
    signupForm.appendChild(signupEmail);
    signupForm.appendChild(confirmEmail);
    signupForm.appendChild(signupUsername);
    signupForm.appendChild(signupChoiceLabel);
    signupForm.appendChild(signupChoice);
    signupForm.appendChild(passwordWrapper);
    signupForm.appendChild(confirmPassword);
    signupForm.appendChild(signupButton);

    /* --------- Login Form --------- */
    const loginForm = document.createElement('div');
    loginForm.classList.add('login-form');
    const loginTitle = document.createElement('h2');
    loginTitle.textContent = 'Connexion';

    const loginChoiceLabel = document.createElement('p');
    loginChoiceLabel.textContent = 'Souhaitez-vous vous connecter avec un UUID ou un email et un mot de passe ?';

    const loginChoice = document.createElement('div');
    const useUUIDOptionLogin = document.createElement('input');
    useUUIDOptionLogin.type = 'checkbox';
    useUUIDOptionLogin.id = 'use-uuid';
    const uuidLabel = document.createElement('label');
    uuidLabel.textContent = 'Je veux me connecter avec un UUID';

    const loginUUID = document.createElement('input');
    loginUUID.placeholder = 'UUID';
    loginUUID.style.display = 'none';

    const loginEmail = document.createElement('input');
    loginEmail.type = 'email';
    loginEmail.placeholder = 'Email';

    const loginPassword = document.createElement('input');
    loginPassword.type = 'password';
    loginPassword.placeholder = 'Mot de passe';

    const loginPasswordToggle = document.createElement('span');
    loginPasswordToggle.classList.add('password-toggle');
    loginPasswordToggle.textContent = '👁️';

    loginPasswordToggle.addEventListener('click', () => {
        const isPasswordVisible = loginPassword.type === 'text';
        loginPassword.type = isPasswordVisible ? 'password' : 'text';
        loginPasswordToggle.textContent = isPasswordVisible ? '👁️' : '🙈';
    });

    useUUIDOptionLogin.addEventListener('change', (event) => {
        const useUUID = event.target.checked;
        loginUUID.style.display = useUUID ? 'block' : 'none';
        loginEmail.style.display = useUUID ? 'none' : 'block';
        loginPassword.style.display = useUUID ? 'none' : 'block';
        loginPasswordToggle.style.display = useUUID ? 'none' : 'block';
    });

    const loginButton = document.createElement('button');
    loginButton.textContent = 'Se connecter';

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        handleLogin(loginEmail, loginUUID, useUUIDOptionLogin, loginPassword);
    });

    loginChoice.appendChild(useUUIDOptionLogin);
    loginChoice.appendChild(uuidLabel);

    loginForm.appendChild(loginTitle);
    loginForm.appendChild(loginChoiceLabel);
    loginForm.appendChild(loginChoice);
    loginForm.appendChild(loginUUID);
    loginForm.appendChild(loginEmail);
    loginForm.appendChild(loginPassword);
    loginForm.appendChild(loginPasswordToggle);
    loginForm.appendChild(loginButton);

    container.appendChild(loginForm);
    container.appendChild(signupForm);
    content.appendChild(container);

    BaseLayout(content);

    /* --------- UUID Explanation Modal --------- */
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-overlay');
    modalOverlay.id = 'modalOverlay';
    modalOverlay.style.display = 'none';  // Hidden by default

    const uuidModal = document.createElement('div');
    uuidModal.classList.add('modal');
    uuidModal.id = 'uuidModal';
    uuidModal.style.display = 'none';  // Hidden by default

    const closeModal = document.createElement('span');
    closeModal.classList.add('close');
    closeModal.textContent = '×';

    closeModal.addEventListener('click', () => {
        uuidModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = `
    <h2>Qu'est-ce qu'un UUID ?</h2>
    <p>Un UUID (Universally Unique Identifier) est une clé unique générée automatiquement qui permet d'identifier un utilisateur dans le système. Utiliser un UUID comme méthode de connexion offre une alternative sécurisée au mot de passe traditionnel.</p>
    <p>Si vous choisissez d'utiliser un UUID, vous n'aurez pas besoin de créer de mot de passe pour le moment. Cependant, <strong>vous devez impérativement noter l'UUID dans un endroit sécurisé</strong> ou utiliser un gestionnaire de mots de passe pour le conserver.</p>
    <p>Vous pourrez toujours créer un mot de passe plus tard si vous le souhaitez, mais l'UUID restera un moyen valide de vous connecter à votre compte.</p>
    <p>Nous vous recommandons fortement d'utiliser un gestionnaire de mots de passe pour stocker en toute sécurité votre UUID et d'autres informations importantes.</p>
`;

    uuidModal.appendChild(closeModal);
    uuidModal.appendChild(modalContent);

    document.body.appendChild(modalOverlay);
    document.body.appendChild(uuidModal);
}
