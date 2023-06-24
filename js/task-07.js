const targetInput = document.querySelector("#font-size-control");
const targetText = document.querySelector("#text");
console.dir(targetInput);

targetInput.addEventListener("input", onTargetInpuRange);

function onTargetInpuRange(event) {
  targetText.style.fontSize = `${targetInput.value}px`;
}
