// Navbar Scroll Effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth Scroll for local links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Simple Entry Animations using Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".service-card, .feature-row").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.8s ease-out";
  observer.observe(el);
});

// Hero Parallax Effect
window.addEventListener("scroll", () => {
  const heroBg = document.querySelector(".hero-bg");
  const scrollPos = window.scrollY;
  heroBg.style.transform = `translateY(${scrollPos * 0.4}px)`;
});

console.log("LiqudOps Site Initialized");
