document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if(loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const storedEmail = localStorage.getItem("email");
            const storedPassword = localStorage.getItem("password");

            if (email === storedEmail && password === storedPassword) {
                alert("Vous êtes connecté !");
                window.location.href = '../views/investment.html';
            } else {
                alert("Identifiants incorrects !");
            }
        });
    }

    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const email = document.getElementById("registerEmail").value;
            const password = document.getElementById("registerPassword").value;
            const username = document.getElementById("username").value;

            if (email && password && username) {
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
                localStorage.setItem("username", username);
                localStorage.setItem("solde", 10000);

                alert("Votre compte a été créé !");
                window.location.href = '../views/investment.html';
            } else {
                alert("Veuillez remplir correctement le formulaire !");
            }
        });
    }
});
