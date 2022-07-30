/*email validation*/
const emailInput = document.getElementById("email")
const pwd = document.getElementById("password")
const btn = document.getElementById("btn")
const errorMsg = document.querySelector(".help-email")
const errorIcon = document.querySelector(".error-icon")
const RegexMail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btn.addEventListener("click", login)

async function login (e) {
  e.preventDefault()

  let user = {
    email:emailInput.value,
    password: pwd.value,
  }

  const baseUrl = "http://localhost:8000"
  try {
    const response = await axios.post(`${baseUrl}/api/login`, user)
    document.cookie = `jwt=${JSON.stringify(response.data.jwt)}`
    console.log(response)
    alert("Request successful!")

    const response2 = await axios.get(`${baseUrl}/api/user`)
    console.log(response2)
  } catch (error) {
    if (error.response) {
      alert(error.reponse.status)
    } else {
      alert(error.message)
    }
  }
}


emailInput.addEventListener("input", () => {
    if (emailInput.value.match(RegexMail)){
        emailInput.style.borderColor = "green";
        errorIcon.classList.remove("active")
        errorMsg.classList.remove("active")
    }
    else{
        emailInput.style.borderColor = "red";
        errorIcon.classList.add("active")
        errorMsg.classList.add("active")
    }
})


/*password validation*/
var passwordInput = document.getElementById("password")
var errorMsg2 = document.querySelector(".help-pass")
var errorIcon2 = document.querySelector(".error-icon-2")
var RegexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

passwordInput.addEventListener("input", () => {
    if (passwordInput.value.match(RegexPass)){
        passwordInput.style.borderColor = "green";
        errorIcon2.classList.remove("active")
        errorMsg2.classList.remove("active")
    }
    else{
        passwordInput.style.borderColor = "red";
        errorIcon2.classList.add("active")
        errorMsg2.classList.add("active")
    }
})

/*visisibility of password*/
var show = document.getElementById("show")
var hide = document.getElementById("hide")
var eye = document.querySelector(".eye")
var noEye = document.querySelector(".eye-slash")

show.addEventListener("click", () => {
    if (passwordInput.type ="password"){
        passwordInput.type = "text";
        eye.classList.add("active")
        noEye.classList.add("active")
    }
})

hide.addEventListener("click", () => {
    if(passwordInput.type = "password"){
        passwordInput.type = "password";
        eye.classList.remove("active")
        noEye.classList.remove("active")
    }
})