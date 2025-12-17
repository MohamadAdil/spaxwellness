/* ============================
   COUNTER ANIMATION (STATS)
   ============================ */
jQuery(function () {
  let started = false;

  function startCounters() {
    if (started) return;

    const stats = jQuery(".stats-wrap");
    if (stats.length === 0) return;

    const elementTop = stats.offset().top;
    const scrollBottom = jQuery(window).scrollTop() + jQuery(window).height();

    if (scrollBottom >= elementTop - 50) {
      started = true;

      jQuery(".stat-number").each(function () {
        let $el = jQuery(this);
        let countTo = parseInt($el.data("count"));
        let suffix = $el.data("suffix") || "";

        jQuery({ value: 0 }).animate(
          { value: countTo },
          {
            duration: 1800,
            easing: "swing",
            step: function (now) {
              $el.text(Math.floor(now) + suffix);
            },
            complete: function () {
              $el.text(countTo + suffix);
            }
          }
        );
      });
    }
  }

  jQuery(window).on("scroll resize", startCounters);
  startCounters();
});


/* ============================
   REVIEWS SLIDER (SWIPER)
   ============================ */
const swiper = new Swiper(".myreviews", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  centeredSlides: false,

  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
    1400: { slidesPerView: 4.5 }
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


/* ============================
   VIDEO PLAY BUTTON CONTROL
   ============================ */
const video = document.getElementById("my-video");
const playButton = document.getElementById("play-button");
const coverImage = document.getElementById("cover-image");

playButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    coverImage.style.display = "none";
    playButton.style.display = "none";
  } else {
    video.pause();
    coverImage.style.display = "block";
    playButton.style.display = "block";
  }
});


/* ============================
   PACKAGE SLIDER (SWIPER)
   ============================ */
const pkgSwiper = new Swiper(".pkg-slider", {
  slidesPerView: 4.5,
  spaceBetween: 30,
  centeredSlides: false,
  loop: true,
  speed: 900,
  breakpoints: {
    1400: { slidesPerView: 4.5 },
    1200: { slidesPerView: 4 },
    992: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
    0: { slidesPerView: 1 }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/* ======================================
   ULTRA SMOOTH SCROLL ROTATION (Raf)
   ====================================== */

jQuery(function () {
  let lastScrollTop = 0;
  let rotation = 0;
  let targetRotation = 0;

  // Smooth animation loop
  function animateRotation() {
    rotation += (targetRotation - rotation) * 0.1; // smooth easing
    jQuery(".scroll-rotate").css("transform", "rotate(" + rotation + "deg)");
    requestAnimationFrame(animateRotation);
  }

  animateRotation(); // start loop

  jQuery(window).on("scroll", function () {
    let st = jQuery(this).scrollTop();

    if (st > lastScrollTop) {
      // scrolling down → rotate right
      targetRotation += 4;
    } else {
      // scrolling up → rotate left
      targetRotation -= 4;
    }

    lastScrollTop = st;
  });
});

// 
jQuery(document).ready(function ($) {
  $('#navbarsExample04')
    .on('show.bs.collapse', function () {
      $('.navbar-toggler i')
        .removeClass('fa-bars')
        .addClass('fa-xmark');
    })
    .on('hide.bs.collapse', function () {
      $('.navbar-toggler i')
        .removeClass('fa-xmark')
        .addClass('fa-bars');
    });
});