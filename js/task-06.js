const targetInput = document.querySelector("#validation-input");
console.dir(targetInput);
// targetInput.addEventListener("focus", onTargetInputFocus);
// targetInput.addEventListener("input", onTargetInputTextInput);
targetInput.addEventListener("blur", onTargetInputBlur);

// function onTargetInputFocus(event) {
//   targetOutput.textContent = "";
//   targetInput.addEventListener("input", onTargetInputTextInput);
// }

// function onTargetInputTextInput(event) {
//     targetInput.attributes.
//   //   console.log((targetOutput.textContent = targetInput.value));
// }

function onTargetInputBlur(event) {
  console.log(targetInput.value.length);
  console.log(targetInput.dataset);
  if (targetInput.value.length !== Number(targetInput.dataset.length)) {
    targetInput.classList.add("invalid");
    targetInput.classList.remove("valid");
  } else {
    targetInput.classList.add("valid");
    targetInput.classList.remove("invalid");
  }
}
