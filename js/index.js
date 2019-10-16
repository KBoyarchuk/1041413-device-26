const popup = document.querySelector(".popup");
const open = document.querySelector(".open-btn");
const close = document.querySelector(".close-btn");

open.addEventListener("click", event => {
  event.preventDefault(event);
  popup.classList.add("show");
});

close.addEventListener("click", event => {
  event.preventDefault(event);
  popup.classList.remove("show");
});
