"use strict";
const input = document.querySelector("#urls");
const form = document.querySelector("#post");

const allUrl = document.querySelector(".all-url");
const tempUrl = document.querySelector("#temp-url").innerHTML.trim();
const mark = Handlebars.compile(tempUrl);
let arr = [];
let resultInput;
let i = 0;

function userInput(e) {
  e.preventDefault();
  i++;
  resultInput = input.value;
  console.log(input.value);
  arr.push({ id: i, url: input.value });
  let result = arr.reduce((acc, el) => acc + mark(el), "");
  allUrl.innerHTML = result;

  form.reset();
}
form.addEventListener("submit", userInput);

// function userDelete(e) {
//   e.preventDefault();
//   // const divContainer = document.querySelector(".container");
//   // const del = document.getElementById(targetId);

//   const btn = document.querySelector("button");
//   btn.dataset.targetId;
//   console.log(`del.dataset.targetId= ${btn.dataset.targetId}`);

//   const idToRemove = 1;
//   const filteredUrl = arr.filter(item => item.id !== idToRemove);
//   let result = filteredUrl.reduce((acc, el) => acc + mark(el), "");
//   allUrl.innerHTML = result;
//   console.log(filteredUrl);
// }
// allUrl.addEventListener("click", userDelete);

allUrl.addEventListener('click', function(e){
  e.preventDefault();
  const {targetId} = this.dataset;
  document.querySelector(`[data-target-id="${targetId}"]`).remove();
});
