import { createElementWithClass, createTextElementWithClass } from "./createElement";
import { checkScreenSize, closeSidebar } from "./header";

const container = document.querySelector(".container");
let startingMinutes = 25;
let time = startingMinutes * 60;
let count = 0;

function getPomodoro() {
  //closeSidebar();
  checkScreenSize();
  clearUI();

  const title = createTextElementWithClass("h2", "pomodoro__title", "Pomodoro");
    container.appendChild(title);
    
    const pomodoroContainer = createElementWithClass("div", "pomodoro__container");
    const pomodoro = createElementWithClass("div", "pomodoro");
    const timer = createTextElementWithClass("span", "pomodoro__timer", "25:00");
    timer.setAttribute("id", "timer");
    pomodoro.appendChild(timer);
    pomodoroContainer.appendChild(pomodoro);
    const buttonContainer = createElementWithClass("div", "pomodoro__buttons");
    const startBtn = createTextElementWithClass("button", "pomodoro__button", "Start");
    const stopBtn = createTextElementWithClass(
      "button",
      "pomodoro__button",
      "Stop"
    );
    stopBtn.setAttribute("id", "stop");
    const resetBtn = createTextElementWithClass(
      "button",
      "pomodoro__button",
      "Reset"
    );
    resetBtn.setAttribute("id", "reset");
    startBtn.addEventListener("click", startTime);
    resetBtn.addEventListener("click", resetTime);
    buttonContainer.appendChild(startBtn);
    buttonContainer.appendChild(stopBtn);
    buttonContainer.appendChild(resetBtn);
    pomodoroContainer.appendChild(buttonContainer);
    container.appendChild(pomodoroContainer);
    
  return container;
}


function startTime() {
    const pomodoro = document.querySelector(".pomodoro");
    const timer = document.getElementById("timer");
    const stop = document.getElementById("stop");
    const interval = setInterval(function () {
        let minutesLeft = Math.floor(time / 60);
        minutesLeft < 10
          ? (minutesLeft = `0` + minutesLeft)
          : (minutesLeft = minutesLeft);
        let seconds = time % 60;
        seconds < 10 ? (seconds = `0` + seconds) : (seconds = seconds);
        timer.textContent = `${minutesLeft}:${seconds}`;
        if (minutesLeft < 1 && seconds < 1) {
            stopTimer(interval);
            count++;
            if (count > 0) {
              startingMinutes = 5;
            }
            else {
                startingMinutes = 25;
            }
            count--;
            startingMinutes === 5
              ? pomodoro.classList.add("end")
              : pomodoro.classList.remove("end");
            time = startingMinutes * 60;
            let minutesLeft = Math.floor(time / 60);
            let seconds = time % 60;
            minutesLeft < 10
              ? (minutesLeft = `0${minutesLeft}`)
              : (minutesLeft = minutesLeft);
            seconds < 10 ? (seconds = `0${seconds}`) : (seconds = seconds);
            timer.textContent = `${minutesLeft}:${seconds}`;
        }
        time--;
    }, 1000);
    
    stop.addEventListener("click", function () {
        stopTimer(interval);
    });
}


function stopTimer(interval) {
    clearInterval(interval);
}

function resetTime() {
    const timer = document.getElementById("timer");
    const pomodoro = document.querySelector(".pomodoro");
    startingMinutes === 5
      ? pomodoro.classList.add("end")
      : pomodoro.classList.remove("end");
    if (startingMinutes !== 5) {
        startingMinutes = 25;
    }
    time = startingMinutes * 60;
    let minutesLeft = Math.floor(time / 60);
    let seconds = time % 60;
    minutesLeft < 10 ? minutesLeft = `0${minutesLeft}` : minutesLeft = minutesLeft;
    seconds < 10 ? seconds = `0${seconds}` : seconds = seconds;
    timer.textContent = `${minutesLeft}:${seconds}`;
}

function clearUI() {
  const children = [...container.children];
  children.forEach((child) => {
    child.remove();
  });
}

export { getPomodoro };
