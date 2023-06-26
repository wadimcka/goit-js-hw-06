let counterValue = 0;
const counterEl = document.querySelector("#value");

const counterAtionsElem = document.querySelectorAll("#counter button");

const minus = counterAtionsElem[0];
const plus = counterAtionsElem[1];

plus.addEventListener("click", onPlusButtonClick);
minus.addEventListener("click", onMinusButtonClick);
console.log(plus.textContent);

console.log(counterAtionsElem[0].dataset.action);

function onMinusButtonClick() {
  if (counterAtionsElem[0].dataset.action === "decrement") {
    counterValue -= 1;
    counterEl.textContent = counterValue;
    console.log(plus.textContent);
  }
}

function onPlusButtonClick() {
  if (counterAtionsElem[1].dataset.action === "increment") {
    counterValue += 1;
    counterEl.textContent = counterValue;
    console.log(plus.textContent);
  }
}
