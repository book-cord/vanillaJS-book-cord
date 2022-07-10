const title = document.querySelector("#title");
const author = document.querySelector("#author");
const recordContent = document.querySelector(".recordContent");

const data = JSON.parse(localStorage.getItem("showItem"));
console.log(data);

title.textContent = data.title;
author.textContent = data.author;
recordContent.textContent = data.contents;

const deleteButton = document.querySelector("#deleteButton");
const editButton = document.querySelector("#editButton");
editButton.addEventListener("click", () => {
  location.href = "../modifyRecord/modifyRecord.html";
});
deleteButton.addEventListener("click", () => {
  const dataList = JSON.parse(localStorage.getItem("record"));
  const findIndex = dataList.findIndex((i) => i.id === data.id);
  dataList.splice(findIndex, 1);
  localStorage.setItem("record", JSON.stringify(dataList));
  location.href = "../myRecord/myRecord.html";
});
