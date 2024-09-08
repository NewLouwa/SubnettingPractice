// utils/Signup.js

// Function to handle the visibility of password fields
export function handlePasswordToggle(signupPassword, confirmPassword, signupPasswordToggle, isChecked) {
    if (isChecked) {
        signupPassword.style.display = 'block';
        confirmPassword.style.display = 'block';
        signupPasswordToggle.style.display = 'block';
    } else {
        signupPassword.style.display = 'none';
        confirmPassword.style.display = 'none';
        signupPasswordToggle.style.display = 'none';
    }
}

// Function to toggle password visibility
export function togglePasswordVisibility(signupPassword, confirmPassword, signupPasswordToggle) {
    const isPasswordVisible = signupPassword.type === 'text';
    signupPassword.type = isPasswordVisible ? 'password' : 'text';
    confirmPassword.type = isPasswordVisible ? 'password' : 'text';
    signupPasswordToggle.textContent = isPasswordVisible ? '👁️' : '🙈';
}

// Function to handle signup button click
export function handleSignupClick(event, signupEmail, confirmEmail, signupUsername, signupPassword, confirmPassword, usePasswordOption) {
    event.preventDefault();

    const email = signupEmail.value.trim();
    const confEmail = confirmEmail.value.trim();
    const username = signupUsername.value.trim();
    const password = signupPassword.value;
    const confPassword = confirmPassword.value;

    // Validate form before submitting
    if (usePasswordOption.checked && !validateSignupForm(email, confEmail, password, confPassword)) {
        return;
    }

    const useUUID = !usePasswordOption.checked;  // If the user opts for UUID, the checkbox will be unchecked
    sendSignupData(email, username, password, useUUID);
}

// Function to validate the signup form
export function validateSignupForm(email, confirmEmail, password, confirmPassword) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Veuillez entrer un email valide.');
        return false;
    }

    if (email !== confirmEmail) {
        alert('Les emails ne correspondent pas.');
        return false;
    }

    if (password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
        alert('Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return false;
    }

    return true;
}

// Function to send signup data to the API
export async function sendSignupData(email, username, password, useUUID) {
    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                username,
                password,
                useUUID
            })
        });

        const data = await response.json();
        if (response.status === 201) {
            alert(`Inscription réussie ! UUID: ${data.uuid} (Notez cette clé si utilisée)`);
        } else {
            alert(`Erreur lors de l'inscription: ${data.error}`);
        }
    } catch (error) {
        alert('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
        console.error('Signup error:', error);
    }
}
