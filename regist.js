function register(){

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    // Basic validation (you can enhance this as needed)
    if (username && password && email) {
        alert('Registration successful!');
        // Here you can add code to send data to the server
    } else {
        alert('Please fill in all fields.');
    }

}






