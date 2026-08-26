/* ===================================================================== */

(function ($) {
	// Preloader area start here ***
	$("#loading").hide();
	// Preloader area end here ***

	// Header area start here ***
	// Mobile menu
	$(".header-area nav").meanmenu();

	// Menu Fixed
	var fixed_top = $(".header-area");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 50) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
		}
	});
	// Header area end here ***

	// Banner slider area start here ***
	var swiper = new Swiper(".banner-nine__slider", {
		loop: "true",
		effect: "fade",
		speed: 1000,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".banner-nine__dot",
			clickable: true,
		},
	});
	// Banner slider area end here ***

	// Brand slider area start here ***
	var swiper = new Swiper(".brand__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 2000,
		autoplay: {
			delay: 200,
			disableOnInteraction: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: 6,
			},
			992: {
				slidesPerView: 5,
			},
			575: {
				slidesPerView: 4,
			},
			320: {
				slidesPerView: 3,
			},
		},
	});

	var swiper = new Swiper(".brand-three__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 2000,
		autoplay: {
			delay: 200,
			disableOnInteraction: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: 5,
			},
			992: {
				slidesPerView: 5,
			},
			575: {
				slidesPerView: 3,
			},
			320: {
				slidesPerView: 2,
			},
		},
	});

	var swiper = new Swiper(".brand-nine__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 2000,
		autoplay: {
			delay: 200,
			disableOnInteraction: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: 5,
			},
			992: {
				slidesPerView: 4,
			},
			575: {
				slidesPerView: 3,
			},
			320: {
				slidesPerView: 2,
			},
		},
	});

	var swiper = new Swiper(".brand-ten__slider", {
		loop: "true",
		spaceBetween: 0,
		speed: 500,
		navigation: {
			nextEl: ".brand-ten__arry-next",
			prevEl: ".brand-ten__arry-prev",
		},
		breakpoints: {
			1200: {
				slidesPerView: 5,
			},
			992: {
				slidesPerView: 4,
			},
			575: {
				slidesPerView: 3,
			},
			320: {
				slidesPerView: 2,
			},
		},
	});
	// Brand slider area end here ***

	// Courses slider area start here ***
	var swiper = new Swiper(".courses__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 300,
		navigation: {
			nextEl: ".courses__arry-next",
			prevEl: ".courses__arry-prev",
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			767: {
				slidesPerView: 2,
			},
			575: {
				slidesPerView: 1,
			},
		},
	});

	var swiper = new Swiper(".courses-four__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 1000,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".courses-four__dot",
			clickable: true,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			767: {
				slidesPerView: 2,
			},
			575: {
				slidesPerView: 1,
			},
		},
	});
	// Courses slider area end here ***

	// Event slider area start here ***
	var swiper = new Swiper(".event__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 300,
		navigation: {
			nextEl: ".event__arry-next",
			prevEl: ".event__arry-prev",
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			767: {
				slidesPerView: 2,
			},
			575: {
				slidesPerView: 1,
			},
		},
	});
	// Event slider area end here ***

	// Gallery slider area start here ***
	var swiper = new Swiper(".gallery__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 1000,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".gallery__dot",
			clickable: true,
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			767: {
				slidesPerView: 3,
			},
			320: {
				slidesPerView: 2,
			},
		},
	});

	var swiper = new Swiper(".gallery-seven__slider", {
		loop: "true",
		spaceBetween: 0,
		speed: 1000,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".gallery__dot",
			clickable: true,
		},
		breakpoints: {
			1200: {
				slidesPerView: 5,
			},
			991: {
				slidesPerView: 4,
			},
			767: {
				slidesPerView: 3,
			},
			320: {
				slidesPerView: 2,
			},
		},
	});
	// Gallery slider area end here ***

	// Team slider area start here ***
	var swiper = new Swiper(".team-two__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 300,
		navigation: {
			nextEl: ".team-two__arry-next",
			prevEl: ".team-two__arry-prev",
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 2,
			},
		},
	});

	var swiper = new Swiper(".team-four__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 300,
		navigation: {
			nextEl: ".team-two__arry-next",
			prevEl: ".team-two__arry-prev",
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 2,
			},
		},
	});
	// Team slider area end here ***

	// Testimonial slider area start here ***
	var imageSlider = new Swiper(".testimonial__slider-image", {
		loop: "true",
		spaceBetween: 60,
		speed: 300,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
	});
	var contentSlider = new Swiper(".testimonial__slider", {
		loop: "true",
		spaceBetween: 60,
		speed: 300,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".testimonial__dot",
			clickable: true,
		},
	});
	imageSlider.controller.control = contentSlider;
	contentSlider.controller.control = imageSlider;

	var swiper = new Swiper(".testimonial-two__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 300,
		navigation: {
			nextEl: ".testimonial-two__arry-next",
			prevEl: ".testimonial-two__arry-prev",
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			767: {
				slidesPerView: 2,
			},
		},
	});

	var swiper = new Swiper(".testimonial-three__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 1000,
		centeredSlides: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".testimonial-three__dot",
			clickable: true,
		},
		breakpoints: {
			1600: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 3,
			},
			991: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 2,
			},
		},
	});

	var swiper = new Swiper(".testimonial-four__slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 1000,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".testimonial-four__arry-next",
			prevEl: ".testimonial-four__arry-prev",
		},
	});

	var swiper = new Swiper(".testimonial-seven__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 1000,
		centeredSlides: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".testimonial-seven__dot",
			clickable: true,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			991: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 2,
			},
		},
	});

	var swiper = new Swiper(".testimonial-nine__slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 500,
		navigation: {
			nextEl: ".testimonial-nine__arry-next",
			prevEl: ".testimonial-nine__arry-prev",
		},
		breakpoints: {
			991: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 1,
			},
		},
	});
	// Testimonial slider area end here ***

	/* ======================== Mouse Move Parallax ======================== */
  if ($(window).width() > 780) {
    $(".paralax__animation").on("mousemove", function (e) {
      $("[data-depth]").each(function () {
        const depth = $(this).data("depth");
        const moveX = (e.pageX * -depth) / 4;
        const moveY = (e.pageY * -depth) / 4;
        $(this).css({ transform: `translate3d(${moveX}px, ${moveY}px, 0)` });
      });
    });
  }

  /* ======================== Background Image Setter ======================== */
  $("[data-background]").each(function () {
    const bg = $(this).attr("data-background");
    $(this).css("background-image", `url(${bg})`);
  });

  /* ======================== Video Popup (Magnific Popup) ======================== */
  $(".video-popup").magnificPopup({
    type: "iframe",
    iframe: {
      markup:
        `<div class="mfp-iframe-scaler">
          <div class="mfp-close"></div>
          <iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>
        </div>`,
      patterns: {
        youtube: { index: "youtube.com/", id: "v=", src: "https://www.youtube.com/embed/%id%?autoplay=1" },
        vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
      srcAction: "iframe_src",
    },
  });

  /* ======================== Counter Up ======================== */
  $(".count").counterUp({ delay: 20, time: 2000 });

  /* ======================== Countdown Timer ======================== */
  const targetDate = new Date("2024-07-12T00:00:00").getTime();
  const countdownEl = $("#countdown-container");
  const timer = setInterval(() => {
    const now = Date.now();
    const remaining = targetDate - now;

    if (remaining <= 0) {
      clearInterval(timer);
      countdownEl.text("Countdown has ended!");
      return;
    }

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remaining / (1000 * 60)) % 60);
    const seconds = Math.floor((remaining / 1000) % 60);

    $("#day").text(days.toString().padStart(2, "0"));
    $("#hour").text(hours.toString().padStart(2, "0"));
    $("#min").text(minutes.toString().padStart(2, "0"));
    $("#sec").text(seconds.toString().padStart(2, "0"));
  }, 1000);

  /* ======================== Fullscreen Search ======================== */
  const $searchWrap = $(".search-wrap");
  const $navSearch = $(".nav-search");
  const $searchClose = $("#search-close");

  $(".search-trigger").on("click", function (e) {
    e.preventDefault();
    $searchWrap.fadeToggle(500);
    $navSearch.add($searchClose).toggleClass("open");
  });

  $(".search-close").on("click", function (e) {
    e.preventDefault();
    $searchWrap.fadeOut(500);
    $navSearch.add($searchClose).removeClass("open");
  });

  $(document.body).on("click", closeSearch);
  $(".search-trigger, .main-search-input").on("click", (e) => e.stopPropagation());

  function closeSearch() {
    $searchWrap.fadeOut(200);
    $navSearch.add($searchClose).removeClass("open");
  }

  /* ======================== Hover Active Class ======================== */
  $(".topic__item").hover(function () {
    $(".topic__item").removeClass("active");
    $(this).addClass("active");
  });

  /* ======================== Nice Select ======================== */
  $("select").niceSelect();

  /* ======================== Footer Image Popup ======================== */
  $(".footer-popup").magnificPopup({ type: "image", gallery: { enabled: true } });

  /* ======================== WOW Animation ======================== */
  new WOW().init();
})(jQuery);

