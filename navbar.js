
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");


menuToggle.addEventListener("click", () => {

  mobileMenu.classList.toggle("hidden");

  // Alternar íconos (abrir/cerrar)
  iconOpen.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
});
