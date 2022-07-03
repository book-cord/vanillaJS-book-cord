const nickName = document.querySelector("#nickName");
const myQuote = document.querySelector("#myQuote");

const existedmyInfo = JSON.parse(localStorage.getItem("myInfo"));
nickName.textContent = existedmyInfo.nickName;
myQuote.textContent = existedmyInfo.quote;

const myInfo = document.querySelector("#myInfo");
const myInfosection = document.querySelector("#myInfosection");
const myInfoContainer = document.querySelector(".myInfoContainer");
const nickNameInput = document.querySelector("#nickNameInput");
const quoteInput = document.querySelector("#quoteInput");
const submitButton = document.querySelector("#submitButton");
myInfo.addEventListener("click", (e) => {
  e.preventDefault();
  myInfosection.style.display = "block";
  nickNameInput.value = existedmyInfo.nickName;
  quoteInput.value = existedmyInfo.quote;
});
myInfosection.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target == myInfosection) {
    myInfosection.style.display = "none";
  }
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const newInfo = { nickName: nickNameInput.value, quote: quoteInput.value };
  localStorage.setItem("myInfo", JSON.stringify(newInfo));
  myInfosection.style.display = "none";
  location.reload();
});

const BGColorArr = [
  "#FCC5C0",
  "#ADCF9F",
  "#87AAAA",
  "#94B49F",
  "#D4B499",
  "#3F4E4F",
  "#FF8C8C",
];

const bookUl = document.querySelector("article ul");
const originArticle = document.querySelector("article");
const BookArticle = document.createElement("article");
const newBookUl = document.createElement("ul");

if (window.localStorage.length - 1 < 16) {
  for (let i = 1; i < window.localStorage.length - 1; i++) {
    const value = window.localStorage.getItem(i);
    const parsingValue = JSON.parse(value);
    const randomNum = Math.floor(Math.random() * 7);

    let bookLi = document.createElement("li");
    bookLi.textContent = parsingValue.title;
    bookLi.style.backgroundColor = BGColorArr[randomNum];
    bookLi.style.color = "white";
    bookLi.addEventListener("click", () => {
      localStorage.setItem("showItem", value);
      location.href = "../uniRecord/unitRecord.html";
    });
    bookUl.appendChild(bookLi);
  }
}

if (window.localStorage.length - 2 >= 16) {
  for (let i = 1; i < 16; i++) {
    const value = window.localStorage.getItem(i);
    const parsingValue = JSON.parse(value);
    const randomNum = Math.floor(Math.random() * 7);

    let bookLi = document.createElement("li");
    bookLi.textContent = parsingValue.title;
    bookLi.style.backgroundColor = BGColorArr[randomNum];
    bookLi.style.color = "white";
    bookLi.addEventListener("click", () => {
      localStorage.setItem("showItem", value);
      location.href = "../uniRecord/unitRecord.html";
    });
    bookUl.appendChild(bookLi);
  }
  for (let i = 16; i < window.localStorage.length - 1; i++) {
    const value = window.localStorage.getItem(i);
    const parsingValue = JSON.parse(value);
    const randomNum = Math.floor(Math.random() * 7);
    let bookLi = document.createElement("li");
    bookLi.textContent = parsingValue.title;
    bookLi.style.backgroundColor = BGColorArr[randomNum];
    bookLi.style.color = "white";
    bookLi.addEventListener("click", () => {
      localStorage.setItem("showItem", value);
      location.href = "../uniRecord/unitRecord.html";
    });
    newBookUl.appendChild(bookLi);
    BookArticle.appendChild(newBookUl);
  }
  originArticle.insertAdjacentElement("afterend", BookArticle);
}