/* ===================================================================== */
/* ========================= Vanilla JS Sections ======================= */
/* ===================================================================== */

/* ======================== Mobile Dropdown Toggle ======================== */
document.addEventListener("click", (e) => {
  const toggle = e.target.closest(".toggle-dropdown");
  if (!toggle) return;

  e.preventDefault();
  const parent = toggle.closest(".has-dropdown");
  parent.classList.toggle("active");

  document.querySelectorAll(".mobile-menu .has-dropdown").forEach((li) => {
    if (li !== parent) li.classList.remove("active");
  });
});

/* ======================== Main Swiper ======================== */
new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: { delay: 2500, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
});

/* ======================== Client Logo Swipers ======================== */
function createClientSwiper(selector, reverse = false) {
  return new Swiper(selector, {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    speed: 4000,
    allowTouchMove: false,
    autoplay: { delay: 0, disableOnInteraction: false, reverseDirection: reverse },
    breakpoints: {
      0: { slidesPerView: 3, spaceBetween: 15 },
      480: { slidesPerView: 4, spaceBetween: 20 },
      768: { slidesPerView: 5, spaceBetween: 25 },
      1024: { slidesPerView: 5, spaceBetween: 30 },
      1400: { slidesPerView: 6, spaceBetween: 30 },
    },
  });
}

