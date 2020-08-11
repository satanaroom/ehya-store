$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },

    // Перелистывание с клавиатуры
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },

    // Перелистывание с клавиатуры
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
        },
        phone: {
          required: "Please input your phone",
        },
        email: {
          required: "We need your email address to contact you",
        },
      },
    });
  });
  $(".special").validate({
    errorClass: "invalid",
    errorElement: "em",
    messages: {
      name: "Please specify your name",
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
    },
  });
  AOS.init();

  $(".phone_us").mask("+7 (000) 000-00-00");

  function googleMap() {
    $(".map").prepend(
      "<iframe class='google' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.3451442113756!2d116.3382511502124!3d39.888904179329046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f04de015240e0d%3A0x9e42c11a770c7a40!2sDoubleTree%20by%20Hilton%20Hotel%20Beijing!5e0!3m2!1sru!2sru!4v1596906776760!5m2!1sru!2sru' max-width='347' height='213' style='border: 0;' allowfullscreen='' aria-hidden='false'tabindex='0'></iframe>"
    );
  }
  setTimeout(googleMap, 3000);
});
