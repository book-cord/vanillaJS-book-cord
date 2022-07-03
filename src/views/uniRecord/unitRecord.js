const title = document.querySelector("#title");
const author = document.querySelector("#author");
const recordContent = document.querySelector(".recordContent");

const data = JSON.parse(localStorage.getItem("showItem"));
console.log(data);

title.textContent = data.title;
author.textContent = data.author;
recordContent.textContent = data.contents;
