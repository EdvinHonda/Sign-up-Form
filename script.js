const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const passwordError = document.querySelector('#password_error');
const confirmPasswordError = document.querySelector('#confirm_password_error');

password.addEventListener("input", function(e) {
    if(password.value == confirmPassword.value){
        passwordError.textContent = "";
    } else {
        passwordError.textContent = "*Passwords do not match";
    }
});

confirmPassword.addEventListener("input", function(e) {
    if(confirmPassword.value == password.value){
        confirmPasswordError.textContent = "";
    } else {
        confirmPasswordError.textContent = "*Passwords do not match";
    }
});