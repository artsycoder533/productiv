import { createElementWithClass, createTextElementWithClass, createElementWithAttribute } from "./createElement.js";
import { toggleModal } from "./modal.js";
import { getTodoById} from "./todo.js";

const todos = createElementWithClass("section", "todos");

function renderTodo(title, description, date, priority, project, id) {
    // console.log(title, description, date, priority, project, id);
    
    const todo__container = createElementWithClass("div", "todo__container");
    const todo = createElementWithClass("article", "todo");
    todo.setAttribute("data-id", id);
    todo.addEventListener("click", showDetails);
    const todo__date = createElementWithClass("div", "todo__date");
    const date1 = createTextElementWithClass("small", "date", date);
    todo__date.appendChild(date1);
    todo.appendChild(todo__date);

    const todo__content = createElementWithClass("div", "todo__content");
    const todo__title = createTextElementWithClass("div", "todo__title", title);
    const todo__priority = createElementWithClass("div", "todo__priority");

     const priority1 = createTextElementWithClass("small", "priority", priority);
    //if priority is high
    if (priority === "high") {
        priority1.classList.add("high");
    }
    else {
        priority1.classList.add("normal");
    }
   
    todo__priority.appendChild(priority1);
    todo__content.appendChild(todo__title);
    todo__content.appendChild(todo__priority);

    const todo__buttons = createElementWithClass("div", "todo__buttons");
    const todo__edit = createElementWithAttribute("button", "todo__edit", "id", "edit");
    const editBtn = createElementWithClass("i", "fas");
    editBtn.classList.add("fa-edit");
    editBtn.addEventListener("click", editTodo);
    todo__edit.appendChild(editBtn);
    todo__buttons.appendChild(todo__edit);
    const todo__delete = createElementWithAttribute("button", "todo__delete", "id", "delete");
    const deleteBtn = createElementWithClass("i", "fas");
    deleteBtn.classList.add("fa-trash-alt");
    deleteBtn.addEventListener("click", deleteTodo);
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
    // todos.appendChild(todo__container);
    console.log("renderTodo called");
    // toggleModal();
    
    //reset form
    return todo__container;
}

function showDetails(e) {
    e.currentTarget.nextElementSibling.classList.toggle("showDetails");
}

function deleteTodo(e) {
    
}

function editTodo(e) {
	console.log(e.currentTarget.id);

	//make update button visible
	
	//populate form values
	const form = document.getElementById("form");
	const todo = getTodoById(e.curentTarget.id);
	//open modal
	const modal = document.querySelector(".modal");
	//hide create button
	const createBtn = document.getElementById("create");
    createBtn.classList.add("hide");
    const updateBtn = document.getElementById("update");
	updateBtn.classList.remove("hide");
	//when create button pressed, get the id of that todo and update object

	//update UI
	//hide create button
	//unhide create button
	//hide udpate button
	//close modal
}

function updateTodo(e) {
    
}

export { renderTodo };