[".client-row-1", ".client-row-2", ".client-row-3"].forEach((selector, i) =>
  createClientSwiper(selector, i === 1)
);

/* ======================== Fade-In Animation ======================== */
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".choose-item");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  items.forEach((item) => observer.observe(item));
});

/* ======================== Free Demo Modal (Manual Trigger Only) ======================== */
document.addEventListener("DOMContentLoaded", () => {

  if (typeof bootstrap === "undefined") {
    console.error("❌ Bootstrap JS required for modal functionality.");
    return;
  }

  customElements.whenDefined("site-header").then(() => {

    // =========================
    // Manual Trigger
    // =========================
    document.addEventListener("click", (e) => {

      const demoBtn = e.target.closest(
        '[data-bs-toggle="modal"][href="#freeDemoModal"]'
      );

      if (!demoBtn) return;

      e.preventDefault();

      // Close mobile menu if open
      const offcanvasEl = document.querySelector(".offcanvas.show");

      if (offcanvasEl) {

        const offcanvas =
          bootstrap.Offcanvas.getInstance(offcanvasEl);

        offcanvas.hide();

        setTimeout(showModal, 400);

      } else {

        showModal();
      }
    });

    // =========================
    // Show Modal
    // =========================
    function showModal() {

      const modalEl =
        document.querySelector("#freeDemoModal");

      if (modalEl) {

        const modal =
          new bootstrap.Modal(modalEl);

        modal.show();
      }
    }

    // =========================
    // Cleanup
    // =========================
    document.addEventListener("hidden.bs.modal", () => {

      document.body.classList.remove("modal-open");

      document.body.style.overflow = "";

      document
        .querySelectorAll(".modal-backdrop")
        .forEach((b) => b.remove());

    });

  });

});

/* ======================== Make .topic__item Clickable ======================== */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".topic__item").forEach((item) => {
    item.addEventListener("click", () => {
      const link = item.querySelector("a");
      if (link) window.location.href = link.href;
    });
  });
});

