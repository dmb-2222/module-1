"use strict";
/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  name, id, age
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

// Вывод данных о всех Юзерах

let allUsers = document.querySelector(".all-users");
let dataUser = "";
let get = document.querySelector("#get");

// const users = {
function getAllUsers() {
  fetch("https://test-users-api.herokuapp.com/users")
    .then(response => {
      if (response.ok) return response.json();
    })
    .then(getObj => getObj.data)
    .then(getArr => showUsers(getArr))
    .catch(err => console.error(err));
}
function showUsers(arr) {
  for (let obj of arr) {
    dataUser += `Имя: ${obj.name} <br>
    Возраст: ${obj.age} <br>
    ID: ${obj.id} <br><br>`;
  }
  allUsers.innerHTML = dataUser;
}
// };
get.addEventListener("click", getAllUsers);

// ======================Get user by id============================
let userId = document.querySelector("#user-id");
let userIdInput = document.querySelector("#user-id input");
function getUserById(e) {
  e.preventDefault();
  let idInput = userIdInput.value;
  fetch("https://test-users-api.herokuapp.com/users")
    .then(response => {
      if (response.ok) return response.json();
    })
    .then(getObj => getObj.data)
    .then(getArr => ById(getArr, idInput))
    .catch(err => console.error(err));
  userId.reset();
}
function ById(arr, idInput) {
  console.log(idInput);
  let user = arr.find(num => num.id === idInput);
  if (user) {
    userId.innerHTML = `Имя: ${user.name} Возраст: ${user.age}`;
    console.log(user.name);
  } else userId.innerHTML = "Такого Юсера нет";
}
userId.addEventListener("submit", getUserById);

//=======addUser(name, age)=======================================
let post = document.querySelector("#post");
let postInputName = document.querySelector("#name");
let postInputAge = document.querySelector("#age");

function addUser(e) {
  e.preventDefault();
  console.log(postInputName.value);
  console.log(postInputAge.value);
  fetch("https://test-users-api.herokuapp.com/users", {
    method: "POST",
    body: JSON.stringify({
      name: postInputName.value,
      age: postInputAge.value
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  post.reset();
}
post.addEventListener("submit", addUser);

//=======removeUser(id) - должна удалять из БД юзера по указанному id=====

let del = document.querySelector("#delete");
let delInput = document.querySelector("#delete input");

function removeUser(e) {
  e.preventDefault();
  console.log(delInput.value);
  fetch(`https://test-users-api.herokuapp.com/users/${delInput.value}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).catch(err => console.error(err));
  del.reset();
}
del.addEventListener("submit", removeUser);
// =====  - функция updateUser(id, user) -=========================
// должна обновлять данные пользователя по id.
// user это объект с новыми полями name и age.
let put = document.querySelector("#PUT");
let putId = document.querySelector("#id-change");
let nameChange = document.querySelector("#name-change");
let ageChange = document.querySelector("#age-change");
function updateUser(e) {
  e.preventDefault();
  console.log(putId.value);
  console.log(nameChange.value);
  console.log(ageChange.value);
  fetch(`https://test-users-api.herokuapp.com/users/${putId.value}`, {
    method: "put",
    body: JSON.stringify({
      name: nameChange.value,
      age: ageChange.value
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).catch(err => console.error(err));
  put.reset();
}
put.addEventListener("submit", updateUser);
