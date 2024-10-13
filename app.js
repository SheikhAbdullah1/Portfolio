document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
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


const roles = ['Front-End Developer', 'UI/UX Designer', 'JavaScript Developer', 'Web Developer'];
let currentIndex = 0;

function changeRole() {
    const roleElement = document.getElementById('role');
    roleElement.style.opacity = 0; // Fade out

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % roles.length; // Update index
        roleElement.textContent = roles[currentIndex]; // Change the role text
        roleElement.style.opacity = 1; // Fade in
    }, 500); // Wait for fade-out animation to complete

}

// Change role every 3 seconds
setInterval(changeRole, 3000);