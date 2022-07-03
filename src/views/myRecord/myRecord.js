const main = document.querySelector("main");
const emptyModal = document.querySelector(".emptyListModal");

const recordLists = document.createElement("ol");

for (let i = 1; i <= localStorage.length - 2; i++) {
  const bookTitleKey = JSON.parse(localStorage.getItem(i));
  const bookTitle = bookTitleKey.title;
  makeLists(bookTitle, bookTitleKey);
}

if (!localStorage.getItem(1)) {
  emptyModal.classList.remove("emptyLists");
} else {
  emptyModal.classList.add("emptyLists");
}

function makeLists(bookTitle, bookTitleKey) {
  const recordList = document.createElement("li");
  const recordListTitle = document.createElement("strong");
  const icons = document.createElement("div");
  const writeIcon = document.createElement("i");
  const deleteIcon = document.createElement("i");
  const value = JSON.stringify(bookTitleKey);

  recordLists.classList.add("recordLists");
  recordListTitle.classList.add("recordListTitle");
  recordListTitle.textContent = bookTitle;
  icons.classList.add("icons");
  writeIcon.classList.add("fa-solid");
  writeIcon.classList.add("fa-pencil");
  deleteIcon.classList.add("fa-solid");
  deleteIcon.classList.add("fa-trash-can");

  recordList.addEventListener("click", () => {
    localStorage.setItem("showItem", value);
    location.href = "../uniRecord/unitRecord.html";
  });

  icons.append(writeIcon, deleteIcon);
  recordList.append(recordListTitle, icons);
  recordLists.append(recordList);
  main.append(recordLists);
}
