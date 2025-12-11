
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
// 
const swiper = new Swiper(".myreviews", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  centeredSlides: false,

  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1400: { slidesPerView: 4.5 }
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// 
const video = document.getElementById("my-video");
const playButton = document.getElementById("play-button");
const coverImage = document.getElementById("cover-image");

playButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    coverImage.style.display = "none";  // Hide the cover image when video starts
    playButton.style.display = "none";  // Hide play button when video starts
  } else {
    video.pause();
    coverImage.style.display = "block";  // Show the cover image when video pauses
    playButton.style.display = "block";  // Show play button when video pauses
  }
});