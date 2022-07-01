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
logoA.href = "../landing/landing.html";
logoA.appendChild(logoImg);
menuLogo.appendChild(logoA);

const nav = document.createElement("nav");
const ul = document.createElement("ul");
const homeLi = document.createElement("li");
const homeA = document.createElement("a");
const aboutLi = document.createElement("li");
const aboutA = document.createElement("a");
const myBookLi = document.createElement("li");
const myBookA = document.createElement("a");
const navA = document.createElement("a");
const navLogin = document.createElement("li");
const span = document.createElement("span");
homeA.textContent = "Home";
homeA.href = "../landing/landing.html";
aboutA.textContent = "About";
myBookA.textContent = "myBook";
myBookA.href = "../myBook/myBook.html";
homeLi.appendChild(homeA);
aboutLi.appendChild(aboutA);
myBookLi.appendChild(myBookA);

span.textContent = "Log In";
navLogin.classList.add("logInButton");
navLogin.classList.add("button");
navLogin.setAttribute("id", "navLogin");
navA.appendChild(span);
navLogin.appendChild(navA);
navA.href = "../login/login.html";
ul.append(homeLi, aboutLi, myBookLi, navLogin);
nav.appendChild(ul);

header.append(menuLogo, nav, hamburger);
