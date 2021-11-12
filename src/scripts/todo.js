import { toggleModal } from "./modal.js";
import { renderTodo } from "./renderTodo.js";
import { renderProjectUI, renderProjectHeader } from "./projects.js";

const todos = [];
const home = [];
const work = [];
const miscellaneous = [];

class Todos {
	constructor(title, description, dueDate, priority, project, id) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.project = project;
		this.id = id;
	}

	getTitle() {
		return this.title;
	}

	setTitle(title) {
		this.title = title;
	}

	getDescription() {
		return this.description;
	}

	setDescription(description) {
		this.description = description;
	}

	getDueDate() {
		return this.dueDate;
	}

	setDueDate(dueDate) {
		this.dueDate = dueDate;
	}

	getPriority() {
		return this.priority;
	}

	setPriority(priority) {
		this.priority = priority;
	}

	getId() {
		return this.id;
	}

	getProject() {
		return this.project;
	}

	setProject(project) {
		this.project = project;
	}

	setId(id) {
		this.id = id;
	}

	deleteTodos(id) {

	}
}

function populateTodo(e) {
	e.preventDefault();
	//get form values
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
	const priority = document.getElementById("priority").value;
	// console.log(priority);
	const project = document.getElementById("project").value;
    // const submitBtn = document.getElementById("submit");
    // const form = document.getElementById("form");
    const id = Math.random();
    // console.log(title, description, date, priority, project);
	const newTodo = new Todos(
		title,
		description,
		date,
		priority,
		project,
		id
    );

    //add todos
	todos.push(newTodo);
	toggleModal();
    //home
    // if (project === "home") {
    //     home.push(newTodo);
    // }
    // //work
    // else if (project === "work") {
    //     work.push(newTodo);
    // }
    // else {
    //     miscellaneous.push(newTodo);
    // }

    // const container = document.querySelector(".container");
    // container.appendChild(
	// renderTodo(title, description, date, priority, project, id));
}

function sortTodosByProject(e) {
	console.log(e.currentTarget.id);
	const sortedByProject = todos.filter(todo => {
		for (const prop in todo) {
			if (todo[prop] === e.currentTarget.id) {
				return todo;
			}
		}
        
    });
    //destructure array into parameter or render todo
	renderProjectHeader(e.currentTarget.id);
	renderProjectUI(sortedByProject);
	// return sortedByProject;
    //call renderTodo
}

function getTodoById(id) {
	const match = [];
	todos.forEach(todo => {
		console.log(todo.getId(), Number(id), todo.getId() === Number(id));
		if (todo.getId() === Number(id)) {
			console.log("matching to is: ", todo);
			match.push(todo);
		}
	});
	return match[0];
}

function updateTodo(title, description, date, priority, project, id) {
	todos.forEach(todo => {
		if (todo.getId() === Number(id)) {
			todo.setTitle(title);
			todo.setDescription(description);
			todo.setDueDate(date);
			todo.setPriority(priority);
			todo.setProject(project);
			console.log("new to: ", todo);
		}
	});
}

export {populateTodo, sortTodosByProject, getTodoById, updateTodo };