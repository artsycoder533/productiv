import { toggleModal, getTodaysDate } from "./modal.js";
import { renderProjectUI, renderProjectHeader } from "./projects.js";
import { renderTasksUI, renderTasksHeader } from "./tasks.js";
import { renderTodo } from "./renderTodo.js";
import { showInbox, updateInboxCount } from "./inbox.js";

const todos = [];
const inbox = [];

class Todos {
	constructor(title, description, dueDate, priority, project, id, status) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.project = project;
		this.id = id;
		this.status = status;
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

	getStatus() {
		return this.status;
	}

	setStatus(status) {
		this.status = status;
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
	const status = "unread";
	const newTodo = new Todos(
		title,
		description,
		date,
		priority,
		project,
		id,
		status
    );

	todos.push(newTodo);
	if (date === getTodaysDate()) {
		inbox.push(newTodo);
		updateInboxCount("add");
	}
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

function deleteInboxMessage(id) {
	inbox.forEach((todo, index) => {
    if (todo.getId() === Number(id)) {
      inbox.splice(index, 1);
    }
  });
}

function getInbox() {
	showInbox(inbox);
}

export {populateTodo, sortTodosByProject, getTodoById, updateTodo, deleteTodo, showAllTasks, sortTodosByTask, getInbox, deleteInboxMessage};