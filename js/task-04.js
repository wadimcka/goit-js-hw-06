let counterValue = 0;
const counter = document.querySelector("#value");
// console.log(counter);
const counterAtionsElem = document.querySelectorAll("#counter button");
// console.log(counterAtionsElem);
const minus = counterAtionsElem[0];
const plus = counterAtionsElem[1];
// console.log(counterAtionsElem[1].dataset.action);
plus.addEventListener("click", onPlusButtonClick);
minus.addEventListener("click", onMinusButtonClick);
console.log(plus.textContent);

console.log(counterAtionsElem[0].dataset.action);

function onMinusButtonClick() {
  if (counterAtionsElem[0].dataset.action === "decrement") {
    counterValue -= 1;
    counter.textContent = counterValue;
    console.log(plus.textContent);
  }
}

function onPlusButtonClick() {
  if (counterAtionsElem[1].dataset.action === "increment") {
    counterValue += 1;
    counter.textContent = counterValue;
    console.log(plus.textContent);
  }
}
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
