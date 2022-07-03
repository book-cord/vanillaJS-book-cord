const id = window.localStorage.length - 2;

const button = document.querySelector("#recordButton");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const contents = document.querySelector("#contents").value;
  const newData = {
    title,
    author,
    contents,
  };
  localStorage.setItem(id + 1, JSON.stringify(newData));
  window.location.reload();
});
