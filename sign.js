const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Function to handle successful sign-in
function handleSignIn(username) {
  alert(`Welcome back, ${username}!`);
  // You can perform additional actions here after sign-in
}

// Function to handle successful sign-up
function handleSignUp(username) {
  alert(`Welcome, ${username}! You have successfully signed up.`);
  // You can perform additional actions here after sign-up
}

// Function to save user data in local storage
function saveUserData(username, email) {
  const userData = {
    username: username,
    email: email
  };
  localStorage.setItem('userData', JSON.stringify(userData));
}

// Popup for successful sign-in
const signInForm = document.querySelector(".sign-in-form");
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = signInForm.querySelector("input[type='text']").value;
  // Simulate sign-in verification
  handleSignIn(username);
});

// Popup for successful sign-up
const signUpForm = document.querySelector(".sign-up-form");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = signUpForm.querySelector("input[type='text']").value;
  const email = signUpForm.querySelector("input[type='email']").value;
  // Save user data in local storage
  saveUserData(username, email);
  // Simulate sign-up success
  handleSignUp(username);
});
