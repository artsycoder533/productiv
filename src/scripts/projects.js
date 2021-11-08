import { renderTodo } from "./renderTodo.js";
import { createElementWithClass } from "./createElement.js";

function renderProjectHeader(projectId) {
    const projectTitle = createElementWithClass("h2", "project__title");
        projectTitle.textContent = projectId;
    const container = document.querySelector(".container");
    
    //check if container is empty
    if (container.children.length === 0) {
        container.appendChild(projectTitle);
        return;
    }
    
}

const container = document.querySelector(".container");

function renderProjectUI(projects) {
    clearProjectsUI();
    projects.forEach(project => {
        console.log(project);
        container.appendChild(renderTodo(project.title, project.description, project.dueDate, project.priority, project.project, project.id));
        // renderTodo(title, description, date, priority, project, id)
    });
        
}

function clearProjectsUI() {
    container.children.forEach(child => {
        container.children.remove(child);
    });
}

export { renderProjectUI, renderProjectHeader };