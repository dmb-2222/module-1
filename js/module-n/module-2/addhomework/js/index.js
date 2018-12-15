"use strict";

const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attempts = 3;
let userEnter;
do {
  userEnter = prompt("Введите ваш пароль");
  for (let i of passwords) {
    if (passwords.includes(userEnter)) {
      alert("Добро пожаловать");
      attempts = attempts - 3;
      break;
    } else if (attempts > 0) {
      attempts = attempts - 1;
      console.log(attempts);
      alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
      break;
    } else if (attempts === 0) {
      alert("У вас закончились попытки, аккаунт заблокирован!");
    }
  }
} while (attempts > 0);
