const email = document.getElementById('email')
const button = document.querySelector("form__button")
const signForm = document.getElementById('signup__form')
const emailSuccess = document.querySelector("email__success")
const emailError = document.querySelector('email__error')



button.addEventListener("submit", function (e) {
    e.preventDefault();
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value)) {
        emailSuccess.classList.add("show");
    } else {
        emailError.classList.add("show");
      
    }
})  





