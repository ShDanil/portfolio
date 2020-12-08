const callbackForm = document.querySelector(".callback-form-container");
const requestModal = document.querySelector("#request");
const callbackFormName = document.querySelector("#callback-form-input-name");
const callbackFormEmail = document.querySelector("#callback-form-input-email");
const callbackFormPhone = document.querySelector("#callback-form-input-phone");

callbackFormPhone.addEventListener("click", () => {
  if (!callbackFormPhone.value.trim()) {
    callbackFormPhone.value = "+380";
  }
});

callbackFormPhone.addEventListener("blur", () => {
  if (callbackFormPhone.value === "+380") {
    callbackFormPhone.value = "";
  }
});

callbackForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let hasError = false;

  if (!callbackFormName.value.trim()) {
    callbackFormName.classList.add("callback-form-input-error");
    hasError = true;
  } else {
    callbackFormName.classList.remove("callback-form-input-error");
  }

  if (
    !callbackFormEmail.value.trim() ||
    !isEmailValid(callbackFormEmail.value)
  ) {
    callbackFormEmail.classList.add("callback-form-input-error");
    hasError = true;
  } else {
    callbackFormEmail.classList.remove("callback-form-input-error");
  }

  if (
    !callbackFormPhone.value.trim() ||
    !isPhoneValid(callbackFormPhone.value)
  ) {
    callbackFormPhone.classList.add("callback-form-input-error");
    hasError = true;
  } else {
    callbackFormPhone.classList.remove("callback-form-input-error");
  }

  if (hasError) {
    return;
  }

  callbackFormName.value = "";
  callbackFormEmail.value = "";
  callbackFormPhone.value = "";
  requestModal.classList.add("modal-active");
  setTimeout(() => {
    requestModal.classList.remove("modal-active");
  }, 3000);
});

function isPhoneValid(phone = "") {
  const regexp = /(\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})/;

  return phone.match(regexp);
}

function isEmailValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}
