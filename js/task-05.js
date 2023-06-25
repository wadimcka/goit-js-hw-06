const targetInputEl = document.querySelector("#name-input");
const targetOutputEl = document.querySelector("#name-output");
// console.dir(targetOutput);

targetInputEl.addEventListener("focus", onTargetInputFocus);
targetInputEl.addEventListener("input", onTargetInputTextInput);
targetInputEl.addEventListener("blur", onTargetInputBlur);

function onTargetInputFocus(event) {
  targetOutputEl.textContent = "";
  targetInputEl.addEventListener("input", onTargetInputTextInput);
}

function onTargetInputTextInput(event) {
  console.log((targetOutputEl.textContent = targetInputEl.value));
}

function onTargetInputBlur(event) {
  targetInputEl.removeEventListener("input", onTargetInputTextInput);
  targetInputEl.value = "";
  if (targetInputEl.value === "") {
    targetOutputEl.textContent = "Anonymous";
  }
}
