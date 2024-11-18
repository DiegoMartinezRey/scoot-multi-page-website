const rootStyles = document.documentElement.style;
const burgerMenuElement = document.getElementById("burger-menu");
const hamburgerElement = document.getElementById("hamburger");

let isMenuEnable = false;

const displayMenu = () => {
  if (isMenuEnable) {
    hamburgerElement.src = "/assets/icons/hamburger.svg";
    rootStyles.setProperty("--scale-nav", "-100%");
    isMenuEnable = false;
  } else {
    hamburgerElement.src = "/assets/icons/close.svg";
    rootStyles.setProperty("--scale-nav", "0");
    isMenuEnable = true;
  }
};

burgerMenuElement.addEventListener("click", displayMenu);
