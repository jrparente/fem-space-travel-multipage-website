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
  // // change active tab
  this.setAttribute("aria-selected", true);
  // change tab content

  const url = document.URL;
  if (url.includes("technology")) {
    const thisTabContent = document.querySelector(
      `#\\3${this.textContent.toLowerCase()}-content`
    );
    thisTabContent.classList.add("show");
  } else {
    const thisTabContent = document.querySelector(
      `#${this.textContent.toLowerCase()}-content`
    );
    thisTabContent.classList.add("show");
  }

  // //change image
  if (url.includes("destination")) {
    heroImg.setAttribute(
      "src",
      `./assets/destination/image-${this.innerHTML.toLowerCase()}.webp`
    );
  } else if (url.includes("crew")) {
    heroImg.setAttribute(
      "src",
      `./assets/crew/image-${this.textContent.toLowerCase()}.webp`
    );
  } else {
    const imgPath = this.textContent.toLowerCase().slice(1);
    heroImg.setAttribute(
      "srcset",
      `./assets/technology/image-${imgPath}-portrait.jpg 515w, 
            ./assets/technology/image-${imgPath}-landscape.jpg 768w`
    );
  }
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
