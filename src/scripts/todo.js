import { renderTodo } from "./renderTodo.js";

const todos = [];
const projects = ["Default", "Work", "Home"];

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

	setId(id) {
		this.id = id;
	}

	deleteTodos(id) {}
}

function populateTodo(e) {
	e.preventDefault();
	//get form values
	const form = document.querySelector(".modal__form");
	const id = Math.random();
	const newTodo = new Todos(
		title.value,
		description.value,
		date.value,
		priority.value,
		project.value,
		id
	);
    todos.push(newTodo);
    renderTodo(
			title.value,
			description.value,
			date.value,
			priority.value,
			project.value,
	);
	//form.reset();
}

export {populateTodo };