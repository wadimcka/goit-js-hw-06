// const buttonEl = document.querySelector(".change-color");
// const bodyEl = document.body;
// const spanEl = document.querySelector(".color");
// console.log(spanEl);

// buttonEl.addEventListener("click", onButtonClick);

// function onButtonClick(event) {
//   const randomHexColor = getRandomHexColor();
//   bodyEl.style.backgroundColor = randomHexColor;
//   spanEl.textContent = randomHexColor;
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// 17.02.25
const elem = {
  btn: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
  body: document.querySelector("body"),
};

elem.btn.addEventListener("click", onChangeColorBtnClick);

function onChangeColorBtnClick() {
  const randomColor = getRandomHexColor();
  elem.body.style.backgroundColor = randomColor;
  elem.span.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
