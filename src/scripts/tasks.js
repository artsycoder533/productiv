import { renderTodo } from "./renderTodo.js";
import { createElementWithClass } from "./createElement.js";

const container = document.querySelector(".container");
export const todosToDelete = [];

function renderTasksHeader(taskId) {
  clearTasksUI();
  const taskTitle = createElementWithClass("h2", "task__title");
  if (taskId === "today") {
    taskTitle.textContent = "Due Today";
  } else if (taskId === "all") {
    taskTitle.textContent = "All Tasks";
  } else {
    taskTitle.textContent = taskId;
  }
  const container = document.querySelector(".container");
  const todos = createElementWithClass("section", "todos");
  container.appendChild(taskTitle);
  container.appendChild(todos);
}

function renderTasksUI(tasks) {
  tasks.map((task) => {
    const { title, description, dueDate, priority, project, id, completed } =
      task;
    const todos = document.querySelector(".todos");
    todos.appendChild(
      renderTodo(title, description, dueDate, priority, project, id, completed)
    );
    container.appendChild(todos);
  });
}

function clearTasksUI() {
  const children = [...container.children];
  children.forEach((child) => {
    child.remove();
  });
}

export { renderTasksUI, renderTasksHeader };
