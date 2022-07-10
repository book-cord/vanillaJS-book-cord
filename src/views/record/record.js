const existedRecord = JSON.parse(localStorage.getItem("record"));
const newRecord = [];
if (existedRecord !== null) {
  existedRecord.forEach((e) => {
    newRecord.push(e);
  });
}
const button = document.querySelector("#recordButton");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const id = Date.now();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const contents = document.querySelector("#contents").value;
  const newData = {
    id,
    title,
    author,
    contents,
  };
  newRecord.push(newData);
  localStorage.setItem("record", JSON.stringify(newRecord));
  location.href = "../myRecord/myRecord.html";
});
