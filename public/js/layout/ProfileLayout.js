export function ProfileLayout(content) {
    const app = document.getElementById('app');
    app.innerHTML = '';  // Vider le conteneur

    const header = document.createElement('header');
    header.classList.add('profile-header');
    header.innerHTML = '<h1>Profil Utilisateur</h1>';

    const main = document.createElement('main');
    main.classList.add('profile-main');
    main.appendChild(content);

    const footer = document.createElement('footer');
    footer.classList.add('profile-footer');
    footer.innerHTML = '<p>&copy; 2024 Profil Utilisateur</p>';

    app.appendChild(header);
    app.appendChild(main);
    app.appendChild(footer);
}
