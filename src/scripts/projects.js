import { renderTodo } from "./renderTodo.js";
import { createElementWithClass } from "./createElement.js";

const container = document.querySelector(".container");

function renderProjectHeader(projectId) {
    clearProjectsUI();
    const projectTitle = createElementWithClass("h2", "project__title");
    projectTitle.textContent = projectId;
    const container = document.querySelector(".container");
    
    //check if container is empty
    container.appendChild(projectTitle);
}


function renderProjectUI(projects) {
    console.log(projects.length);
    // clearProjectsUI();
    console.log(container);
    projects.map(project => {
        // console.log(project);
        container.appendChild(renderTodo(project.title, project.description, project.dueDate, project.priority, project.project, project.id));
        // renderTodo(title, description, date, priority, project, id)
    });
        
}

function clearProjectsUI() {
    const children = [...container.children];
    children.forEach(child => {
        
        child.remove();
    });
}

export { renderProjectUI, renderProjectHeader };