//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkboxInput = document.getElementById("checkbox");
const submitButton = document.getElementById("submit");
const existingButton = document.getElementById("existing");

// Check if there are saved details in local storage
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");
if (savedUsername && savedPassword) {
  existingButton.style.display = "block";
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  const rememberMe = checkboxInput.checked;

  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert(`Logged in as ${username}`);
});

existingButton.addEventListener("click", function () {
  alert(`Logged in as ${savedUsername}`);
});