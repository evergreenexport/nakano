// Event listeners for opening and closing the mobile nav menu.

const menuOpen = document.getElementById("menu-open");
menuOpen.addEventListener("click", openMobileNav);

const menuClose = document.getElementById("menu-close");
menuClose.addEventListener("click", closeMobileNav);

function openMobileNav() {
  $("#mobile-nav").css("width", "100%");
  $("#menu-close").css("opacity", "1");
  $("body").css("overflow", "hidden");
}

function closeMobileNav() {
  $("#mobile-nav").css("width", "0");
  $("#menu-close").css("opacity", "0");
  $("body").css("overflow", "visible");
}
