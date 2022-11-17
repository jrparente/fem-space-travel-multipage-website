const navToggle = document.querySelector(".nav-toggle");
const iconHamburguer = document.querySelector(".icon-hamburguer");
const iconClose = document.querySelector(".icon-close");
const primaryNav = document.querySelector("#primary-navigation");

function handleClick(event) {
  event.preventDefault();
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false) &
      iconClose.classList.add("hide") &
      iconHamburguer.classList.remove("hide")
    : navToggle.setAttribute("aria-expanded", true) &
      iconClose.classList.remove("hide") &
      iconHamburguer.classList.add("hide");
  primaryNav.toggleAttribute("data-visible");
}

navToggle.addEventListener("click", handleClick);
