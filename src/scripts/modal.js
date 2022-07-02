import { reload } from "firebase/auth";
import { populateTodo } from "./todo.js";

function addButtonEvents() {
  const addBtn = document.getElementById("add");
  const createBtn = document.getElementById("create");
  addBtn.addEventListener("click", function () {
    const title = document.querySelector(".form__heading");
    title.textContent = "Add Task";
    toggleModal();
    //check for open tab
  });
  const closeBtn = document.getElementById("close");
  const cancelBtn = document.getElementById("cancel");
  cancelBtn.addEventListener("click", toggleModal);
  closeBtn.addEventListener("click", toggleModal);
  createBtn.addEventListener("click", (e) => {
    validateForm(e);
    reloadActivePage();
  });
}

function reloadActivePage() {
  const display = document.querySelector(".header__display");
  const dashboard = document.getElementById("dashboard");
  const inbox = document.getElementById("inbox");
  const projects = document.getElementById("projects");
  const tasks = document.getElementById("tasks");
  const widgets = document.getElementById("widgets");
  const calculator = document.getElementById("calculator");
  const pomodoro = document.getElementById("pomodoro");
  const title = document.querySelector(".task__title");
  const all = document.getElementById("all");
  const today = document.getElementById("today");
  const upcoming = document.getElementById("upcoming");
    const overdue = document.getElementById("overdue");
    
    console.log("display content...", display.textContent);
    console.log("title content....", title.textContent);

  if (display.textContent === "Dashboard") {
    dashboard.click();
    return;
  } else if (display.textContent === "Inbox") {
    inbox.click();
    return;
  } else if (display.textContent === "Projects") {
    projects.click();
    return;
  } else if (display.textContent === "Widgets") {
    widgets.click();
    if (title.textContent === "Calculator") {
      calculator.click();
      return;
    }
    if (title.textContent === "Pomodoro") {
      pomodoro.click();
      return;
    }
  } else if (display.textContent === "Tasks") {
    reload();
    //tasks.click();
    if (title.textContent === "All") {
      all.click();
      return;
    }
    if (title.textContent === "Due Today") {
      today.click();
      return;
    }
    if (title.textContent === "Upcoming") {
      upcoming.click();
      return;
    }
    if (title.textContent === "Overdue") {
      overdue.click();
      return;
    }
  }
}

function validateForm(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  const priority = document.getElementById("priority").value;
  const project = document.getElementById("project").value;
  const titleError = document.querySelector(".title__error");
  const dateError = document.querySelector(".date__error");

  if (title.trim() === "") {
    titleError.textContent = "Title must not be blank";
    setTimeout(function () {
      titleError.textContent = " ";
    }, 2000);
  }
  if (date === "") {
    dateError.textContent = "Please select a date";
    setTimeout(function () {
      dateError.textContent = " ";
    }, 2000);
  }
  if (date < getTodaysDate()) {
    console.log(date, getTodaysDate());
    dateError.textContent = "Date must not be in the past";
    setTimeout(function () {
      dateError.textContent = " ";
    }, 3000);
  } else {
    //populateTodo(e);
    populateTodo();
  }
}

function getTodaysDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let day = currentDate.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  const fullDate = `${year}-${month}-${day}`;
  return fullDate;
}

function toggleModal() {
  const modal = document.querySelector(".modal");
  const form = document.querySelector(".modal__form");
  modal.classList.toggle("showModal");
  form.reset();
}

export { addButtonEvents, toggleModal, getTodaysDate, reloadActivePage };
