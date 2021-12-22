import { toggleModal, getTodaysDate } from "./modal.js";
import { renderProjectUI, renderProjectHeader } from "./projects.js";
import { renderTasksUI, renderTasksHeader } from "./tasks.js";
import { renderTodo } from "./renderTodo.js";

const todos = [];

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
}

function populateTodo(e) {
	e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
	const priority = document.getElementById("priority").value;
	const project = document.getElementById("project").value;
    const id = Math.random();
	const newTodo = new Todos(
		title,
		description,
		date,
		priority,
		project,
		id
    );

	todos.push(newTodo);
	toggleModal();
}

function sortTodosByProject(e) {
	const sortedByProject = todos.filter(todo => {
		for (const prop in todo) {
			if (todo[prop] === e.currentTarget.id) {
				return todo;
			}
		}
        
    });
	renderProjectHeader(e.currentTarget.id);
	renderProjectUI(sortedByProject);
}

function sortTodosByTask(e) {
	let sortedTodos = [];
	if (e.currentTarget.id === "today") {
		sortedTodos = todos.filter((todo) => {
			return todo.dueDate === getTodaysDate();
		});
	}
	else if (e.currentTarget.id === "overdue") {
		sortedTodos = todos.filter(todo => {
			return todo.dueDate < getTodaysDate();
		});
	}
	else if (e.currentTarget.id === "upcoming") {
		sortedTodos = todos.filter(todo => {
			return todo.dueDate > getTodaysDate();
		});
	}
	renderTasksHeader(e.currentTarget.id);
  	renderTasksUI(sortedTodos);
}

function showAllTasks(e) {
	renderTasksHeader(e.currentTarget.id);
  	renderTasksUI(todos);
}

function getTodoById(id) {
	const match = [];
	todos.forEach(todo => {
		if (todo.getId() === Number(id)) {
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
		}
	});
}

function deleteTodo(id) {
	todos.forEach((todo, index) => {
		if (todo.getId() === Number(id)) {
			todos.splice(index, 1);
		}
	});
}

export {populateTodo, sortTodosByProject, getTodoById, updateTodo, deleteTodo, showAllTasks, sortTodosByTask };