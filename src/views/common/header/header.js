const header = document.querySelector("header");
const notAvailableSection = document.querySelector("#notAvailableContainer");
const hamburger = document.createElement("button");
hamburger.setAttribute("id", "menuHamburger");
hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  notAvailableSection.style.display = "block";
});
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

const localStorageUserData = localStorage.getItem("myInfo");

if (localStorageUserData) {
  navLogin.classList.add("logInButtonHidden");
  const userNameList = document.createElement("li");
  userNameList.classList.add("userNameList");
  const userName = document.createElement("a");

  userName.textContent = `[ ${
    JSON.parse(localStorageUserData).nickName
  } - cord ]`;
  userNameList.appendChild(userName);
  ul.appendChild(userNameList);
}

if (!localStorageUserData) {
  myBookA.addEventListener("click", (e) => {
    e.preventDefault();
    notAvailableSection.style.display = "block";
    notAvailableH2.textContent = "⚠️ 로그인이 필요한 서비스입니다.";
    notAvailableButton.addEventListener("click", () => {
      window.location.href = "../login/login.html";
    });
  });
}
