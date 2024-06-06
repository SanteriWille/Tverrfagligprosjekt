/* Hamburger meny */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  console.log("Menu icon clicked");
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

/* Kontakt siden */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll(".input-field .item, .textarea-field .item");
  const errorMessages = form.querySelectorAll(".error-txt");

  form.addEventListener("submit", (event) => {
    let valid = true;

    inputs.forEach((input, index) => {
      if (input.value.trim() === "") {
        errorMessages[index].style.display = "block";
        valid = false;
      } else {
        errorMessages[index].style.display = "none";
      }
    });

    if (!valid) {
      event.preventDefault();
    }
  });
});