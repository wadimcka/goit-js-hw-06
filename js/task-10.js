// const inputEl = document.querySelector("#controls").firstElementChild;
// const btnCreateEl = document.querySelector("button[data-create]");
// const btnDestrEl = document.querySelector("button[data-destroy]");
// const targetDivEl = document.querySelector("#boxes");

// btnCreateEl.addEventListener("click", createBoxes);
// btnDestrEl.addEventListener("click", destroyBoxes);

// function createBoxes() {
//   const amount = inputEl.value;
//   let widthEl = 30;
//   let heightEl = 30;
//   for (let i = 0; i < amount; i += 1) {
//     const boxEl = document.createElement("div");
//     boxEl.textContent = i + 1;
//     boxEl.style.width = `${widthEl + [i] * 10}px`;
//     boxEl.style.height = `${heightEl + [i] * 10}px`;
//     boxEl.style.backgroundColor = getRandomHexColor();
//     targetDivEl.appendChild(boxEl);
//   }
// }

// function destroyBoxes(event) {
//   targetDivEl.innerHTML = "";
//   inputEl.value = " ";
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// 17.02.25

const elem = {
  control: document.querySelector("#controls"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  parent: document.querySelector("#boxes"),
  input: document.querySelector("input"),
};

elem.control.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  const amount = Number(elem.input.value);
  console.log(amount);

  if (event.target === elem.createBtn) {
    createBoxes(amount);
  }

  if (event.target === elem.destroyBtn) {
    destroyBoxes();
  }
}

function createBoxes(amount) {
  elem.parent.innerHTML = "";
  let boxes = [];

  for (let i = 0; i < amount; i += 1) {
    let elWidth = 30;
    let elHeight = 30;
    let element = document.createElement("div");
    element.style.backgroundColor = getRandomHexColor();
    element.style.width = `${elWidth + i * 10}px`;
    element.style.height = `${elHeight + i * 10}px`;
    boxes.push(element);
  }
  elem.parent.append(...boxes);
}

function destroyBoxes() {
  elem.parent.innerHTML = "";
  elem.input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
