$(document).ready(function () {
  // Мобильное меню
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

  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      errorElement: "em",
      messages: {
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });

  // Переключение табов
  var tabsItem = $(".trending__item");
  var contentItem = $(".trending__cards");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("trending__item--active");
    contentItem.removeClass("trending__cards--active");
    $(activeContent).addClass("trending__cards--active");
    $(this).addClass("trending__item--active");
  });

  // Слайдер автоматический
  var callbackSleder = new Swiper(".callback-slider", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Слайдер не автоматический
  var storySlider = new Swiper(".story-slider", {
    // Navigation arrows
    navigation: {
      nextEl: ".slider-button--next",
      prevEl: ".slider-button--prev",
    },
  });
});
