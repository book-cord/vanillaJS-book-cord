const main = document.querySelector("main");
const emptyModal = document.querySelector(".emptyListModal");

const recordLists = document.createElement("ol");

const localStorageData = JSON.parse(localStorage.getItem("record"));

if (!localStorage.getItem("record")) {
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
  const writeIcon = document.createElement("i");
  const deleteIcon = document.createElement("i");

  recordLists.classList.add("recordLists");
  recordListTitle.classList.add("recordListTitle");
  recordListTitle.textContent = bookTitle;
  icons.classList.add("icons");
  writeIcon.classList.add("fa-solid");
  writeIcon.classList.add("fa-pencil");
  deleteIcon.classList.add("fa-solid");
  deleteIcon.classList.add("fa-trash-can");

  recordList.addEventListener("click", () => {
    localStorage.setItem("showItem", JSON.stringify(bookData));
    location.href = "../uniRecord/unitRecord.html";
  });
  deleteIcon.addEventListener("click", () => {
    const filterData = localStorageData.filter((e) => e.id !== bookData.id);
    localStorage.setItem("record", JSON.stringify(filterData));
    location.reload();
  });

  icons.append(writeIcon, deleteIcon);
  recordList.append(recordListTitle, icons);
  recordLists.append(recordList);
  main.append(recordLists);
}
