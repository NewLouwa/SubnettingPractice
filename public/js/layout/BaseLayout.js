export function BaseLayout(content) {
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
            <a href="#" id="profile-link">Profil</a>
            <a href="#" id="signup-link">Inscription</a>
        </nav>
    `;

    const main = document.createElement('main');
    main.classList.add('app-main');
    main.appendChild(content);  // Injecter le contenu de la page

    const footer = document.createElement('footer');
    footer.classList.add('app-footer');
    footer.innerHTML = '<p>&copy; Exercices</p>';

    // Ajouter les éléments au conteneur principal
    app.appendChild(header);
    app.appendChild(main);
    app.appendChild(footer);
    console.log("BaseLayout loaded");
}