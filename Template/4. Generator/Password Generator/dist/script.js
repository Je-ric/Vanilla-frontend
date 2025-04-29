// Select all the necessary HTML elements
var lengthSlider = document.querySelector(".pass-length input");
var options = document.querySelectorAll(".option input");
var copyIcon = document.querySelector(".input-box span");
var passwordInput = document.querySelector(".input-box input");
var passIndicator = document.querySelector(".pass-indicator");
var generateBtn = document.querySelector(".generate-btn");

// Define the available character sets for password generation
var characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "^!$%&|[](){}:;.,*+-#@<>~"
};

// Function to generate a random password
function generatePassword() {
  var staticPassword = "";
  var randomPassword = "";
  var excludeDuplicate = false;
  var passLength = lengthSlider.value;

  // Check each option and add the respective characters
  for (var i = 0; i < options.length; i++) {
    var option = options[i];
    if (option.checked) {
      if (option.id !== "exc-duplicate" && option.id !== "spaces") {
        staticPassword += characters[option.id];
      } else if (option.id === "spaces") {
        staticPassword += "  "; // Add spaces
      } else {
        excludeDuplicate = true;
      }
    }
  }

  // Generate a random password using the selected characters
  for (var i = 0; i < passLength; i++) {
    var randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
    if (excludeDuplicate) {
      if (randomPassword.indexOf(randomChar) === -1 && randomChar !== " ") {
        randomPassword += randomChar;
      } else {
        i--; // Try again if duplicate found
      }
    } else {
      randomPassword += randomChar;
    }
  }
  
  // Set the generated password to the input field
  passwordInput.value = randomPassword;
}

// Function to update the password strength indicator based on length
function updatePassIndicator() {
  if (lengthSlider.value <= 8) {
    passIndicator.id = "weak";
  } else if (lengthSlider.value <= 16) {
    passIndicator.id = "medium";
  } else {
    passIndicator.id = "strong";
  }
}

// Function to update the slider value and regenerate the password
function updateSlider() {
  document.querySelector(".pass-length span").innerText = lengthSlider.value;
  generatePassword();
  updatePassIndicator();
}

// Initial call to update the slider and generate the password
updateSlider();

// Function to copy the password to the clipboard
function copyPassword() {
  navigator.clipboard.writeText(passwordInput.value);
  copyIcon.innerText = "check";
  copyIcon.style.color = "#4285F4";
  
  setTimeout(function() {
    copyIcon.innerText = "copy_all";
    copyIcon.style.color = "#707070";
  }, 1500);
}

// Event listener for the copy icon
copyIcon.addEventListener("click", copyPassword);

// Event listener for the slider input change
lengthSlider.addEventListener("input", updateSlider);

// Event listener for the generate button click
generateBtn.addEventListener("click", generatePassword);
