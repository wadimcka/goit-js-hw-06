// const targetInput = document.querySelector("#font-size-control");
// const targetText = document.querySelector("#text");
// console.dir(targetInput);

// targetInput.addEventListener("input", onTargetInpuRange);

// function onTargetInpuRange(event) {
//   targetText.style.fontSize = `${targetInput.value}px`;
// }
// 13.02.25
const targetInput = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
console.dir(spanEl);

targetInput.addEventListener("input", onInputChange);

function onInputChange(e) {
  spanEl.style.fontSize = `${e.currentTarget.value}px`;
}
