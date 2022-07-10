const notAvailableContainer = document.querySelector("#notAvailableContainer");
const notAvailable = document.querySelector(".notAvailable");
const confirm = document.querySelector(".confirmButton");
const notAvailableDiv = document.createElement("div");
notAvailableDiv.classList.add("notAvailable");
const notAvailableH2 = document.createElement("h2");
notAvailableH2.textContent = "⚠️ 아직 준비중인 기능입니다.";
const notAvailableButton = document.createElement("button");
notAvailableButton.textContent = "확인";
notAvailableButton.classList.add("button", "confirmButton");

notAvailableDiv.append(notAvailableH2, notAvailableButton);
notAvailableContainer.append(notAvailableDiv);

notAvailableButton.addEventListener("click", (e) => {
  e.preventDefault();
  notAvailableContainer.style.display = "none";
});
notAvailableContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target == notAvailableContainer) {
    notAvailableContainer.style.display = "none";
  }
});
