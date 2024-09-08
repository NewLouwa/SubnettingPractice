import { SignupPage } from './pages/SignupPage.js';
import { HomePage } from './pages/HomePage.js';
import { ProfilePage } from './pages/ProfilePage.js';

// Function to check the user's authentication state
async function checkAuthState(callback) {
    try {
        const response = await fetch('/api/check-auth');
        if (!response.ok) {
            throw new Error('Failed to check auth state');
        }
        const data = await response.json();
        callback(data.isLoggedIn);
    } catch (error) {
        console.error('Error checking auth state:', error);
        callback(false); // Default to not logged in if there's an error
    }
}

// Function to update navigation based on login state
function updateNavigation(isLoggedIn) {
    const profileLink = document.getElementById('profile-link');
    const signupLink = document.getElementById('signup-link');

    if (isLoggedIn) {
        profileLink.style.display = 'inline';  // Show "Profile" link
        signupLink.textContent = 'Déconnexion';  // Change to "Déconnexion"
        signupLink.removeEventListener('click', handleLogout); // Clean up any existing listeners
        signupLink.addEventListener('click', handleLogout);  // Add the logout handler
    } else {
        profileLink.style.display = 'none';  // Hide "Profile" link
        signupLink.textContent = 'Connexion / Inscription';  // Change to "Connexion / Inscription"
    }
}

// Function to handle navigation
function navigateTo(page, isLoggedIn) {
    switch (page) {
        case 'signup':
            SignupPage();
            break;
        case 'profile':
            if (isLoggedIn) {
                ProfilePage();  // Only allow access to the profile if the user is logged in
            } else {
                alert("Vous devez être connecté pour accéder au profil.");
                window.location.hash = 'home';
                HomePage();
            }
            break;
        default:
            HomePage();
            break;
    }
}

// Handle URL hash changes
async function handleHashChange() {
    const hash = window.location.hash.substring(1); // Remove the # from the hash
    checkAuthState((isLoggedIn) => {
        navigateTo(hash, isLoggedIn);
        updateNavigation(isLoggedIn);  // Update the navigation when the user logs in or out
    });
}

// Initial call to handle the current hash on page load
handleHashChange();

// Listen for hash changes to navigate between pages
window.addEventListener('hashchange', handleHashChange);

// Handle navigation link clicks
document.addEventListener('click', (e) => {
    if (e.target.id === 'home-link') {
        e.preventDefault();
        window.location.hash = 'home';  // Updates the hash to trigger handleHashChange()
    } else if (e.target.id === 'profile-link') {
        e.preventDefault();
        window.location.hash = 'profile';
    } else if (e.target.id === 'signup-link') {
        e.preventDefault();
        if (e.target.textContent === 'Connexion / Inscription') {
            window.location.hash = 'signup';  // Redirect to signup page if not logged in
        }
    }
});

// Logout function
async function handleLogout(e) {
    e.preventDefault();
    try {
        const response = await fetch('/api/logout', { method: 'POST' });
        if (!response.ok) {
            throw new Error('Failed to log out');
        }
        window.location.hash = 'home';
        handleHashChange();  // Navigate to the home page
    } catch (error) {
        console.error('Error logging out:', error);
    }
}
