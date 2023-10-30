const btn = document.querySelector("button");
const userEmail = document.getElementById("userEmail");
const validEmailMessage = document.getElementById("validMessage");
const userRegistration = document.getElementById("userForm");
const dismissBtn = document.getElementById("dismiss");
const successMessage = document.getElementById("successMessage");

function validateEmail(input) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    console.log("Good");

    userRegistration.style.display = "none";
    successMessage.style.display = "inline";

    const actualUserEmail = document.getElementById("actualEmail");
    actualUserEmail.textContent = input.value;
    input.value = "";
  } else {
    input.style.borderColor = "red";
    input.style.backgroundColor = "hsl(4, 100%, 67%)";

    validEmailMessage.style.display = "inline";
    console.log("Try Again Please");
  }
}

btn.addEventListener("click", () => {
  validateEmail(userEmail);
});

dismissBtn.addEventListener("click", () => {
  userRegistration.style.display = "inline-block";
  successMessage.style.display = "none";
});
