const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const cancelUser = 'Отменено пользователем!';
const welcome = 'Добро пожаловать!';
const unCorrectPass = 'Доступ запрещен, неверный пароль!';
const unCorrectLogin = 'Доступ запрещен, неверный логин!';

let a = prompt("Enter login");
let b;

if (a === null) {
  alert(cancelUser);
} else if (a === adminLogin) {
  b = prompt("Enter your password");
           if (b === null) {
                             alert(cancelUser);
                            }
                            else if (b === adminPassword)
                            {alert(welcome);}
                            else{
                                alert(unCorrectPass);
                            }
} else {
  alert(unCorrectLogin );
}
