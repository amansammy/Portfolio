const windowElement = document.querySelector(".window");
const userIcon = document.querySelector(".userIcon");
const skillsIcon = document.querySelector(".skillsIcon");
const educationIcon = document.querySelector(".educationIcon");
const projectsIcon = document.querySelector(".projectsIcon");
const resumeIcon = document.querySelector(".resumeIcon");
const userWindow = document.getElementById("userWindow"); //Changed userWindow name from windowElement and query from window
const skillsWindow = document.getElementById("skillsWindow");
const educationWindow = document.getElementById("educationWindow");
const aboutMeWindowInner = document.querySelector(".aboutMeWindowInner");
const skillsWindowInner = document.getElementById("skillsWindowInner");
const educationWindowInner = document.getElementById("educationWindowInner");
const aboutMeItemTaskbar = document.getElementById("aboutMeItemTaskbar");
const skillsItemTaskbar = document.getElementById("skillsItemTaskbar");
const educationItemTaskbar = document.getElementById("educationItemTaskbar");
const activeWindow = document.querySelector(".activeWindow");
const windowItem = document.getElementById("windowElement");
const startMenu = document.getElementById("startMenu");
const startButton = document.querySelector(".startButtonHover");
const desktop = document.querySelector(".individualWindows");
const userLoginButton = document.querySelector(".userAccountLoginScreen");
const userLoginScreen = document.querySelector(".loginScreen");
const logoutButton = document.querySelector(".logoutButton");
const desktopMain = document.querySelector(".desktop");
const bgImage1 = document.getElementById("back1");
const bgImage2 = document.getElementById("back2");
const bgImage3 = document.getElementById("back3");
const bgImage4 = document.getElementById("back4");
const bgImage5 = document.getElementById("back5");

//background height setter

window.addEventListener("load", (e) => {
  const style = window.getComputedStyle(desktopMain);
  const flop = style.getPropertyValue("height");
  console.log(flop);
  bgImage1.style.height = flop;
  bgImage2.style.height = flop;
  bgImage3.style.height = flop;
  bgImage4.style.height = flop;
  bgImage5.style.height = flop;
});

//user login button

userLoginButton.addEventListener("click", (e) => {
  userLoginScreen.classList.add("dnone");
});

//property checking functions

const checkStartMenuDisplay = () => {
  const style = window.getComputedStyle(startMenu);
  const flop = style.getPropertyValue("display");
  console.log(flop);
  return flop;
};

/* desktop.addEventListener("click", (e) => {
  const val = checkStartMenuDisplay();
  if (val === "block") {
    console.log(val);
    startMenu.classList.remove("dblock");
  }
}); */

/* const checkTaskbarBG = () => {
  const style = window.getComputedStyle(aboutMeItemTaskbar);
  const flop = style.getPropertyValue("background");
  console.log(flop);
  return flop;
};
 */
const checkUserWindowDisplay = () => {
  const style = window.getComputedStyle(userWindow);
  const flop = style.getPropertyValue("display");
  console.log(flop);
  return flop;
};

const checkSkillsWindowDisplay = () => {
  const style = window.getComputedStyle(skillsWindow);
  const flop = style.getPropertyValue("display");
  console.log(flop);
  return flop;
};

const checkEducationWindowDisplay = () => {
  const style = window.getComputedStyle(educationWindow);
  const flop = style.getPropertyValue("display");
  console.log(flop);
  return flop;
};

//About Me Dialog Box Buttons with taskbar icon

const userCloseButton = document.querySelector(".userCloseButton");
const userMaxButton = document.querySelector(".userMaximizeButton");
const userRestoreButton = document.querySelector(".userRestoreButton");
const userMiniButton = document.querySelector(".userMinimizeButton");

