let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let Navlinks = document.getElementsByClassName('nav-links');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('Navbar__toggle-show');
});

function myFunction(x) {
  x.classList.toggle("change");
}