const navToggle = document.querySelector(".nav-toggle");
const iconHamburguer = document.querySelector(".icon-hamburguer");
const iconClose = document.querySelector(".icon-close");
const primaryNav = document.querySelector("#primary-navigation");
const heroImg = document.querySelector("#hero-img");
const tabs = document.querySelectorAll(".button-tabs");
const tabContent = document.querySelectorAll(".tab");

// Mobile Navigation Menu

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

// Tabs (Destination Page)

function handleClick(e) {
  e.preventDefault();
  removeShow();
  //change image
  heroImg.setAttribute(
    "src",
    `./assets/destination/image-${this.innerHTML.toLowerCase()}.png`
  );
  // change tab content
  const thisTabContent = document.querySelector(
    `#${this.innerHTML.toLowerCase()}-content`
  );
  thisTabContent.classList.add("show");
  // change active tab
  this.setAttribute("aria-selected", true);
}

// Remove show and active class from all content items
function removeShow() {
  tabContent.forEach((item) => {
    item.classList.remove("show");
  });
  tabs.forEach((item) => {
    item.setAttribute("aria-selected", false);
  });
}

// Listen for tab item click
tabs.forEach((tab) => {
  tab.addEventListener("click", handleClick);
});
