document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        const registrationData = {
            username: newUsername,
            password: newPassword
        };

        fetch('http://localhost:8080/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registrationData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.length > 0 && data[0] === "http://localhost:8080/login.html") {
                alert('Registration successful!'); // Display a success alert
                window.location.href = data[0];
            } else if (data.length > 0 && data[0] === "Username already exists") {
                alert('Registration failed. Please choose a different username.'); // Display an error alert
            } else {
                alert('Registration failed. An error occurred.'); // Display a generic error alert
            }
        })
        .catch(error => {
            console.error('Registration error:', error);
            alert('Registration failed. An error occurred.'); // Display a generic error alert
        });
    });
});
