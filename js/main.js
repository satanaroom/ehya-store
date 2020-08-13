$(document).ready(function () {
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var menuButton = document.querySelector(".header__image");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".header-menu")
      .classList.toggle("header-menu--visible");
  });

  var menuButton = document.querySelector(".header-menu__button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".header-menu")
      .classList.toggle("header-menu--visible");
  });
});
