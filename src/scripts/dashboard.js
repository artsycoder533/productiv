import {
  getNumTasks,
  getTodaysNumTasks,
  getUpcomingTasks,
  getOverdueTasks,
} from "./todo";
import { getUsername } from "./auth";
import { checkScreenSize } from "./header";

const container = document.querySelector(".container");

function renderDashboard() {
  checkScreenSize();
  clearTasksUI();
  container.innerHTML = `
    <div class="dashboard-wrapper">
  <p class="greeting">Hello <span class="username-greeting">${getUsername()}</span>,</p>
  <section class="quote-container">
    <div class="quote">
      <p class="motivation">For your motivation: </p>
      <blockquote class="quote-text"></blockquote>
      <span class="author"></span>
    </div>
  </section>
  <section class="dashboard">
  <div class="dashboard-tasks">
    <i class="fas fa-tasks"></i>
    <span class="tasks-count">
        ${getNumTasks()}
    </span>
    <span>total tasks</span>
  </div>
  <div class="dashboard-unread">
    <i class="far fa-envelope"></i>
    <span class="unread-count">
      ${getUpcomingTasks()}
    </span>
    <span>upcoming tasks</span>
  </div>
  <div class="dashboard-overdue">
    <i class="fas fa-exclamation-triangle"></i>
    <span class="overdue-count">
      ${getOverdueTasks()}
    </span>
    <span>overdue tasks</span>
  </div>
  <div class="dashboard-today">
    <i class="fas fa-calendar-day"></i>
    <span class="today-count">
      ${getTodaysNumTasks()}
    </span>
    <span>tasks due today</span>
  </div>
</section>
</div>
    `;
  addDashboardEvents();
  return container;
}

function addDashboardEvents() {
  const allTasks = document.getElementById("all");
  const today = document.getElementById("today");
  const upcoming = document.getElementById("upcoming");
  const overdue = document.getElementById("overdue");

  const tasks = document.querySelector(".dashboard-tasks");
  const unread = document.querySelector(".dashboard-unread");
  const overdueTasks = document.querySelector(".dashboard-overdue");
  const todaysTask = document.querySelector(".dashboard-today");

  const tasksSidebar = document.getElementById("tasks");

  tasks.addEventListener("click", function () {
    allTasks.click();
    tasksSidebar.click();
  });
  unread.addEventListener("click", function () {
    upcoming.click();
    tasksSidebar.click();
  });
  todaysTask.addEventListener("click", function () {
    today.click();
    tasksSidebar.click();
  });
  overdueTasks.addEventListener("click", function () {
    overdue.click();
    tasksSidebar.click();
  });
}

function clearTasksUI() {
  const children = [...container.children];
  children.forEach((child) => {
    child.remove();
  });
}

export { renderDashboard, addDashboardEvents };
