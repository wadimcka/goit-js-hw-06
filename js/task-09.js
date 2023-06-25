const buttonEl = document.querySelector(".change-color");
const bodyEl = document.body;
const spanEl = document.querySelector(".color");
console.log(spanEl);

buttonEl.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  const randomHexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomHexColor;
  spanEl.textContent = randomHexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