/* ======================== Free Demo Form Submission ======================== */
document.addEventListener("submit", (e) => {
  const form = e.target;
  if (!form || form.id !== "demoForm") return;

  e.preventDefault();

  const responseBox = form.querySelector("#formResponse") || document.getElementById("formResponse");
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnContent = submitBtn ? submitBtn.innerHTML : '<i class="bi bi-send-fill me-1"></i>Submit Request';

  // Prevent duplicate submission & show loading state
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Submitting...`;
  }

  if (responseBox) {
    responseBox.innerHTML = '';
  }

  const formData = new FormData(form);

  fetch("demo_mailer.php", {
    method: "POST",
    body: formData,
  })
    .then(async (res) => {
      const text = await res.text();
      let data = {};
      try {
        data = JSON.parse(text);
      } catch (parseErr) {
        data = { status: (res.ok || text.includes("success")) ? "success" : "error", message: text };
      }

      if (res.ok && (data.status === "success" || text.includes("success"))) {
        const successMsg = data.message || "Your demo request has been submitted successfully!";
        if (responseBox) {
          responseBox.innerHTML = `
            <div class="text-center p-3">
              <i class="bi bi-check-circle-fill text-success" style="font-size: 2.5rem;"></i>
              <h5 class="mt-2 text-success fw-bold">Thank You!</h5>
              <p class="mb-0 text-dark fw-bold">${successMsg}</p>
              <small class="text-muted d-block mt-1">Our team will contact you soon.</small>
            </div>
          `;
        } else {
          alert(`✅ ${successMsg}`);
        }

        form.reset();

        setTimeout(() => {
          const modalElement = form.closest('.modal') || document.getElementById("freeDemoModal");
          if (modalElement && typeof bootstrap !== "undefined" && bootstrap.Modal) {
            const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
            if (modal) modal.hide();
          }
        }, 3000);
      } else {
        const errorMsg = data.message || "Failed to send request. Please try again later.";
        console.error("Demo Form Submission Server Error:", errorMsg, text);
        if (responseBox) {
          responseBox.innerHTML = `<div class="alert alert-danger py-2 px-3 mt-2 mb-0" role="alert">❌ ${errorMsg}</div>`;
        } else {
          alert(`❌ ${errorMsg}`);
        }
      }
    })
    .catch((err) => {
      console.error("Demo Form Submission Network Error:", err);
      if (responseBox) {
        responseBox.innerHTML = `<div class="alert alert-danger py-2 px-3 mt-2 mb-0" role="alert">❌ Network error. Please check your connection and try again.</div>`;
      } else {
        alert("❌ Network error. Please check your connection and try again.");
      }
    })
    .finally(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      }
    });
});


/* ======================== SAP FI Webinar Auto Popup ======================== */
document.addEventListener("DOMContentLoaded", () => {

  if (typeof bootstrap === "undefined") {
    console.error("❌ Bootstrap JS required for modal functionality.");
    return;
  }

  customElements.whenDefined("site-header").then(() => {

    setTimeout(() => {

      // Show only once per session
      const webinarShown =
        sessionStorage.getItem("sapFiWebinarShown");

      if (webinarShown) return;

      // Webinar modal only
      const webinarModal =
        document.getElementById("webinarModal");

      if (!webinarModal) return;

      // Create Bootstrap modal
      const modal =
        new bootstrap.Modal(webinarModal);

      // Show popup
      modal.show();

      // Bell animation after popup fully opens
      webinarModal.addEventListener("shown.bs.modal", () => {

        const modalContent =
          webinarModal.querySelector(".modal-content");

        if (!modalContent) return;

        // Restart animation properly
        modalContent.classList.remove(
          "webinar-bell-shake"
        );

        void modalContent.offsetWidth;

        modalContent.classList.add(
          "webinar-bell-shake"
        );

      }, { once: true });

      // Save session state
      sessionStorage.setItem(
        "sapFiWebinarShown",
        "true"
      );

    }, 2500);

  });

});

// Student Carousel
if (document.querySelector('.studentSwiper')) {
    new Swiper('.studentSwiper', {
        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        effect: 'fade',

        fadeEffect: {
            crossFade: true
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
}