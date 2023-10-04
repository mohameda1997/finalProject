document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const loginData = {
            username: username,
            password: password
        };

        fetch('http://localhost:8080/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.length > 0 && data[0] === "http://localhost:8080/home.html") {
                alert('Login successful!'); // Display a success alert
                window.location.href = data[0];
            } else {
                alert('Login failed. Please check your credentials.'); // Display an error alert
            }
        })
        .catch(error => {
            console.error('Login error:', error);
            alert('Login failed. An error occurred.'); // Display a generic error alert
        });
    });
});
