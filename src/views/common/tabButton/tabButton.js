const tabMenu = document.querySelector("#tabMenu");

const tabUl = document.createElement("ul");
const bestSellerLi = document.createElement("li");
const recordLi = document.createElement("li");
const myRecordLi = document.createElement("li");
const bestSellerA = document.createElement("a");
const recordA = document.createElement("a");
const myRecordA = document.createElement("a");

bestSellerLi.classList.add("tabButton");
bestSellerLi.classList.add("button");
recordLi.classList.add("activeButton");
recordLi.classList.add("tabButton");
recordLi.classList.add("button");
myRecordLi.classList.add("tabButton");
myRecordLi.classList.add("button");

bestSellerA.textContent = "Best Seller";
recordA.textContent = "Go record;";
myRecordA.textContent = "My record";

recordA.href = "../record/record.html";

bestSellerLi.appendChild(bestSellerA);
recordLi.appendChild(recordA);
myRecordLi.appendChild(myRecordA);

tabUl.append(bestSellerLi, recordLi, myRecordLi);
tabMenu.appendChild(tabUl);
