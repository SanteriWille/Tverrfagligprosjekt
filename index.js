let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  console.log("Menu icon clicked");
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}