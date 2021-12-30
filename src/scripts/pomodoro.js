import { createElementWithClass, createTextElementWithClass } from "./createElement";

const container = document.querySelector(".container");

function getPomodoro() {
  clearUI();

  const title = createTextElementWithClass("h2", "pomodoro__title", "Pomodoro");
    container.appendChild(title);
    
    const pomodoroContainer = createElementWithClass("div", "pomodoro__container");
    const pomodoro = createElementWithClass("div", "pomodoro");
    const minutes = createTextElementWithClass("span", "pomodoro__timer", "25");
    const colon = createTextElementWithClass("span", "pomodoro__timer", ":");
    const seconds = createTextElementWithClass(
      "span",
      "pomodoro__timer",
      "00"
    );
    pomodoro.appendChild(minutes);
    pomodoro.appendChild(colon);
    pomodoro.appendChild(seconds);
    pomodoroContainer.appendChild(pomodoro);
    const buttonContainer = createElementWithClass("div", "pomodoro__buttons");
    const startBtn = createTextElementWithClass("button", "pomodoro__button", "Start");
    const stopBtn = createTextElementWithClass(
      "button",
      "pomodoro__button",
      "Stop"
    );
    const resetBtn = createTextElementWithClass(
      "button",
      "pomodoro__button",
      "Reset"
    );
    startBtn.addEventListener("click", startTime);
    stopBtn.addEventListener("click", stopTime);
    resetBtn.addEventListener("click", resetTime);
    buttonContainer.appendChild(startBtn);
    buttonContainer.appendChild(stopBtn);
    buttonContainer.appendChild(resetBtn);
    pomodoroContainer.appendChild(buttonContainer);
    container.appendChild(pomodoroContainer);
    
  return container;
}

function startTime() {
    
}

function stopTime() {
    
}

function resetTime() {
    
}

function clearUI() {
  const children = [...container.children];
  children.forEach((child) => {
    child.remove();
  });
}

export { getPomodoro };
