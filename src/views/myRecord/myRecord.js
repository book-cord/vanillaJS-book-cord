const main = document.querySelector("main");
const emptyModal = document.querySelector(".emptyListModal");

const recordLists = document.createElement("ol");

const localStorageData = JSON.parse(localStorage.getItem("record"));
console.log(localStorageData.length);

if (localStorageData.length == 0) {
  emptyModal.classList.remove("emptyLists");
} else {
  emptyModal.classList.add("emptyLists");
}

for (let i = 0; i < localStorageData.length; i++) {
  const bookData = localStorageData[i];
  const bookTitle = localStorageData[i].title;
  makeLists(bookTitle, bookData);
}

function makeLists(bookTitle, bookData) {
  const recordList = document.createElement("li");
  const recordListTitle = document.createElement("strong");
  const icons = document.createElement("div");
  const iconForDelete = document.createElement("div");
  const iconForWrite = document.createElement("div");
  const writeIcon = document.createElement("i");
  const deleteIcon = document.createElement("i");

  recordList.setAttribute("id", "list");
  recordLists.classList.add("recordLists");
  recordListTitle.classList.add("recordListTitle");
  recordListTitle.textContent = bookTitle;
  icons.classList.add("icons");
  writeIcon.classList.add("fa-solid");
  writeIcon.classList.add("fa-pencil");
  deleteIcon.classList.add("fa-solid");
  deleteIcon.classList.add("fa-trash-can");
  iconForDelete.appendChild(deleteIcon);
  iconForDelete.setAttribute("id", "delete");
  iconForWrite.appendChild(writeIcon);
  iconForWrite.setAttribute("id", "write");

  iconForDelete.addEventListener("click", () => {
    const filterData = localStorageData.filter((e) => e.id !== bookData.id);
    localStorage.setItem("record", JSON.stringify(filterData));
    location.reload();
  });
  iconForWrite.addEventListener("click", () => {
    localStorage.setItem("showItem", JSON.stringify(bookData));
    location.href = "../modifyRecord/modifyRecord.html";
  });

  recordList.addEventListener("click", (e) => {
    if (e.target.id === "list") {
      localStorage.setItem("showItem", JSON.stringify(bookData));
      location.href = "../uniRecord/unitRecord.html";
    }
  });

  icons.append(iconForWrite, iconForDelete);
  recordList.append(recordListTitle, icons);
  recordLists.append(recordList);
  main.append(recordLists);
}
