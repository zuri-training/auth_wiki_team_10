/*email validation*/
var exclamation =document.getElementById("exclamation")
var exclamation2 =document.getElementById("exclamation-2")
var error = document.getElementById("error")
var error2 = document.getElementById("error-2")
var email = document.getElementById("email")
var RegexMail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/*Password Validation*/
var password = document.getElementById("password")

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
})

function validateInputs(){
    if (email.value.match(RegexMail)){
        exclamation.style.visibility = "hidden"
        email.style.borderColor = "#13FE2B"
        error.style.visibility = "hidden"
    }
    else if(email.value === ""){
        exclamation.style.visibility = "visible"
        error.style.visibility = "visible"
        email.style.borderColor = "red"
    }
    else{
        exclamation.style.visibility = "visible"
        error.style.visibility = "visible"
        email.style.borderColor = "red"
    }

    if (password.value.trim() === ""){
        error2.style.visibility = "visible"
        exclamation2.style.visibility = "visible"
        password.style.borderColor = "red"
    }
    else{
        exclamation2.style.visibility = "hidden"
        error2.style.visibility = "hidden"
        password.style.borderColor = "#13FE2B"
    }
}

/*visisibility of password*/
var show = document.getElementById("show")
var hide = document.getElementById("hide")
var eye = document.querySelector(".eye")
var noEye = document.querySelector(".eye-slash")

show.addEventListener("click", () => {
    if (password.type ="password"){
        password.type = "text";
        eye.classList.add("active")
        noEye.classList.add("active")
    }
})

hide.addEventListener("click", () => {
    if(password.type = "password"){
        password.type = "password";
        eye.classList.remove("active")
        noEye.classList.remove("active")
    }
})