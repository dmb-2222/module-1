"use strict";
let userInput;
let inp;
const numbers = [];
let total = 0;
do {
  userInput = prompt("Введите любое число");
  let asNumber = Number(userInput);
  if (Number.isNaN(asNumber) === true) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(asNumber);
    console.log(numbers);
  }
} while (userInput !== null);

// Первый способ------------------------------
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
alert(`Сумма чисел равна ${total}`);
console.log(total);

//  Второй способ ---------------------
// for(let i of numbers){
//     total+= i;
// }
// alert(`Сумма чисел равна ${total}`);
// console.log(total);

// Третий способ----------------------
// numbers.forEach(d=>{
//     total+=+d;
// });
// alert(`Сумма чисел равна ${total}`);
// console.log(total);
