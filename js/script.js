
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

