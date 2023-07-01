const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputTextInput);

function onInputTextInput(event) {
  if (inputEl.value === "") {
    console.log((outputEl.textContent = "Anonymous"));
  } else {
    console.log((outputEl.textContent = inputEl.value));
  }
}
