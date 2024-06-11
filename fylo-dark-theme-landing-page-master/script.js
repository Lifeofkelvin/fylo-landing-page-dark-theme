function verifyEmail() {
    const emailInput = document.getElementById('email').value;
    const warningMessage = document.getElementById('warning-text');
    
    // Regular expression for validating an email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailInput)) {
        // Email is valid
        warningMessage.style.display = 'none';
    } else {
        // Email is not valid
        warningMessage.style.display = 'block';
    }
}
