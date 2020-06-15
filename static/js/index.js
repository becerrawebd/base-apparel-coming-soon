document.addEventListener("DOMContentLoaded", () => {
  eventListeners();
});

const eventListeners = () => {
  document.querySelector("#email").addEventListener("keypress", clearError);
  document.querySelector("#form").addEventListener("submit", processForm);
};

const clearError = () => {
  const img = document.querySelector("#img_error");
  const error_text = document.querySelector(".error_text");
  if (error_text) {
    img.classList.add("ocultar");
    error_text.remove();
  }
};

const processForm = (e) => {
  e.preventDefault();
  const error_text = document.querySelector(".error_text");
  const ok_text = document.querySelector(".ok_text");
  if (error_text) error_text.remove();
  if (ok_text) ok_text.remove();
  const form = document.querySelector("#form");
  const img = document.querySelector("#img_error");
  const email = document.querySelector("#email");
  const p = document.createElement("p");
  if (email.value.trim() === "" || !isEmail(email.value)) {
    img.classList.remove("ocultar");
    p.innerText = "Please provide a valid email";
    p.classList.add("error_text", "absolute");
  } else {
    p.innerText = "Thanks for subscribe";
    p.classList.add("ok_text", "absolute");
  }
  form.appendChild(p);
};

const isEmail = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(regEx) ? true : false;
};
