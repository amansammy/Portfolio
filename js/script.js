const icon1 = document.querySelector(".userIcon");
const window1 = document.querySelector(".window1");
const closeButton = document.querySelector(".closeButton");
const maxButton = document.querySelector(".maximizeButton");
const content = document.querySelector(".windowInner");
const restoreButton = document.querySelector(".restoreButton");
const itemTaskbar = document.querySelector(".itemTaskbar");
const miniButton = document.querySelector(".minimizeButton");
const windowItem = document.getElementById("windowElement");
const startMenu = document.getElementById("startMenu");
const startButton = document.querySelector(".startButtonHover");
const desktop = document.querySelector(".individualWindows");
const userLoginButton = document.querySelector(".userAccountLoginScreen");
const userLoginScreen = document.querySelector(".loginScreen");
const logoutButton = document.querySelector(".logoutButton");

userLoginButton.addEventListener("click", (e) => {
  userLoginScreen.classList.add("dnone");
});

desktop.addEventListener("click", (e) => {
  console.log(e);
  startMenu.classList.remove("dblock");
});

const checkStartMenuDisplay = () => {
  const style = window.getComputedStyle(startMenu);
  const flop = style.getPropertyValue("display");
  console.log(flop);
  return flop;
};

const checkTaskbarBG = () => {
  const style = window.getComputedStyle(itemTaskbar);
  const flop = style.getPropertyValue("background");
  console.log(flop);
  return flop;
};

const checkWindowDisplay = () => {
  const style = window.getComputedStyle(windowItem);
  const flop = style.getPropertyValue("display");
  console.log(flop);
  return flop;
};

window.addEventListener("load", (e) => {
  itemTaskbar.classList.remove("dblock");
  itemTaskbar.classList.add("dnone");
});

startButton.addEventListener("click", (e) => {
  startMenu.classList.toggle("dblock");
  /*  startMenu.classList.remove("dnone");
  startMenu.classList.add("dblock"); */
});

logoutButton.addEventListener("click", () => {
  userLoginScreen.classList.remove("dnone");
  userLoginScreen.classList.add("dblock");
  userLoginScreen.classList.add("fadeIn");
});

icon1.addEventListener("click", (e) => {
  console.log(e);
  const displayValue = checkTaskbarBG();
  console.log(displayValue);
  if (
    displayValue ===
    "rgba(177, 177, 159, 0.475) none repeat scroll 0% 0% / auto padding-box border-box"
  ) {
    window1.className = "dblock window glass window1";
    content.classList.add("contentLoadHeight");
    itemTaskbar.classList.remove("dnone");
    itemTaskbar.classList.add("dblock");
    itemTaskbar.classList.add("dflex");
    itemTaskbar.innerHTML = `<img src = "/Portfolio/imgs/userIcon.png" class="itemTaskbarImage">`;
  }
});

closeButton.addEventListener("click", (e) => {
  closeButton.parentElement.parentElement.parentElement.className = "dnone";
  maxButton.classList.remove("dnone");
  maxButton.classList.add("dblock");
  restoreButton.classList.remove("dblock");
  restoreButton.classList.add("dnone");
  itemTaskbar.classList.remove("dblock");
  itemTaskbar.classList.add("dnone");
  itemTaskbar.classList.remove("dflex");
});

maxButton.addEventListener("click", (e) => {
  window1.classList.add("maximize");
  content.classList.add("contentMax");
  maxButton.classList.add("dnone");
  restoreButton.classList.remove("dnone");
  restoreButton.classList.add("dblock");
  content.classList.remove("contentLoadHeight");
  window1.classList.remove("restore");
});

miniButton.addEventListener("click", (e) => {
  window1.classList.remove("dblock");
  window1.classList.add("dnone");
  itemTaskbar.classList.add("activeItem");
});

itemTaskbar.addEventListener("click", (e) => {
  const dispVal = checkWindowDisplay();
  console.log(dispVal);
  if (dispVal === "block") {
    window1.classList.add("dnone");
    window1.classList.remove("dblock");
    itemTaskbar.classList.add("activeItem");
  }

  if (dispVal === "none") {
    window1.classList.remove("dnone");
    window1.classList.add("dblock");
    itemTaskbar.classList.remove("activeItem");
  }
  /*   window1.classList.remove("dnone");
  window1.classList.add("dblock");
  itemTaskbar.classList.remove("activeItem"); */
});

restoreButton.addEventListener("click", (e) => {
  window1.classList.add("restore");
  content.classList.add("contentLoadHeight");
  window1.classList.remove("maximize");
  content.classList.remove("contentMax");
  maxButton.classList.add("dblock");
  maxButton.classList.remove("dnone");
  restoreButton.classList.add("dnone");
  restoreButton.classList.remove("dblock");
});
/* 
const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}; */
