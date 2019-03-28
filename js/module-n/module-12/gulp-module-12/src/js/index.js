"use strict";
const input = document.querySelector("#urls");
const form = document.querySelector("#post");

const allUrl = document.querySelector(".all-url");
const tempUrl = document.querySelector("#temp-url").innerHTML.trim();
const mark = Handlebars.compile(tempUrl);
let arr = [];
let resultInput;
function userInput(e) {
  e.preventDefault();
  resultInput = input.value;
  arr.push({ url: `${input.value}` });
  let result = arr.reduce((acc, el) => acc + mark(el), "");
  allUrl.innerHTML = result;
  form.reset();
}
form.addEventListener("submit", userInput);

function userDelete(e) {
  e.preventDefault();
  console.log(`input.value = ${resultInput}`);
  const del = document.getElementById(resultInput);
  console.log(`del.dataset.targetId= ${del.dataset.targetId}`);
  del.remove();
}
allUrl.addEventListener("click", userDelete);
