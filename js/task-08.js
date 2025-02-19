// const formmainEle = document.querySelector(".login-form");

// formmainEle.addEventListener("submit", onTargetButtonClick);

// function onTargetButtonClick(event) {
//   event.preventDefault();

//   const { email, password } = event.currentTarget.elements;
//   console.log(email.value);
//   console.log(password.value);

//   if (email.value === "" || password.value === "") {
//     alert("Please fill in all fields");
//   } else {
//     const data = {
//       email: email.value,
//       password: password.value,
//     };
//     console.log(data);
//     formmainEle.reset();
//   }
// }

// 17.02.25

// const formEl = document.querySelector(".login-form");

// formEl.addEventListener("submit", onFormBtnClick);

// function onFormBtnClick(evt) {
//   evt.preventDefault();

//   const { email, password } = evt.currentTarget.elements;

//   if (!email.value.trim() || !password.value.trim()) {
//     alert("Please fill in all fields");
//     return;
//   }

//   const formData= {
//     email: email.value,
//     password: password.value,
//   };
//   console.log(formData);
//   formEl.reset();
// }

const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormBtnClick);

function onFormBtnClick(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    alert("Please fill in all fields");
    return;
  }

  const formData = {};
  new FormData(formEl).forEach((value, key) => {
    formData[key] = value;
  });

  console.log(formData);

  formEl.reset();
}
