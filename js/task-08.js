const formmainEle = document.querySelector(".login-form");
// console.log(formmainEle);

formmainEle.addEventListener("submit", onTargetButtonClick);

function onTargetButtonClick(event) {
  //   console.dir(event.currentTarget);
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  console.log(email.value);
  console.log(password.value);

  if (email.value === "" || password.value === "") {
    alert("Please fill in all fields");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
    formmainEle.reset();
  }
}
