export function BaseLayout(content, isLoggedIn = false) {
    // Log pour afficher l'état de connexion de l'utilisateur
    console.log(`User logged in: ${isLoggedIn}`);

    // Créer les éléments communs
    const app = document.getElementById('app');
    app.innerHTML = '';  // Vider le conteneur

    const header = document.createElement('header');
    header.classList.add('app-header');
    header.innerHTML = `
        <div class="logo-title">
            <img src="assets/logo.png" alt="Logo" class="logo">
            <h1>Exercez-vous !</h1>
        </div>
        <nav class="main-nav">
            <a href="#" id="home-link">Accueil</a>
            ${isLoggedIn ? '<a href="#" id="profile-link">Profil</a>' : ''}
            <a href="#" id="signup-link">${isLoggedIn ? 'Déconnexion' : 'Connexion / Inscription'}</a>
        </nav>
    `;

    const main = document.createElement('main');
    main.classList.add('app-main');
    main.appendChild(content);  // Injecter le contenu de la page

    const footer = document.createElement('footer');
    footer.classList.add('app-footer');
    footer.innerHTML = '<p>&copy; 2024, NewLouwa <br> Made with ❤️ and 🤖</p>';

    // Ajouter les éléments au conteneur principal
    app.appendChild(header);
    app.appendChild(main);
    app.appendChild(footer);

    // Gestion des événements pour la déconnexion
    const signupLink = document.getElementById('signup-link');
    if (isLoggedIn) {
        signupLink.addEventListener('click', (e) => {
            e.preventDefault();
            logoutUser();  // Fonction de déconnexion
            window.location.hash = 'home';  // Rediriger vers la page d'accueil après la déconnexion
        });
    }

    console.log("BaseLayout loaded");
}

