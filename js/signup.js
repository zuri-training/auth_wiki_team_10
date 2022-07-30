//START OF SIGNUP PAGE VALIDATION
const form = document.getElementById("form");
const fullname = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", addUsers) 

async function addUsers (e) {
  e.preventDefault()

  validateInputs()
  let user = {
    name: fullname.value,
    email:email.value,
    password: password.value,
  }

  const baseUrl = "http://localhost:8000"
  try {
    const response = await axios.post(`${baseUrl}/api/register`, user)
    alert("Request successful!")
  } catch (error) {
    if (error.response) {
      alert(error.reponse.status)
    } else {
      alert(error.message)
    }
  }
}

function validateInputs() {
  const fullnameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (fullnameValue === "") {
    setError(username, "fullname is required");
  } else {
    setSuccess(fullname);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
}

//setError
function setError(element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  const iconError = inputControl.querySelector(".exclamation");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  iconError.classList.add("show")
  inputControl.classList.remove("success");
}

//setSuccess
function setSuccess(element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  const iconError = inputControl.querySelector(".exclamation");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  iconError.classList.remove("show")
  inputControl.classList.remove("error");
}

//checkEmail
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//END OF SIGN UP PAGE VALIDATION
