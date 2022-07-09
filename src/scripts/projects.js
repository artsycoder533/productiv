import { renderTodo } from "./renderTodo.js";
import { createElementWithClass } from "./createElement.js";

const container = document.querySelector(".container");


function renderProjectHeader(projectId) {
    clearProjectsUI();
    const projectTitle = createElementWithClass("h2", "project__title");
    projectTitle.textContent = projectId;
    const container = document.querySelector(".container");
    const todos = createElementWithClass("section", "todos");
    container.appendChild(projectTitle);
    container.appendChild(todos);
}


function renderProjectUI(projects) {
    projects.map(project => {
        const todos = document.querySelector(".todos");
        todos.appendChild(
					renderTodo(
						project.title,
						project.description,
						project.dueDate,
						project.priority,
						project.project,
                        project.id,
                        project.completed
					)
        );
        container.appendChild(todos);
    });
}

function clearProjectsUI() {
    const children = [...container.children];
    children.forEach(child => {
        child.remove();
    });
}

export { renderProjectUI, renderProjectHeader };