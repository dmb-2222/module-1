"use strict";
let start = document.querySelector(".js-start");
let lap = document.querySelector(".js-take-lap");
let reset = document.querySelector(".js-reset");
let ulLap = document.querySelector(".js-laps");
// Доступ к значению секундомера
let minutesContainer = document.querySelector(".js-time");
const stopwatch = {
  counter: 0,
  timerId: null,
  isActive: false,
  laps() {
    let li = document.createElement("li");
    li.textContent = minutesContainer.textContent;
    ulLap.append(li);
  },
  // запуск таймера
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
      start.textContent = "Pause";
    } else if (this.isActive) {
      this.isActive = false;
      clearInterval(this.timerId);
      start.textContent = "Continue";
    }
  },
  // Запускаем функцию reset
  reset() {
    clearInterval(this.timerId);
    this.counter = 0;
    this.isActive = false;
    start.textContent = "Start";
    minutesContainer.textContent = `00:00.0`;
    // ulLap.removeChild(li);
  }
};
lap.addEventListener("click", stopwatch.laps.bind(stopwatch));
start.addEventListener("click", stopwatch.starPauseContinue.bind(stopwatch));
reset.addEventListener("click", stopwatch.reset.bind(stopwatch));
