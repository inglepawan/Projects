const form = document.getElementById("form");
const firstname_input =  document.getElementById("firstname-input");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const repeat_password_input = document.getElementById("repeat-password-input");
const error_message = document.getElementById("error-message");

// error messages elements (for legacy use, you can keep or remove if not used)
const firstname_error = document.getElementById("firstname-error");
const email_error = document.getElementById("email-error");
const password_error = document.getElementById("password-error");
const repeat_password_error = document.getElementById("repeat-password-error");

// Collect inputs (filter null just in case)
const allInputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input => input != null);

// Store original placeholders so we can reset later
allInputs.forEach(input => {
    input.setAttribute('data-original-placeholder', input.placeholder);
    // On typing, remove error styles and restore placeholder
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect');
            input.placeholder = input.getAttribute('data-original-placeholder');
            error_message.innerText = '';
        }
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous error styles and restore placeholders before validation
    allInputs.forEach(input => {
        input.parentElement.classList.remove('incorrect');
        input.placeholder = input.getAttribute('data-original-placeholder');
    });

    let errors = [];
    if(firstname_input){
        errors = getSignupFormErrors(firstname_input.value.trim(), email_input.value.trim(), password_input.value, repeat_password_input.value);
    } else {
        errors = getLoginFormErrors(email_input.value.trim(), password_input.value);
    }

    if(errors.length > 0){
        // Show errors inside inputs with red placeholders & clear invalid inputs

        if(firstname_input && firstname_input.value.trim() === ''){
            firstname_input.parentElement.classList.add('incorrect');
            firstname_input.placeholder = 'Firstname is required';
            firstname_input.value = '';
        }

        if(email_input && email_input.value.trim() === ''){
            email_input.parentElement.classList.add('incorrect');
            email_input.placeholder = 'Email is required';
            email_input.value = '';
        }

        if(password_input && password_input.value === ''){
            password_input.parentElement.classList.add('incorrect');
            password_input.placeholder = 'Password is required';
            password_input.value = '';
        }

        if(password_input && password_input.value.length > 0 && password_input.value.length < 8){
            password_input.parentElement.classList.add('incorrect');
            password_input.placeholder = 'Password must be at least 8 characters';
            password_input.value = '';
        }

        if(password_input && repeat_password_input && password_input.value !== repeat_password_input.value){
            password_input.parentElement.classList.add('incorrect');
            repeat_password_input.parentElement.classList.add('incorrect');
            repeat_password_input.placeholder = 'Passwords do not match';
            repeat_password_input.value = '';
        }

        // Do not submit if errors exist
        return;
    }

    // If no errors, submit form normally
    form.submit();
});

function getSignupFormErrors(firstname, email, password, repeatPassword) {
    let errors = [];

    if(firstname === '' || firstname == null){
        errors.push('Firstname is required');
    }
    if(email === '' || email == null){
        errors.push('Email is required');
    }
    if(password === '' || password == null){
        errors.push('Password is required');
    }
    if(password.length > 0 && password.length < 8){
        errors.push('Password must have at least 8 characters');
    }
    if(password !== repeatPassword){
        errors.push('Password does not match repeated password');
    }

    return errors;
}

function getLoginFormErrors(email, password) {
    let errors = [];

    if(email === '' || email == null){
        errors.push('Email is required');
    }
    if(password === '' || password == null){
        errors.push('Password is required');
    }

    return errors;
}
