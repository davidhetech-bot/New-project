
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var confirmPasswordError = document.getElementById('confirm-password-error');
var phoneError = document.getElementById('phone-error');
var messageError = document.getElementById('message-error');
var successError = document.getElementById('success-error');


function validateName() {
    var name = document.getElementById('contact-name').value.trim();
    if (name.length === 0) {
        nameError.innerHTML = '* Please enter your full name';
        return false;
    }
    if (!name.match(/^[A-Za-z]+(?:[\s\-][A-Za-z]+)+$/)) {
        nameError.innerHTML = '* Please enter a valid full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value.trim();
    if (email.length === 0) {
        emailError.innerHTML = '* Please enter your email address';
        return false;
    }
    if (!email.match(/^\S+@\S+\.\S+$/)) {
        emailError.innerHTML = '* Please enter a valid email address';
        return false;
    }
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validatePassword() {
    var password = document.getElementById('contact-password').value;
    if (password.length === 0) {
        passwordError.innerHTML = '* Please enter your password';
        return false;
    }
    if (password.length < 8) {
        passwordError.innerHTML = '* Password must be at least 8 characters';
        return false;
    }
    passwordError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateConfirmPassword() {
    var password = document.getElementById('contact-password').value;
    var confirmPassword = document.getElementById('contact-confirm-password').value;
    if (confirmPassword.length === 0) {
        confirmPasswordError.innerHTML = '* Please confirm your password';
        return false;
    }
    if (password !== confirmPassword) {
        confirmPasswordError.innerHTML = '* Passwords do not match';
        return false;
    }
    confirmPasswordError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value.trim();
    if (phone.length === 0) {
        phoneError.innerHTML = '* Please enter your phone number';
        return false;
    }
    if (!phone.match(/^\d{3} \d{3} \d{4}$/)) {
        phoneError.innerHTML = '* Please enter a valid phone number (e.g., 123 456 7891)';
        return false;
    } 
    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value.trim();
    var required = 30;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = '* ' + left + ' more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validatePassword() || !validateConfirmPassword() || !validatePhone() || !validateMessage()) {
        successError.innerHTML = '';
        return false;
    }
    successError.style.display = 'block';
    successError.innerHTML = 'Form submitted successfully!';
    setTimeout(function() {
        successError.style.display = 'none';
    }, 3000);
    return true;
}
