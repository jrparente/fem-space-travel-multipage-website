const navToggle = document.querySelector(".nav-toggle");
const iconHamburguer = document.querySelector(".icon-hamburguer");
const iconClose = document.querySelector(".icon-close");
const primaryNav = document.querySelector("#primary-navigation");
const heroImg = document.querySelector("#hero-img");
const tabs = document.querySelectorAll(".button-tabs");
const tabContent = document.querySelectorAll(".tab");

navToggle.addEventListener("click", (event) => {
  event.preventDefault();
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false) &
      iconClose.classList.add("hide") &
      iconHamburguer.classList.remove("hide")
    : navToggle.setAttribute("aria-expanded", true) &
      iconClose.classList.remove("hide") &
      iconHamburguer.classList.add("hide");
  primaryNav.toggleAttribute("data-visible");
});

function handleClick() {
  //change image
  heroImg.setAttribute("src", `./assets/destination/image-mars.png`);
  // change tab content
}

// Remove show class from all content items
function removeShow() {
  tabContentItems.forEach((item) => {
    item.classList.remove("show");
  });
}

// Listen for tab item click
tabs.forEach((tab) => {
  this.addEventListener("click", handleClick);
});
