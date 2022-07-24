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
    notAvailableSection.style.display = "block";
  }
});

signInButton.addEventListener("click", (e) => {
  e.preventDefault();
  notAvailableSection.style.display = "block";
});

const nameInput = document.querySelector("#nameInput");
const quoteInput = document.querySelector("#quoteInput");

loginSuccess.addEventListener("click", (e) => {
  const inputValue = nameInput.value;
  const inputLength = inputValue.replace(
    /[\0-\x7f]|([0-\u07ff]|(.))/g,
    "$&$1$2"
  ).length;
  console.log(inputLength);
  if (inputLength > 10 || inputLength === 0) {
    e.preventDefault();
    notAvailableSection.style.display = "block";
    notAvailableH2.innerText =
      "이름은 국문 3글자,\n영문 7글자 이내로 설정해주세요";
    notAvailableButton.addEventListener("click", () => {
      window.location.href = "../login/login.html";
    });
  } else {
    const informationData = {
      nickName: inputValue,
      quote: quoteInput.value,
    };
    localStorage.setItem("myInfo", JSON.stringify(informationData));
    location.href = "../landing/landing.html";
  }
});

if (localStorage.getItem("myInfo")) {
  nameInput.value = JSON.parse(localStorage.getItem("myInfo")).nickName;
  quoteInput.value = JSON.parse(localStorage.getItem("myInfo")).quote;
}
