import { checkName } from "./functions/checkName.js";

const firstName = document.querySelector("input[name='firstName']");

firstName.onkeyup = function () {
  if (checkName(this.value)) {
    this.nextElementSibling.innerHTML = "";
  } else {
    this.nextElementSibling.innerHTML = "Invalid name";
  }
};