userCloseButton.addEventListener("click", (e) => {
  userCloseButton.parentElement.parentElement.parentElement.className = "dnone";
  userMaxButton.classList.remove("dnone");
  userMaxButton.classList.add("dblock");
  userRestoreButton.classList.remove("dblock");
  userRestoreButton.classList.add("dnone");
  aboutMeItemTaskbar.classList.remove("dblock");
  aboutMeItemTaskbar.classList.add("dnone");
});

userMaxButton.addEventListener("click", (e) => {
  userWindow.classList.add("maximize");
  aboutMeWindowInner.classList.add("contentMax");
  userMaxButton.classList.add("dnone");
  userRestoreButton.classList.remove("dnone");
  userRestoreButton.classList.add("dblock");
  aboutMeWindowInner.classList.remove("contentLoadHeight");
  userWindow.classList.remove("restore");
});

userMiniButton.addEventListener("click", (e) => {
  userWindow.classList.remove("dblock");
  userWindow.classList.add("dnone");
  aboutMeItemTaskbar.classList.add("activeItem");
});

userRestoreButton.addEventListener("click", (e) => {
  userWindow.classList.add("restore");
  aboutMeWindowInner.classList.add("contentLoadHeight");
  userWindow.classList.remove("maximize");
  aboutMeWindowInner.classList.remove("contentMax");
  userMaxButton.classList.add("dblock");
  userMaxButton.classList.remove("dnone");
  userRestoreButton.classList.add("dnone");
  userRestoreButton.classList.remove("dblock");
});

userIcon.addEventListener("click", (e) => {
  userWindow.className = "dblock window glass";
  aboutMeItemTaskbar.classList.add("dblock");
  aboutMeItemTaskbar.classList.remove("dnone");
});

aboutMeItemTaskbar.addEventListener("click", (e) => {
  const dispVal = checkUserWindowDisplay();
  console.log(dispVal);
  if (dispVal === "block") {
    userWindow.classList.add("dnone");
    userWindow.classList.remove("dblock");
    aboutMeItemTaskbar.classList.add("activeItem");
  }

  if (dispVal === "none") {
    userWindow.classList.remove("dnone");
    userWindow.classList.add("dblock");
    aboutMeItemTaskbar.classList.remove("activeItem");
  }
});

//Skills window controls

const skillsCloseButton = document.querySelector(".skillsCloseButton");
const skillsMaxButton = document.querySelector(".skillsMaximizeButton");
const skillsRestoreButton = document.querySelector(".skillsRestoreButton");
const skillsMiniButton = document.querySelector(".skillsMinimizeButton");

skillsCloseButton.addEventListener("click", (e) => {
  skillsCloseButton.parentElement.parentElement.parentElement.className =
    "dnone";
  skillsMaxButton.classList.remove("dnone");
  skillsMaxButton.classList.add("dblock");
  skillsRestoreButton.classList.remove("dblock");
  skillsRestoreButton.classList.add("dnone");
  skillsItemTaskbar.classList.remove("dblock");
  skillsItemTaskbar.classList.add("dnone");
  skillsWindowInner.classList.add("contentLoadHeight");
});

skillsMaxButton.addEventListener("click", (e) => {
  skillsWindow.classList.add("maximize");
  skillsWindowInner.style.height = "93vh";
  skillsMaxButton.classList.add("dnone");
  skillsRestoreButton.classList.remove("dnone");
  skillsRestoreButton.classList.add("dblock");
  skillsWindowInner.classList.remove("contentLoadHeight");
  skillsWindow.classList.remove("restore");
});

skillsMiniButton.addEventListener("click", (e) => {
  skillsWindow.classList.remove("dblock");
  skillsWindow.classList.add("dnone");
  skillsItemTaskbar.classList.add("activeItem");
});

skillsRestoreButton.addEventListener("click", (e) => {
  skillsWindow.classList.add("restore");
  skillsWindowInner.classList.add("contentLoadHeight");
  skillsWindow.classList.remove("maximize");
  skillsWindowInner.style.height = "70vh";
  skillsMaxButton.classList.add("dblock");
  skillsMaxButton.classList.remove("dnone");
  skillsRestoreButton.classList.add("dnone");
  skillsRestoreButton.classList.remove("dblock");
});

