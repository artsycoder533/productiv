import { getNumTasks, getTodaysNumTasks, getUpcomingTasks, getOverdueTasks } from "./todo";

const container = document.querySelector(".container");

function renderDashboard() {
    console.log("dashboard clicked");
    clearTasksUI();
    container.innerHTML = `
    <div class="dashboard-wrapper">
  <p class="greeting">Hello <span class="username-greeting">artsycoder533</span>,</p>
  <section class="quote-container">
    <div class="quote">
      <p class="motivation">Quote of the Day: </p>
      <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt ullam saepe officia illo doloremque vel vero minus deserunt dolore?</blockquote>
      <span class="author">-author name</span>
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
    return container;
}

function clearTasksUI() {
  const children = [...container.children];
  children.forEach((child) => {
    child.remove();
  });
}

export { renderDashboard };