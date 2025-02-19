// let counterValue = 0;
// const counterEl = document.querySelector("#value");

// const counterAtionsElem = document.querySelectorAll("#counter button");

// const minus = counterAtionsElem[0];
// const plus = counterAtionsElem[1];

// plus.addEventListener("click", onPlusButtonClick);
// minus.addEventListener("click", onMinusButtonClick);
// console.log(plus.textContent);

// console.log(counterAtionsElem[0].dataset.action);

// function onMinusButtonClick() {
//   if (counterAtionsElem[0].dataset.action === "decrement") {
//     counterValue -= 1;
//     counterEl.textContent = counterValue;
//     console.log(plus.textContent);
//   }
// }

// function onPlusButtonClick() {
//   if (counterAtionsElem[1].dataset.action === "increment") {
//     counterValue += 1;
//     counterEl.textContent = counterValue;
//     console.log(plus.textContent);
//   }
// }
// 13.02.25

const elem = {
  decrBtn: document.querySelector('[data-action="decrement"]'),
  incrBtn: document.querySelector('[data-action="increment"]'),
  spanCount: document.querySelector("#value"),
};

elem.decrBtn.addEventListener("click", onCounterBtnClick);
elem.incrBtn.addEventListener("click", onCounterBtnClick);

let counterValue = 0;

function onCounterBtnClick(e) {
  const dataAttribute = e.currentTarget.dataset.action;

  const decrValue = Number(elem.decrBtn.textContent.slice(1));
  const incrValue = Number(elem.incrBtn.textContent.slice(1));

  if (dataAttribute === "decrement") {
    counterValue -= decrValue;
  } else if (dataAttribute === "increment") {
    counterValue += incrValue;
  }

  elem.spanCount.textContent = counterValue;
}
