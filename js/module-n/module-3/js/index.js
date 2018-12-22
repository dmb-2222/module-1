"use strict";
const allLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
// let userInput;
let login = prompt("Введите ваш логин");

function isLoginValid(login) {
  if (login.length > 4 && login.length < 16) {
    return true;
  } else {
    return false;
  }
}

function isLoginUnique(allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
}

function addLogin(allLogins, login) {
  if (isLoginValid(login) === true) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      return alert("Логин успешно добавлен");
    } else {
      return alert("Такой логин уже используется!");
    }
  } else {
    return alert("Ошибка! Логин должен быть от 4 до 16 символов");
  }
}
addLogin(allLogins, login);
console.log(allLogins);
console.log(login);
