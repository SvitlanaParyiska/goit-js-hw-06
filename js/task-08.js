const formLogin = document.querySelector(".login-form");
formLogin.addEventListener("submit", onFormLoginSubmit);

function onFormLoginSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const userInfo = {
    email: email.value,
    password: password.value,
  };
  console.log(userInfo);
  event.currentTarget.reset();
}
