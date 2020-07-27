const alert = document.querySelector(".alert");
const alertClose = document.querySelector(".close");
const form = document.getElementById("message-user-form");

window.onload = function () {
  alert.style.display = "flex";
};
alertClose.addEventListener("click", () => {
  alert.style.display = "none";
});


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = document.getElementById("user-search");
  const message = document.getElementById("user-message");
  if (user.value === '' || message.value === '') {
    confirm("Please input both a user and a message."); 
  } else {
    confirm("Message Sent!");
  }
});
