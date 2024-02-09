"use strict";
// Секции
const bodySection = document.querySelector(".content");
const homeSection = document.querySelector(".home-page");
const aboutSection = document.querySelector(".about-page");
const hobbiesSection = document.querySelector(".hobbies-page");
const contactsSection = document.querySelector(".contacts-page");
// Кнопки
const homeButton = document.getElementById("page_home");
const aboutButton = document.getElementById("page_about");
const hobbyButton = document.getElementById("pade_hobbies");
const contactsButton = document.getElementById("page_contacts");
// Переменные
const homePage = homeHidden;
const aboutPage = aboutHidden;
const hobbiesPage = hobbiesHidden;
const contactsPage = contactsHidden;
let lastPage = homePage,
  homeFlag = true,
  aboutFlaf = false,
  hobbiesFlag = false,
  contactsFlag = false;

function homeShow() {
  homeButton.classList.remove("orange-underline-off");
  homeButton.classList.add("orange-underline-on");
  homeSection.classList.remove("hidden-section_home");
  homeSection.classList.add("show-section_home");
  if (bodySection.matches("[class$=dark-theme-on]")) {
    bodySection.classList.remove("dark-theme-on");
    bodySection.classList.add("dark-theme-off");
  }
}
function homeHidden() {
  homeButton.classList.remove("orange-underline-on");
  homeButton.classList.add("orange-underline-off");
  homeSection.classList.remove("show-section_home");
  homeSection.classList.add("hidden-section_home");
}

function aboutShow() {
  aboutButton.classList.remove("orange-underline-off");
  aboutButton.classList.add("orange-underline-on");
  aboutSection.classList.remove("hide");
  aboutSection.classList.remove("hide-section_about");
  aboutSection.classList.add("show-section_about");
  if (bodySection.matches("[class$=dark-theme-on]")) {
    bodySection.classList.remove("dark-theme-on");
    bodySection.classList.add("dark-theme-off");
  }
}
function aboutHidden() {
  aboutButton.classList.remove("orange-underline-on");
  aboutButton.classList.add("orange-underline-off");
  aboutSection.classList.remove("show-section_about");
  aboutSection.classList.add("hide-section_about");
}

function hobbiesShow() {
  hobbyButton.classList.remove("orange-underline-off");
  hobbyButton.classList.add("orange-underline-on");
  hobbiesSection.classList.remove("hide-section_hobbies");
  hobbiesSection.classList.add("show-section_hobbies");
  hobbiesSection.classList.remove("hide");
  if (bodySection.matches("[class$=dark-theme-on]")) {
    bodySection.classList.remove("dark-theme-on");
    bodySection.classList.add("dark-theme-off");
  }
}

function hobbiesHidden() {
  hobbyButton.classList.remove("orange-underline-on");
  hobbyButton.classList.add("orange-underline-off");
  hobbiesSection.classList.remove("show-section_hobbies");
  hobbiesSection.classList.add("hide-section_hobbies");
}

function contactsShow() {
  contactsSection.classList.remove("hide");
  contactsButton.classList.remove("green-underline-off");
  contactsButton.classList.add("green-underline-on");
  contactsSection.classList.remove("hide-section_contacts");
  contactsSection.classList.add("show-section_contacts");
}

function contactsHidden() {
  contactsButton.classList.remove("green-underline-on");
  contactsButton.classList.add("green-underline-off");
  contactsSection.classList.remove("show-section_contacts");
  contactsSection.classList.add("hide-section_contacts");
}

document.getElementById("page_home").onclick = function () {
  if (!homeFlag) {
    lastPage.call();
    lastPage = homePage;
    setTimeout(homeShow, 205);
    homeFlag = true;
  }
  aboutFlaf = hobbiesFlag = contactsFlag = false;
};

document.getElementById("page_about").onclick = function () {
  if (!aboutFlaf) {
    lastPage.call();
    lastPage = aboutPage;
    setTimeout(aboutShow, 205);
    aboutFlaf = true;
  }
  homeFlag = hobbiesFlag = contactsFlag = false;
};
document.getElementById("pade_hobbies").onclick = function () {
  if (!hobbiesFlag) {
    lastPage.call();
    lastPage = hobbiesHidden;
    setTimeout(hobbiesShow, 230);
    // lastPage =
    hobbiesFlag = true;
  }
  homeFlag = aboutFlaf = contactsFlag = false;
};
document.getElementById("reed_more").onclick = function () {
  lastPage.call();
  lastPage = hobbiesPage;
  setTimeout(hobbiesShow, 230);
  hobbiesFlag = true;
  homeFlag = aboutFlaf = contactsFlag = false;
};

document.getElementById("page_contacts").onclick = function () {
  if (!contactsFlag) {
    bodySection.classList.remove("dark-theme-off");
    bodySection.classList.add("dark-theme-on");
    lastPage.call();
    lastPage = contactsPage;
    setTimeout(contactsShow, 530);
    contactsFlag = true;
  }
  homeFlag = aboutFlaf = hobbiesFlag = false;
};
