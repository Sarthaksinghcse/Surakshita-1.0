// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the Get Started and Login buttons by their IDs
    const getStartedButton = document.getElementById('getStartedButton');
    const loginButton = document.getElementById('loginButton');

    // Add event listener for Get Started button click event
    getStartedButton.addEventListener('click', function() {
        window.location.href = 'login.html'; // Redirect to login.html
    });

    // Add event listener for Login button click event
    loginButton.addEventListener('click', function() {
        window.location.href = 'login.html'; // Redirect to login.html
    });
});
