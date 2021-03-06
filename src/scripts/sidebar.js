import {
  sortTodosByProject,
  showAllTasks,
  sortTodosByTask,
  getInbox,
} from "./todo.js";
import { renderCalculator } from "./calculator.js";
import { getPomodoro } from "./pomodoro.js";
import { renderDashboard } from "./dashboard.js";
import { getQuotes } from "./quotes.js";
import { changeStatus } from "./auth.js";

const sidebarDivs = [...document.querySelectorAll(".sidebar__link")];
const workLink = document.getElementById("work");
const homeLink = document.getElementById("home");
const miscLink = document.getElementById("miscellaneous");

function addSidebarEvents() {
  const allTasks = document.getElementById("all");
  const today = document.getElementById("today");
  const upcoming = document.getElementById("upcoming");
  const overdue = document.getElementById("overdue");

  allTasks.addEventListener("click", showAllTasks);
  today.addEventListener("click", sortTodosByTask);
  upcoming.addEventListener("click", sortTodosByTask);
  overdue.addEventListener("click", sortTodosByTask);

  workLink.addEventListener("click", sortTodosByProject);
  homeLink.addEventListener("click", sortTodosByProject);
  miscLink.addEventListener("click", sortTodosByProject);

  const inbox = document.getElementById("inbox");
  inbox.addEventListener("click", getInbox);

  const calculator = document.getElementById("calculator");
  calculator.addEventListener("click", renderCalculator);

  const pomodoro = document.getElementById("pomodoro");
  pomodoro.addEventListener("click", getPomodoro);

  const dashboard = document.getElementById("dashboard");
  dashboard.addEventListener("click", function () {
    renderDashboard();
    getQuotes();
    changeStatus("dashboard");
  });

  sidebarDivs.map((div) => {
    div.addEventListener("click", (e) => {
      openSubMenu(e);
    });
  });
}

function openSubMenu(e) {
  const display = document.querySelector(".header__display");
  if (
    e.currentTarget.dataset.id === "Dashboard" ||
    e.currentTarget.dataset.id === "Inbox"
  ) {
    display.textContent = e.currentTarget.dataset.id;
  }
  removeActiveLinks(e);
  closeSubMenus();
  if (e.currentTarget.nextElementSibling) {
    e.currentTarget.classList.toggle("active");
    e.currentTarget.nextElementSibling.classList.toggle("showSub");
  } else {
    e.currentTarget.classList.add("active");
  }
}

function removeActiveLinks() {
  sidebarDivs.map((div) => {
    div.classList.remove("active");
  });
}

function closeSubMenus() {
  const submenus = [...document.querySelectorAll(".sidebar__sublinks")];
  submenus.forEach((menu) => {
    if (menu.classList.contains("showSub")) {
      menu.classList.remove("showSub");
    }
  });
}

export { addSidebarEvents, workLink, homeLink, miscLink, openSubMenu };
