const targetInput = document.querySelector("#name-input");
const targetOutput = document.querySelector("#name-output");
// console.dir(targetOutput);

targetInput.addEventListener("focus", onTargetInputFocus);
targetInput.addEventListener("input", onTargetInputTextInput);
targetInput.addEventListener("blur", onTargetInputBlur);

function onTargetInputFocus(event) {
  targetOutput.textContent = "";
  targetInput.addEventListener("input", onTargetInputTextInput);
}

function onTargetInputTextInput(event) {
  console.log((targetOutput.textContent = targetInput.value));
}

function onTargetInputBlur(event) {
  targetInput.removeEventListener("input", onTargetInputTextInput);
  targetInput.value = "";
  if (targetInput.value === "") {
    targetOutput.textContent = "Anonymous";
  }
}
