const inputEl = document.querySelector("#controls").firstElementChild;
const btnCreateEl = document.querySelector("button[data-create]");
const btnDestrEl = document.querySelector("button[data-destroy]");
const targetDivEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", createBoxes);
btnDestrEl.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = inputEl.value;
  let widthEl = 30;
  let heightEl = 30;
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.textContent = i + 1;
    boxEl.style.width = `${widthEl + [i] * 10}px`;
    boxEl.style.height = `${heightEl + [i] * 10}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    targetDivEl.appendChild(boxEl);
  }
}

function destroyBoxes(event) {
  targetDivEl.innerHTML = "";
  inputEl.value = " ";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
