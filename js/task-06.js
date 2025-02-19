// const targetInput = document.querySelector("#validation-input");
// console.dir(targetInput);

// targetInput.addEventListener("blur", onTargetInputBlur);

// function onTargetInputBlur(event) {
//   console.log(targetInput.value.length);
//   console.log(targetInput.dataset);
//   if (targetInput.value.length !== Number(targetInput.dataset.length)) {
//     targetInput.classList.add("invalid");
//     targetInput.classList.remove("valid");
//   } else {
//     targetInput.classList.add("valid");
//     targetInput.classList.remove("invalid");
//   }
// }
// 13.02.25

const inputEl = document.querySelector('[data-length="6"]');
console.log(inputEl);

inputEl.addEventListener("blur", onBlurInputCheck);

function onBlurInputCheck(e) {
  const valueLength = inputEl.value.length;
  const dataLength = Number(inputEl.dataset.length);
  const inputStyleList = inputEl.classList;
  console.log(valueLength);
  console.log(dataLength);

  inputStyleList.remove("valid", "invalid");

  inputEl.classList.add(valueLength === dataLength ? "valid" : "invalid");
}
