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

const localStorageData = JSON.parse(localStorage.getItem("record"));
const bookUl = document.querySelector("article ul");
const originArticle = document.querySelector("article");
const BookArticle = document.createElement("article");
const newBookUl = document.createElement("ul");

if (localStorageData.length < 16) {
  for (let i = 0; i < localStorageData.length; i++) {
    const randomNum = Math.floor(Math.random() * 7);

    let bookLi = document.createElement("li");
    bookLi.textContent = localStorageData[i].title;
    bookLi.style.backgroundColor = BGColorArr[randomNum];
    bookLi.style.color = "white";
    bookLi.addEventListener("click", () => {
      localStorage.setItem("showItem", JSON.stringify(localStorageData[i]));
      location.href = "../uniRecord/unitRecord.html";
    });
    bookUl.appendChild(bookLi);
  }
}

if (localStorageData.length >= 16) {
  for (let i = 0; i < 16; i++) {
    const randomNum = Math.floor(Math.random() * 7);

    let bookLi = document.createElement("li");
    bookLi.textContent = localStorageData[i].title;
    bookLi.style.backgroundColor = BGColorArr[randomNum];
    bookLi.style.color = "white";
    bookLi.addEventListener("click", () => {
      localStorage.setItem("showItem", JSON.stringify(localStorageData[i]));
      location.href = "../uniRecord/unitRecord.html";
    });
    bookUl.appendChild(bookLi);
  }
  for (let i = 16; i < localStorageData.length; i++) {
    const randomNum = Math.floor(Math.random() * 7);
    let bookLi = document.createElement("li");
    bookLi.textContent = localStorageData[i].title;
    bookLi.style.backgroundColor = BGColorArr[randomNum];
    bookLi.style.color = "white";
    bookLi.addEventListener("click", () => {
      localStorage.setItem("showItem", JSON.stringify(localStorageData[i]));
      location.href = "../uniRecord/unitRecord.html";
    });
    newBookUl.appendChild(bookLi);
    BookArticle.appendChild(newBookUl);
  }
  originArticle.insertAdjacentElement("afterend", BookArticle);
}
