document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const messageElement = document.getElementById('message');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Envoi des informations de connexion au serveur
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => {
            if (response.ok) {
                messageElement.textContent = 'Information correcte';
            } else {
                messageElement.textContent = 'Information incorrecte';
            }
        })
        .catch(error => console.error('Error during login:', error));
    });



});
