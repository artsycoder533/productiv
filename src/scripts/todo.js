import { toggleModal, getTodaysDate } from "./modal.js";
import { renderProjectUI, renderProjectHeader } from "./projects.js";
import { renderTasksUI, renderTasksHeader } from "./tasks.js";
import { renderTodo } from "./renderTodo.js";
import { showInbox, updateInboxCount } from "./inbox.js";
import { getUsername } from "./auth.js";
import { getFirestore, doc, getDoc, setDoc, collection, updateDoc, deleteDoc, addDoc, getDocs, onSnapshot} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { closeSidebar } from "./header.js";


const inbox = [];

const firebaseConfig = {
  apiKey: "AIzaSyBPwH-PsSrwzFjr6v8LUMwbZkbFs8x7Uac",
  authDomain: "productiv-932c9.firebaseapp.com",
  projectId: "productiv-932c9",
  storageBucket: "productiv-932c9.appspot.com",
  messagingSenderId: "232110405285",
  appId: "1:232110405285:web:d37d1437bc93f077c13f4c",
  measurementId: "G-CR193YXW7R",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const todos = [];


async function getAllData(username) {
	console.log("get all data called");
	console.log(username);
	const querySnapshot = await getDocs(collection(db, `${username}tasks`));

	querySnapshot.forEach(doc => {
		console.log(doc.data());
		if (doc.data().dueDate <= getTodaysDate() && doc.data().status === "unread") {
			inbox.push(doc.data());
			updateInboxCount("add");
		}
		todos.push(doc.data())
	})
}



//add to firestore auto id
async function addDocument(
  title,
  description,
  dueDate,
  priority,
  project,
  id,
  status
) {
  const ref = collection(db, `${getUsername()}tasks`);
	const docref = await addDoc(ref, {
		title: title,
		desciption: description,
		dueDate: dueDate,
		priority: priority,
		project: project,
		id: id,
		status: status
  });
}

//add to firestore custom id
async function addDocumentCustomID(
  title,
  description,
  dueDate,
  priority,
  project,
  id,
  status
) {
  const ref = doc(db, `${getUsername()}tasks`, String(id));
  await setDoc(ref, {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    project: project,
    id: id,
    status: status,
  });
}

//get a document
async function getADocument() {
	const ref = doc(db, `${getUsername()}tasks`, id);
	const docSnap = await getDoc(ref);
	if (docSnap.exists()) {
		title.value = docSnap.data().title;
		description.value = docSnap.data().description;
		dueDate.value = docSnap.data().dueDate;
		priority.value = docSnap.data().priority;
		project.value = docSnap.data().project;
		id.value = docSnap.data().id;
		
	}
}

//update a document
async function updateDocument(
  title,
  description,
  dueDate,
  priority,
  project,
  id,
  status
) {
  const ref = doc(db, `${getUsername()}tasks`, id);
  await updateDoc(ref, {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    project: project,
    id: id,
    status: status,
  });
}

//delete a document
async function deleteDocument(id) {
	const ref = doc(db, `${getUsername()}tasks`, id);
	const docSnap = await getDoc(ref);

	if (docSnap.exists()) {
		deleteDoc(ref);
	}
}

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
	addDocumentCustomID(title, description, date, priority, project, id, status);
	if (date === getTodaysDate()) {
		inbox.unshift(newTodo);
		updateInboxCount("add");
	}
	toggleModal();
	const mainTitle = document.querySelector(".header__display");
	if (mainTitle.textContent === "Inbox") {
		showInbox(inbox);
	}
}


function sortTodosByProject(e) {
	closeSidebar();
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
	closeSidebar();
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
	closeSidebar();
	renderTasksHeader(e.currentTarget.id);
  	renderTasksUI(todos);
}

function getTodoById(id) {
	const match = [];
	todos.forEach(todo => {
		console.log(typeof todo.id, typeof id);
		if (todo.id == id) {
			
			match.push(todo);
		}
	});
	return match[0];
}

function updateTodo(title, description, dueDate, priority, project, id, status) {
	todos.forEach(todo => {
		console.log(todo.id, id);
		if (todo.id === id) {
			// todo.setTitle(title);
			// todo.setDescription(description);
			// todo.setDueDate(dueDate);
			// todo.setPriority(priority);
			// todo.setProject(project);
			// todo.setStatus(status);
			todo.title = title;
			todo.description = description;
			todo.dueDate = dueDate;
			todo.priority = priority;
			todo.project = project;
			todo.status = status;
		}
		console.log(todo);
	});
	console.log(title, description, dueDate, priority, project, id, status);
	console.log(todos);
	updateDocument(title, description, dueDate, priority, project, id, status);
	//getAllData();
}

function deleteTodo(id) {
	todos.forEach((todo, index) => {
		console.log(todo);
		if (todo.id === id) {
			todos.splice(index, 1);
			console.log("here");
			deleteDocument(id);
		}
	});
	
}

function deleteInboxMessage(id) {
	inbox.forEach((todo, index) => {
    if (todo.id === id) {
      inbox.splice(index, 1);
    }
  });
}

function getInbox() {
	closeSidebar();
	showInbox(inbox);
}

export {populateTodo, sortTodosByProject, getTodoById, updateTodo, deleteTodo, showAllTasks, sortTodosByTask, getInbox, deleteInboxMessage, getADocument, updateDocument, getAllData};