// Add event listeners on form submit
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Clear previous errors
  clearErrors();

  // Fetch values
  let name = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();

  let isValid = true;

  // Name Validation
  if (name.length < 5) {
    showError("nameError", "Name must be at least 5 characters long");
    isValid = false;
  }

  // Email Validation
  if (!email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
    showError("emailError", "Enter a valid email address");
    isValid = false;
  }

  // Phone Number Validation
  if (!/^\d{10}$/.test(phone) || phone === "123456789") {
    showError("phoneError", "Enter a valid 10-digit phone number");
    isValid = false;
  }

  // Password Validation
  if (
    password.toLowerCase() === "password" ||
    password.toLowerCase() === name.toLowerCase() ||
    password.length < 8
  ) {
    showError("passwordError", "Password is too weak or common");
    isValid = false;
  }

  // Confirm Password
  if (password !== confirmPassword) {
    showError("confirmPasswordError", "Passwords do not match");
    isValid = false;
  }

  if (isValid) {
    alert("✅ Form submitted successfully!");
    document.getElementById("registrationForm").reset();
  }
});

// Show error message
function showError(id, message) {
  document.getElementById(id).textContent = message;
}

// Clear all error messages
function clearErrors() {
  let errors = document.getElementsByClassName("error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].textContent = "";
  }
}
