const notAvailablesection = document.querySelector("#notAvailableContainer");
const notAvailable = document.querySelector(".notAvailable");
const signInButton = document.querySelector("#signInButton");
const loginSuccess = document.querySelector("#loginSuccess");
const socialLoginContainer = document.querySelector("#socialLoginContainer");
socialLoginContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    e.target.id === "apple" ||
    e.target.id === "google" ||
    e.target.id === "kakao" ||
    e.target.id === "facebook"
  ) {
    notAvailablesection.style.display = "block";
  }
});

signInButton.addEventListener("click", (e) => {
  e.preventDefault();
  notAvailablesection.style.display = "block";
});

const nameInput = document.querySelector("#nameInput");
const quoteInput = document.querySelector("#quoteInput");
if (localStorage.getItem("myInfo")) {
  nameInput.value = JSON.parse(localStorage.getItem("myInfo")).nickName;
  quoteInput.value = JSON.parse(localStorage.getItem("myInfo")).quote;
}
loginSuccess.addEventListener("click", (e) => {
  const informationData = {
    nickName: nameInput.value,
    quote: quoteInput.value,
  };
  localStorage.setItem("myInfo", JSON.stringify(informationData));
  location.href = "../landing/landing.html";
});
