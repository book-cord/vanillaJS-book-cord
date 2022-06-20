const header = document.querySelector("header");

const hamburger = document.createElement("button");
hamburger.setAttribute("id", "menuHamburger");
const icon = document.createElement("i");
icon.classList.add("fa-solid");
icon.classList.add("fa-bars");
hamburger.appendChild(icon);

const menuLogo = document.createElement("h1");
const logoA = document.createElement("a");
const logoImg = document.createElement("img");
menuLogo.setAttribute("id", "menuLogo");
logoImg.setAttribute("src", "../images/logo.png");
logoA.appendChild(logoImg);
menuLogo.appendChild(logoA);

const nav = document.createElement("nav");
const ul = document.createElement("ul");
const homeLi = document.createElement("li");
const homeA = document.createElement("a");
const aboutLi = document.createElement("li");
const aboutA = document.createElement("a");
const reportLi = document.createElement("li");
const reportA = document.createElement("a");
const navA = document.createElement("a");
const navLogin = document.createElement("li");
const span = document.createElement("span");
homeLi.textContent = "Home";
aboutLi.textContent = "About";
reportLi.textContent = "Report";
homeA.appendChild(homeLi);
aboutA.appendChild(aboutLi);
reportA.appendChild(reportLi);

span.textContent = "Log In";
navLogin.classList.add("logInButton");
navLogin.classList.add("button");
navLogin.setAttribute("id", "navLogin");
navLogin.appendChild(span);
navA.appendChild(navLogin);
ul.append(homeA, aboutA, reportA, navA);
nav.appendChild(ul);

header.append(menuLogo, nav, hamburger);
