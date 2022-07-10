const title = document.querySelector("#title");
const author = document.querySelector("#author");
const modifyContent = document.querySelector(".modifyContent");

//초기 데이터
const data = JSON.parse(localStorage.getItem("showItem"));
title.value = data.title;
author.value = data.author;
modifyContent.value = data.contents;

//수정 데이터 입력
const dataList = JSON.parse(localStorage.getItem("record"));
const findIndex = dataList.findIndex((i) => i.id === data.id);
console.log(findIndex);
const modifyButton = document.querySelector("#modifyButton");
modifyButton.addEventListener("click", (e) => {
  e.preventDefault();
  const modifiedData = {
    id: data.id,
    title: title.value,
    author: author.value,
    contents: modifyContent.value,
  };

  dataList.splice(findIndex, 1, modifiedData);
  localStorage.setItem("record", JSON.stringify(dataList));
  localStorage.setItem("showItem", JSON.stringify(modifiedData));
  location.href = "../myRecord/myRecord.html";
});
