const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector("#form");
const error = document.querySelector("#error");
const button = document.querySelector("#btn");

// returns error if password does not meet requirement
form.addEventListener('submit', (e) => {
    let messages = [];

    if ((password.value.length <= 6) || (password.value.length >= 15)) {
        messages.push('Password must be between 6 and 15 characters');
    } else if (password.value != confirmPassword.value) {
        messages.push('Password must match');
    }

    if (messages.length > 0) {
        error.innerText = messages.join('');
        e.preventDefault();
    }




})

// makes button look cool
button.addEventListener('mouseenter', e => e.target.classList.add('button-invert'));
button.addEventListener('mouseleave', e => e.target.classList.remove('button-invert'));