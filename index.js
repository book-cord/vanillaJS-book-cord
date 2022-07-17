const thumbnail = document.querySelector('#thumbnail');

setTimeout(() => {
  thumbnail.style.backgroundImage = 'url(./bookcord-after.svg)'
},3800);

setTimeout(() => {
  location.href = "./src/views/landing/landing.html"
}, 4000);