skillsIcon.addEventListener("click", (e) => {
  skillsWindow.className = "dblock window glass";
  skillsItemTaskbar.classList.add("dblock");
  skillsItemTaskbar.classList.remove("dnone");
  skillsWindowInner.classList.add("contentLoadHeight");
});

skillsItemTaskbar.addEventListener("click", (e) => {
  const dispVal = checkSkillsWindowDisplay();
  console.log(dispVal);
  if (dispVal === "block") {
    skillsWindow.classList.add("dnone");
    skillsWindow.classList.remove("dblock");
    skillsItemTaskbar.classList.add("activeItem");
  }

  if (dispVal === "none") {
    skillsWindow.classList.remove("dnone");
    skillsWindow.classList.add("dblock");
    skillsItemTaskbar.classList.remove("activeItem");
  }
});

//Education controls

const educationCloseButton = document.querySelector(".educationCloseButton");
const educationMaxButton = document.querySelector(".educationMaximizeButton");
const educationRestoreButton = document.querySelector(
  ".educationRestoreButton"
);
const educationMiniButton = document.querySelector(".educationMinimizeButton");

educationCloseButton.addEventListener("click", (e) => {
  educationCloseButton.parentElement.parentElement.parentElement.className =
    "dnone";
  educationMaxButton.classList.remove("dnone");
  educationMaxButton.classList.add("dblock");
  educationRestoreButton.classList.remove("dblock");
  educationRestoreButton.classList.add("dnone");
  educationItemTaskbar.classList.remove("dblock");
  educationItemTaskbar.classList.add("dnone");
  educationWindowInner.classList.add("contentLoadHeight");
});

educationMaxButton.addEventListener("click", (e) => {
  educationWindow.classList.add("maximize");
  educationWindowInner.style.height = "93vh";
  educationMaxButton.classList.add("dnone");
  educationRestoreButton.classList.remove("dnone");
  educationRestoreButton.classList.add("dblock");
  educationWindowInner.classList.remove("contentLoadHeight");
  educationWindow.classList.remove("restore");
});

educationMiniButton.addEventListener("click", (e) => {
  educationWindow.classList.remove("dblock");
  educationWindow.classList.add("dnone");
  educationItemTaskbar.classList.add("activeItem");
});

educationRestoreButton.addEventListener("click", (e) => {
  educationWindow.classList.add("restore");
  educationWindowInner.classList.add("contentLoadHeight");
  educationWindow.classList.remove("maximize");
  educationWindowInner.style.height = "70vh";
  educationMaxButton.classList.add("dblock");
  educationMaxButton.classList.remove("dnone");
  educationRestoreButton.classList.add("dnone");
  educationRestoreButton.classList.remove("dblock");
});

educationIcon.addEventListener("click", (e) => {
  educationWindow.className = "dblock window glass";
  educationItemTaskbar.classList.add("dblock");
  educationItemTaskbar.classList.remove("dnone");
  educationWindowInner.classList.add("contentLoadHeight");
});

educationItemTaskbar.addEventListener("click", (e) => {
  const dispVal = checkEducationWindowDisplay();
  console.log(dispVal);
  if (dispVal === "block") {
    educationWindow.classList.add("dnone");
    educationWindow.classList.remove("dblock");
    educationItemTaskbar.classList.add("activeItem");
  }

  if (dispVal === "none") {
    educationWindow.classList.remove("dnone");
    educationWindow.classList.add("dblock");
    educationItemTaskbar.classList.remove("activeItem");
  }
});

//Start button

startButton.addEventListener("click", (e) => {
  startMenu.classList.toggle("dblock");
});

logoutButton.addEventListener("click", () => {
  userLoginScreen.classList.remove("dnone");
  userLoginScreen.classList.add("dblock");
  userLoginScreen.classList.add("fadeIn");
});
