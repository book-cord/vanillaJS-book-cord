const nickName = document.querySelector("#nickName");
const myQuote = document.querySelector("#myQuote");

nickName.textContent = "됴뎡";
myQuote.textContent = "Hello, world";

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

if (window.localStorage.length < 16) {
  for (let i = 0; i < window.localStorage.length; i++) {
    const key = window.localStorage.key(i);
    const value = window.localStorage.getItem(key);
    const parsingValue = JSON.parse(value);
    const randomNum = Math.floor(Math.random() * 7);
    console.log(randomNum);

    let bookLi = document.createElement("li");
    bookLi.textContent = parsingValue.title;
    bookLi.style.backgroundColor = BGColorArr[randomNum];
    bookLi.style.color = "white";
    bookUl.appendChild(bookLi);
  }
}

if (window.localStorage.length >= 16) {
  for (let i = 0; i < 16; i++) {
    const key = window.localStorage.key(i);
    const value = window.localStorage.getItem(key);
    const parsingValue = JSON.parse(value);
    const randomNum = Math.floor(Math.random() * 7);

    let bookLi = document.createElement("li");
    bookLi.textContent = parsingValue.title;
    bookLi.style.backgroundColor = BGColorArr[randomNum];
    bookLi.style.color = "white";
    bookUl.appendChild(bookLi);
  }
  for (let i = 16; i < window.localStorage.length; i++) {
    const key = window.localStorage.key(i);
    const value = window.localStorage.getItem(key);
    const parsingValue = JSON.parse(value);
    const randomNum = Math.floor(Math.random() * 7);
    let bookLi = document.createElement("li");
    bookLi.textContent = parsingValue.title;
    bookLi.style.backgroundColor = BGColorArr[randomNum];
    bookLi.style.color = "white";
    newBookUl.appendChild(bookLi);
    BookArticle.appendChild(newBookUl);
  }
  originArticle.insertAdjacentElement("afterend", BookArticle);
}
