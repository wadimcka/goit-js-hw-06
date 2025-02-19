// const inputEl = document.querySelector("#name-input");
// const outputEl = document.querySelector("#name-output");

// inputEl.addEventListener("input", onInputTextInput);

// function onInputTextInput(event) {
//   if (inputEl.value === "") {
//     console.log((outputEl.textContent = "Anonymous"));
//   } else {
//     console.log((outputEl.textContent = inputEl.value));
//   }
// }
// 13.02.25
const elem = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};
elem.input.addEventListener("input", onInputTextInput);

function onInputTextInput(e) {
  let inputValue = e.currentTarget.value.trim();
  elem.span.textContent = inputValue === "" ? "Anonymous" : inputValue;
}
