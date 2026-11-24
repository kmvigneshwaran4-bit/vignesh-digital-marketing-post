
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

// Mobile navigation menu
if (menuBtn && navbar) {
  menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
  });
}

// Close menu after selecting a link
if (navbar) {
  const navLinks = navbar.querySelectorAll("a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");

      if (menuBtn) {
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// Automatic copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
