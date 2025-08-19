const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

// <!-- Script to handle date logic -->
  const checkInInput = document.getElementById('check-in');
  const checkOutInput = document.getElementById('check-out');

  checkInInput.addEventListener('change', function () {
    const checkInDate = new Date(this.value);
    if (checkInDate) {
      // Set min date for check-out as the same or after check-in
      const isoDate = checkInDate.toISOString().split('T')[0];
      checkOutInput.min = isoDate;

      // Auto-adjust check-out if it's before the new check-in
      if (checkOutInput.value < isoDate) {
        checkOutInput.value = isoDate;
      }
    }
  });

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// This is script file


$('.testimonials-container').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:6000,
  margin:10,
  nav:true,
  navText:["<i class='fa-solid fa-arrow-left'></i>",
           "<i class='fa-solid fa-arrow-right'></i>"],
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:true
      },
      768:{
          items:2
      },
  }
})

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });
});

AOS.init({
    duration: 800, // animation duration
    once: true     // animate only once when scrolling down
  })

  