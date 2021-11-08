import { renderTodo } from "./renderTodo.js";
import { createElementWithClass } from "./createElement.js";

function renderProjectUI(project, projectId) {
    const projectTitle = createElementWithClass("h2", "project__title");
    projectTitle.textContent = projectID;
    const container = document.querySelector(".container");
    container.appendChild(projectTitle);
    renderTodo({ title, description, date, project, priority, project });
}

export { renderProjectUI };