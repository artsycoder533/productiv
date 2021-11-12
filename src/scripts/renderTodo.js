import { createElementWithClass, createTextElementWithClass, createElementWithAttribute } from "./createElement.js";
import { toggleModal } from "./modal.js";
import { getTodoById, Todos, updateTodo, deleteTodo} from "./todo.js";

const todos = createElementWithClass("section", "todos");

function renderTodo(title, description, date, priority, project, id) {
    // console.log(title, description, date, priority, project, id);
    
    const todo__container = createElementWithClass("div", "todo__container");
    todo__container.setAttribute("data-id", id);
    const todo = createElementWithClass("article", "todo");
    // todo.setAttribute("data-id", id);
    // todo.addEventListener("click", showDetails);
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
    // todos.appendChild(todo__container);
    console.log("renderTodo called");
    // toggleModal();
    
    //reset form
    return todo__container;
}

function showDetails(e) {
    console.log(e.currentTarget.parentElement.parentElement.parentElement.parentElement.nextElementSibling);
    e.currentTarget.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle(
			"showDetails"
		);
}

function deleteTodoUI(e) {
    const todoContainer = document.querySelector(".container");
    //remove child from todo container
    console.log(
			e.currentTarget.parentElement.parentElement.parentElement.parentElement
				.parentElement
    );
    const todo =
			e.currentTarget.parentElement.parentElement.parentElement.parentElement
				.parentElement;
    todoContainer.removeChild(todo);
    //remove todo from array
    deleteTodo(todo.dataset.id);
}

function editTodo(e) {
    
	// console.log(e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.id);

	//make update button visible
	
	//populate form values
	const form = document.getElementById("form");
	const todo2 = getTodoById(
		e.currentTarget.parentElement.parentElement.parentElement.parentElement
			.parentElement.dataset.id
    );
	//open modal
    const modal = document.querySelector(".modal");
    toggleModal();
    //set values of form elements from todo values
    form.elements.namedItem("title").value = todo2.getTitle();
    console.log(todo2.getTitle());
    form.elements.namedItem("description").value = todo2.getDescription();
    console.log(todo2.getDescription());
    form.elements.namedItem("priority").value = todo2.getPriority();
    console.log(todo2.getPriority());
    form.elements.namedItem("project").value = todo2.getProject();
    console.log(todo2.getProject());
    form.elements.namedItem("date").value = todo2.getDueDate();
    console.log(todo2.getDueDate());
    
	//hide create button
    const createBtn = document.getElementById("create");
    createBtn.classList.add("hide");
    const updateBtn = document.getElementById("update");
    updateBtn.classList.remove("hide");
    updateBtn.addEventListener("click", () => {
        updateTodoUI(todo2);
        toggleModal();
    });
	//when create button pressed, get the id of that todo and update object

	//update UI
	//hide create button
	//unhide create button
	//hide udpate button
	//close modal
}

function updateTodoUI(todo) {
    console.log("inside ipdateTodoUI");
    // e.preventDefault();
    //grab values from form 
    const form = document.getElementById("form");
    const title = form.elements.namedItem("title").value;
    const description = form.elements.namedItem("description").value;
    const priority = form.elements.namedItem("priority").value;
    const project = form.elements.namedItem("project").value;
    const date = form.elements.namedItem("date").value;
    //update that todos UI
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

    //update todo object
    updateTodo(title, description, date, priority, project, todo.getId());
    //close modal
    
}

export { renderTodo };