import { createElementWithClass, createTextElementWithClass, createElementWithAttribute } from "./createElement.js";
import { toggleModal } from "./modal.js";
import { getTodoById, updateTodo, deleteTodo} from "./todo.js";

const todos = createElementWithClass("section", "todos");

function renderTodo(title, description, date, priority, project, id) {
    const todo__container = createElementWithClass("div", "todo__container");
    todo__container.setAttribute("data-id", id);
    const todo = createElementWithClass("article", "todo");
    const todo__date = createElementWithClass("div", "todo__date");
    const date1 = createTextElementWithClass("small", "date", date);
    todo__date.appendChild(date1);
    todo.appendChild(todo__date);

    const todo__content = createElementWithClass("div", "todo__content");
    const todo__title = createTextElementWithClass("div", "todo__title", title);
    const todo__priority = createElementWithClass("div", "todo__priority");

    const priority1 = createTextElementWithClass("small", "priority", priority);
    if (priority === "high") {
        priority1.classList.add("high");
    }
    else {
        priority1.classList.add("normal");
    }
    todo__priority.appendChild(priority1);
    todo__content.appendChild(todo__title);
    todo__content.appendChild(todo__priority);

    //todo buttons
    const todo__buttons = createElementWithClass("div", "todo__buttons");
    const todo__more = createElementWithAttribute("button", "todo__more", "id", "more");
    const moreBtn = createElementWithClass("i", "fas");
    moreBtn.classList.add("fa-caret-down");
    moreBtn.addEventListener("click", showDetails);
    todo__more.appendChild(moreBtn);
    todo__buttons.appendChild(todo__more);
    const todo__edit = createElementWithAttribute("button", "todo__edit", "id", "edit");
    const editBtn = createElementWithClass("i", "fas");
    editBtn.classList.add("fa-edit");
    editBtn.addEventListener("click", editTodo);
    todo__edit.appendChild(editBtn);
    todo__buttons.appendChild(todo__edit);
    const todo__delete = createElementWithAttribute("button", "todo__delete", "id", "delete");
    const deleteBtn = createElementWithClass("i", "fas");
    deleteBtn.classList.add("fa-trash-alt");
    deleteBtn.addEventListener("click", deleteTodoUI);
    todo__delete.appendChild(deleteBtn);
    todo__buttons.appendChild(todo__delete);
    todo__content.append(todo__buttons);
    todo.appendChild(todo__content);

    const todo__project = createTextElementWithClass("div", "todo__project", project);
    todo.appendChild(todo__project);
    todo__container.appendChild(todo);
    

    // description
    const todo__details = createElementWithClass("div", "todo__details");
    const todo__description = createElementWithClass("p", "description");
    todo__description.textContent = description;
    todo__details.appendChild(todo__description);
    todo__container.appendChild(todo__details);
    return todo__container;
}

function showDetails(e) {
    e.currentTarget.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle(
			"showDetails"
		);
}

function deleteTodoUI(e) {
    const todos = document.querySelector(".todos");
    const todo =
			e.currentTarget.parentElement.parentElement.parentElement.parentElement
            .parentElement;
    todos.removeChild(todo);
    deleteTodo(todo.dataset.id);
}

function editTodo(e) {
	const form = document.getElementById("form");
	const todo2 = getTodoById(
		e.currentTarget.parentElement.parentElement.parentElement.parentElement
			.parentElement.dataset.id
    );
    const modal = document.querySelector(".modal");
    toggleModal();
    form.elements.namedItem("title").value = todo2.getTitle();
    form.elements.namedItem("description").value = todo2.getDescription();
    form.elements.namedItem("priority").value = todo2.getPriority();
    form.elements.namedItem("project").value = todo2.getProject();
    form.elements.namedItem("date").value = todo2.getDueDate();
    
    const createBtn = document.getElementById("create");
    createBtn.classList.add("hide");
    const updateBtn = document.getElementById("update");
    updateBtn.classList.remove("hide");
    updateBtn.addEventListener("click", () => {
        const display = document.querySelector(".project__title");
        //get current project page youre on is the same as new project, re render UI
        if (form.elements.namedItem("project").value === display.textContent) {
            updateTodoUI(todo2);
            toggleModal();
            return;
        }
    
        const projectType = display.textContent;
        const misc = document.getElementById("miscellaneous");
        const home = document.getElementById("home");
        const work = document.getElementById("work");
        const title = form.elements.namedItem("title").value;
        const description = form.elements.namedItem("description").value;
        const priority = form.elements.namedItem("priority").value;
        const project = form.elements.namedItem("project").value;
        const date = form.elements.namedItem("date").value;

        if (projectType === "work") {
            updateTodo(title, description, date, priority, project, todo2.getId());
            toggleModal();
            work.click();
        }
        if (projectType === "home") {
            updateTodo(title, description, date, priority, project, todo2.getId());
            toggleModal();
            home.click();
        }
        if (projectType === "miscellaneous") {
            updateTodo(title, description, date, priority, project, todo2.getId());
            toggleModal();
            misc.click();
        }
    });
}

function updateTodoUI(todo) {
    const form = document.getElementById("form");
    const title = form.elements.namedItem("title").value;
    const description = form.elements.namedItem("description").value;
    const priority = form.elements.namedItem("priority").value;
    const project = form.elements.namedItem("project").value;
    const date = form.elements.namedItem("date").value;
    document.querySelector(".todo__title").textContent = title;
    document.querySelector(".priority").textContent = priority;
    if (priority === "normal") {
        document.querySelector(".priority").classList.remove("high");
        document.querySelector(".priority").classList.add("normal");
    }
    else if (priority === "high") {
        document.querySelector(".priority").classList.remove("normal");
        document.querySelector(".priority").classList.add("high");
    }
    document.querySelector(".todo__date").textContent = date;
    document.querySelector(".description").textContent = description;
    document.querySelector(".todo__project").textContent = project;

    updateTodo(title, description, date, priority, project, todo.getId());
    
}

export { renderTodo };