document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error');

    // Simple authentication (for demonstration purposes)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page or perform an action
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});