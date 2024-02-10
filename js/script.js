"use strict";
// Секции
const bodySection = document.querySelector(".content");
const homeSection = document.querySelector(".home-page");
const aboutSection = document.querySelector(".about-page");
const hobbiesSection = document.querySelector(".hobbies-page");
const skilsSection = document.querySelector(".skils-page");
const contactsSection = document.querySelector(".contacts-page");
// Кнопки
const homeButton = document.getElementById("page_home");
const aboutButton = document.getElementById("page_about");
const hobbyButton = document.getElementById("pade_hobbies");
const skilsButton = document.getElementById("page_skils");
const contactsButton = document.getElementById("page_contacts");
// Переменные
const homePage = homeHidden;
const aboutPage = aboutHidden;
const hobbiesPage = hobbiesHidden;
const skilsPage = skilsHidden;
const contactsPage = contactsHidden;
let lastPage = homePage,
  homeFlag = true,
  aboutFlaf = false,
  hobbiesFlag = false,
  skilsFlag = false,
  contactsFlag = false;

function hidingFunction(tr) {
  tr.classList.add("hide");
}

function homeShow() {
  homeButton.classList.remove("orange-underline-off");
  homeSection.classList.remove("hide");
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
  setTimeout(hidingFunction, 205, homeSection);
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
  setTimeout(hidingFunction, 205, aboutSection);
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
  setTimeout(hidingFunction, 205, hobbiesSection);
}

function skilsShow() {
  skilsButton.classList.remove("orange-underline-off");
  skilsButton.classList.add("orange-underline-on");
  skilsSection.classList.remove("hide-section_skils");
  skilsSection.classList.add("show-section_skils");
  skilsSection.classList.remove("hide");
}

function skilsHidden() {
  skilsButton.classList.remove("orange-underline-on");
  skilsButton.classList.add("orange-underline-off");
  skilsSection.classList.remove("show-section_skils");
  skilsSection.classList.add("hide-section_skils");
  setTimeout(hidingFunction, 205, skilsSection);
}

function contactsShow() {
  contactsSection.classList.remove("hide");
  contactsSection.removeAttribute("display");
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
  setTimeout(hidingFunction, 205, contactsSection);
}

document.getElementById("page_home").onclick = function () {
  if (!homeFlag) {
    lastPage.call();
    lastPage = homePage;
    setTimeout(homeShow, 205);
    homeFlag = true;
  }
  aboutFlaf = skilsFlag = hobbiesFlag = contactsFlag = false;
};

document.getElementById("page_about").onclick = function () {
  if (!aboutFlaf) {
    lastPage.call();
    lastPage = aboutPage;
    setTimeout(aboutShow, 205);
    aboutFlaf = true;
  }
  homeFlag = skilsFlag = hobbiesFlag = contactsFlag = false;
};
document.getElementById("pade_hobbies").onclick = function () {
  if (!hobbiesFlag) {
    lastPage.call();
    lastPage = hobbiesHidden;
    setTimeout(hobbiesShow, 230);
    hobbiesFlag = true;
  }
  homeFlag = skilsFlag = aboutFlaf = contactsFlag = false;
};
document.getElementById("reed_more").onclick = function () {
  lastPage.call();
  lastPage = hobbiesPage;
  setTimeout(hobbiesShow, 230);
  hobbiesFlag = true;
  homeFlag = skilsFlag = aboutFlaf = contactsFlag = false;
};

document.getElementById("page_skils").onclick = function () {
  if (!skilsFlag) {
    bodySection.classList.remove("dark-theme-off");
    bodySection.classList.add("dark-theme-on");
    lastPage.call();
    lastPage = skilsPage;
    setTimeout(skilsShow, 230);
    skilsFlag = true;
  }
  homeFlag = hobbiesFlag = aboutFlaf = contactsFlag = false;
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
  homeFlag = skilsFlag = aboutFlaf = hobbiesFlag = false;
};
