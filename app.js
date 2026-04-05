document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function () {
      navbar.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  } else {
    console.error("Menu toggle or navbar not found");
  }

  initScrollContentReveal();
});

function initScrollContentReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = [];

  function queue(el, options = {}) {
    if (!el) return;
    items.push({
      el,
      delaySec: options.delaySec ?? 0,
      extraClass: options.extraClass || null,
    });
  }

  document.querySelectorAll(".about .about-img").forEach((el) =>
    queue(el, { extraClass: "reveal-from-left" })
  );
  document.querySelectorAll(".about .about-content").forEach((el) =>
    queue(el, { extraClass: "reveal-from-right" })
  );

  document.querySelectorAll(".services > .heading").forEach((el) => queue(el));
  document.querySelectorAll(".services .services-box").forEach((el, i) =>
    queue(el, { delaySec: i * 0.09 })
  );

  document.querySelectorAll(".portfolio > .heading").forEach((el) => queue(el));
  document.querySelectorAll(".portfolio .portfolio-box").forEach((el, i) =>
    queue(el, { delaySec: i * 0.06 })
  );

  document.querySelectorAll(".contact > .heading").forEach((el) => queue(el));
  document.querySelectorAll(".contact form").forEach((el) =>
    queue(el, { delaySec: 0.08 })
  );

  document.querySelectorAll(".footer").forEach((el) => queue(el));

  if (prefersReducedMotion || !items.length) {
    return;
  }

  items.forEach(({ el, delaySec, extraClass }) => {
    el.classList.add("reveal-on-scroll");
    if (extraClass) el.classList.add(extraClass);
    el.style.setProperty("--reveal-delay", `${delaySec}s`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.04 }
  );

  items.forEach(({ el }) => observer.observe(el));
}


// Filtered Portfolio Items
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-category");
    document.querySelectorAll(".portfolio-box").forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

const roles = [
  'Front-End Developer',
  'React Developer',
  'Gen AI Chatbot Developer',
  'Python Developer'
];
let currentIndex = 0;

function typeRole() {
  const roleElement = document.getElementById('role');
  const currentRole = roles[currentIndex];
  let charIndex = 0;

  // Clear any existing text
  roleElement.textContent = "";

  // Reveal one letter at a time
  const typeInterval = setInterval(() => {
      roleElement.textContent += currentRole.charAt(charIndex);
      charIndex++;

      // Stop when the entire word is typed
      if (charIndex === currentRole.length) {
          clearInterval(typeInterval);

          // Move to the next role after a delay
          setTimeout(() => {
              currentIndex = (currentIndex + 1) % roles.length;
              typeRole(); // Recursively call to type the next role
          }, 2000); // Wait 2 seconds before switching roles
      }
  }, 100); // Adjust typing speed (in ms)
}

// Start typing the first role
typeRole();
