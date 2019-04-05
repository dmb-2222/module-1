"use strict";
const input = document.querySelector("#urls");
const form = document.querySelector("#post");
const allUrl = document.querySelector(".all-url");
const tempUrl = document.querySelector("#temp-url").innerHTML.trim();
const mark = Handlebars.compile(tempUrl);
let arr = [];
let i = 0;

// LocalStorege
const settingsFromLS = JSON.parse(localStorage.getItem("arr"));
if (settingsFromLS !== null) {
  arr = settingsFromLS;
  settingsFromLS.reverse();
  const lastId = settingsFromLS.reduce((acc, el) => el.id, 0);
  console.log(lastId);
  i = lastId;
  settingsFromLS.reverse();
  let result = arr.reduce((acc, el) => acc + mark(el), "");
  allUrl.innerHTML = result;

  const btnsLs = Array.from(document.querySelectorAll(".remove"));
  btnsLs.forEach(btn => {
    btn.addEventListener("click", function(e) {
      arr = arr.filter(el => el.id !== +this.dataset.targetId);
      document.querySelector(`[data-id="${this.dataset.targetId}"]`).remove();
      localStorage.setItem("arr", JSON.stringify(arr));
    });
  });
}

function userInput(e) {
  e.preventDefault();
  i++;
  const isValidInput = input.value.length !== 0;
  const isValidUrls = arr.find(urles => urles.url === input.value);

  if (isValidInput && !isValidUrls) {
    if (settingsFromLS === null) {
      arr.unshift({ id: i, url: input.value });
      let result = arr.reduce((acc, el) => acc + mark(el), "");
      localStorage.setItem("arr", JSON.stringify(arr));
      allUrl.innerHTML = result;
    } else {
      arr.unshift({ id: i, url: input.value });
      let result = settingsFromLS.reduce((acc, el) => acc + mark(el), "");
      localStorage.setItem("arr", JSON.stringify(arr));
      allUrl.innerHTML = result;
    }

    // Удаление урла через кнопку удалить
    const btns = Array.from(document.querySelectorAll(".remove"));

    btns.forEach(btn => {
      btn.addEventListener("click", function(e) {
        if (settingsFromLS === null) {
          arr = arr.filter(el => el.id !== +this.dataset.targetId);
          document
            .querySelector(`[data-id="${this.dataset.targetId}"]`)
            .remove();
          localStorage.setItem("arr", JSON.stringify(arr));
        } else {
          arr = settingsFromLS;
          arr = arr.filter(el => el.id !== +this.dataset.targetId);
          document
            .querySelector(`[data-id="${this.dataset.targetId}"]`)
            .remove();
          localStorage.setItem("arr", JSON.stringify(arr));
        }
      });
    });
  } else alert("Вы ввели пустое значение или такой адрес уже есть");
  form.reset();
}
form.addEventListener("submit", userInput);

// localStorage.clear();
