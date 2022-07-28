// scrollNav
const fixed = document.querySelector(".fixed");
const iconLogo = document.querySelector(".icon-logo");
const iconToggle = document.querySelector(".icon-hamburger");
const text = document.querySelector(".xx");
window.addEventListener("scroll", () => {
  fixed.classList.toggle("header-fixed", this.scrollY > 80);
  iconLogo.classList.toggle("icon-changes", this.scrollY > 900);
  iconToggle.classList.toggle("icon-changes", this.scrollY > 900);
});

// navigation
const menuHamburger = document.querySelector(".menu-hamburger");
const navigation = document.getElementById("navigation");
const icon = document.querySelector(".bx-menu-alt-right");

menuHamburger.addEventListener("click", () => {
  const visability = navigation.getAttribute("data-visible");
  icon.classList.toggle("bx-x");

  if (visability === "false") {
    navigation.setAttribute("data-visible", true);
  } else if (visability === "true") {
    navigation.setAttribute("data-visible", false);
  }
});

// reload
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  location.reload();
});
