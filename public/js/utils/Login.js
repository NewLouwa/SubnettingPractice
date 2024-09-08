// utils/Login.js

export async function handleLogin(loginEmail, loginUUID, useUUIDOption, loginPassword) {
    try {
        let loginResponse;

        if (useUUIDOption.checked) {
            // User chose to log in with UUID
            const uuidValue = loginUUID.value;

            // Fetch the email from Firestore using the UUID
            const userResponse = await fetch(`/api/user/email-from-uuid/${uuidValue}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!userResponse.ok) {
                throw new Error('Failed to fetch email from UUID');
            }

            const userData = await userResponse.json();
            const userEmail = userData.email;

            console.log(`Fetched Email: ${userEmail}`);

            // Use the UUID as the password and email for Firebase Auth
            loginResponse = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: userEmail,
                    password: uuidValue  // Use UUID as password
                })
            });
        } else {
            // Normal login with email and password
            loginResponse = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: loginEmail.value,
                    password: loginPassword.value
                })
            });
        }

        const data = await loginResponse.json();
        if (loginResponse.status === 200) {
            alert('Connexion réussie !');
        } else {
            alert(`Erreur lors de la connexion: ${data.error}`);
        }
    } catch (error) {
        alert('Une erreur est survenue lors de la connexion. Veuillez réessayer.');
        console.error('Login error:', error);
    }
}