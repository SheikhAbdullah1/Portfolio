document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (menuToggle && navbar) { // Check if elements exist
      menuToggle.addEventListener("click", function () {
          navbar.classList.toggle("active");
          menuToggle.classList.toggle("active");
      });
  } else {
      console.error("Menu toggle or navbar not found");
  }
});


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
