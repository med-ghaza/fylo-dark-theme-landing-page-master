const submit = document.getElementById("submit");
const email = document.getElementById("email");
const txt = document.querySelector(".txt");

function validEmail() {
  let pattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
  console.log(email.value);

  if (email.value.match(pattern)) {
    console.log("hello");
    txt.classList.add("valid");
    txt.classList.remove("invalid");
    txt.innerHTML = "Your email adress in Valid.";
  } else {
    console.log("hi");
    txt.classList.add("invalid");
    txt.classList.remove("valid");
    txt.innerHTML = "Error, please check your email";
  }
}
