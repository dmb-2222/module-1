"use strict";
let start = document.querySelector(".js-start");
let lap = document.querySelector(".js-take-lap");
let reset = document.querySelector(".js-reset");
let ulLap = document.querySelector(".js-laps");
// Доступ к значению секундомера
let minutesContainer = document.querySelector(".js-time");

class Timer {
  constructor({ stratValue = 0,
    start = "Start",
    pause = "Pause",
    contin = "Continue",
    startPosition = "00:00.0",
    clearLi = "",
    onTick }) 
    {
    this.counter = stratValue;
    this.timerId = null;
    this.isActive = false;
    this.onTick = onTick;
  }
  laps() {
    let li = document.createElement("li");
    li.textContent = minutesContainer.textContent;
    ulLap.append(li);
  }
  reset(onRest, startContent) {
    clearInterval(this.timerId);
    this.isActive = false;
    startContent(this.start);
    onRest(this.startPosition);
    ulLap.innerHTML = this.clearLi;
  }
  starPauseContinue() {
    if (!this.isActive) {
      this.isActive = true;
      this.timerId = setInterval(() => {
        // Изменение данных в таймере
        this.counter++;
        let miliseconds = this.counter % 100;
        let sec = Math.floor((this.counter / 100) % 60);
        let min = Math.floor((this.counter / 6000) % 60);
        sec = sec < 10 ? `0${sec}` : sec;
        min = min < 10 ? `0${min}` : min;
        minutesContainer.textContent = `${min}:${sec}.${miliseconds}`;
      }, 10);
      start.textContent = this.pause;
    } else if (this.isActive) {
      this.isActive = false;
      clearInterval(this.timerId);
      start.textContent = this.continue;
    }
  }
}
const timer = new Timer({ 
  stratValue: 0, 
  onTick: onRest,
  start:"Start",
});

lap.addEventListener("click", timer.laps.bind(timer));
start.addEventListener("click", timer.starPauseContinue.bind(timer));
reset.addEventListener(
  "click",
  timer.reset.bind(timer, onRest, startContent)
);


function onRest(val) {
  minutesContainer.textContent = val;
}
function startContent(val) {
  start.textContent = val;
}






// const stopwatch = {
//   counter: 0,
//   timerId: null,
//   isActive: false,
//   start: "Start",
//   pause: "Pause",
//   continue: "Continue",
//   startPosition: "00:00.0",
//   clearLi: "",
//   laps() {
//     let li = document.createElement("li");
//     li.textContent = minutesContainer.textContent;
//     ulLap.append(li);
//   },
//   // Запускаем функцию reset
//   reset(onRest, startContent) {
//     clearInterval(this.timerId);
//     this.isActive = false;
//     startContent(this.start);
//     onRest(this.startPosition);
//     ulLap.innerHTML = this.clearLi;
//   },
//   // запуск таймера
//   starPauseContinue() {
//     if (!this.isActive) {
//       this.isActive = true;
//       this.timerId = setInterval(() => {
//         // Изменение данных в таймере
//         this.counter++;
//         let miliseconds = this.counter % 100;
//         let sec = Math.floor((this.counter / 100) % 60);
//         let min = Math.floor((this.counter / 6000) % 60);
//         sec = sec < 10 ? `0${sec}` : sec;
//         min = min < 10 ? `0${min}` : min;
//         minutesContainer.textContent = `${min}:${sec}.${miliseconds}`;
//       }, 10);
//       start.textContent = this.pause;
//     } else if (this.isActive) {
//       this.isActive = false;
//       clearInterval(this.timerId);
//       start.textContent = this.continue;
//     }
//   }
// };
