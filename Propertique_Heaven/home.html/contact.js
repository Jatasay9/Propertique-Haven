const form = document.querySelector(".formBox");

const nameInput = document.querySelectorAll(".field")[0];
const emailInput = document.querySelectorAll(".field")[1];
const phoneInput = document.querySelectorAll(".field")[2];
const messageInput = document.querySelector(".msg");

form.addEventListener("submit", function() {
    if (nameInput.value.trim() === "") {
    alert("Please enter your name");
    return;
    }

    if (emailInput.value.trim() === "") {
    alert("Please enter your email");
    return;
  }
  if (phoneInput.value.trim() === "") {
    alert("Please enter your phone number");
    return;
  }

  // check message
  if (messageInput.value.trim() === "") {
    alert("Please enter your message");
    return;
  }
   alert("Form is ready to send!");
});