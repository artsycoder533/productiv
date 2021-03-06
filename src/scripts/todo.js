import { toggleModal, getTodaysDate } from "./modal.js";
import { renderProjectUI, renderProjectHeader } from "./projects.js";
import { renderTasksUI, renderTasksHeader } from "./tasks.js";
import { resetInboxCount, showInbox, updateInboxCount } from "./inbox.js";
import {
  dashboard,
  getUsername,
  getLoginStatus,
  setLoginStatus,
  getStatus,
  changeStatus,
} from "./auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { checkScreenSize } from "./header.js";
import { getQuotes } from "./quotes.js";
import { addDashboardEvents } from "./dashboard.js";

let inbox = [];

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
let todos = [];

async function getAllData(username) {
  const q = query(collection(db, `${username}tasks`), orderBy("dueDate"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    inbox = [];
    todos = [];
    resetInboxCount();
    querySnapshot.forEach((doc) => {
      //empty inbox and todos
      if (
        doc.data().dueDate <= getTodaysDate() &&
        doc.data().status === "unread"
      ) {
        inbox.push(doc.data());
        updateInboxCount("add");
      }
      todos.push(doc.data());
    });
    if (getLoginStatus() === true) {
      dashboard.click();
      addDashboardEvents();
      getQuotes();
      setLoginStatus(false);
    }
  });
}

//add to firestore auto id
async function addDocument(
  title,
  description,
  dueDate,
  priority,
  project,
  id,
  status,
  completed
) {
  const ref = collection(db, `${getUsername()}tasks`);
  const docref = await addDoc(ref, {
    title: title,
    desciption: description,
    dueDate: dueDate,
    priority: priority,
    project: project,
    id: id,
    status: status,
    completed: completed,
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
  status,
  completed
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
    completed: completed,
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
    completed.value = docSnap.data().completed;
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
  status,
  completed
) {
  const ref = doc(db, `${getUsername()}tasks`, String(id));

  await updateDoc(ref, {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    project: project,
    id: id,
    status: status,
    completed: completed,
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
  constructor(
    title,
    description,
    dueDate,
    priority,
    project,
    id,
    status,
    completed
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.id = id;
    this.status = status;
    this.completed = completed;
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

function populateTodo() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  const priority = document.getElementById("priority").value;
  const project = document.getElementById("project").value;
  const id = Math.random();
  const status = "unread";
  const completed = false;
  const newTodo = new Todos(
    title,
    description,
    date,
    priority,
    project,
    id,
    status,
    completed
  );

  todos.push(newTodo);
  addDocumentCustomID(
    title,
    description,
    date,
    priority,
    project,
    id,
    status,
    completed
  );
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
  const display = document.querySelector(".header__display");
  display.textContent = "Projects";
  checkScreenSize();
  const sortedByProject = todos.filter((todo) => {
    for (const prop in todo) {
      if (todo[prop] === e.currentTarget.id) {
        prop === "work"
          ? changeStatus("work")
          : prop === "home"
          ? changeStatus("home")
          : changeStatus("misc");
        return todo;
      }
    }
  });
  renderProjectHeader(e.currentTarget.id);
  renderProjectUI(sortedByProject);
}

function sortTodosByTask(e) {
  const display = document.querySelector(".header__display");
  display.textContent = "Tasks";
  checkScreenSize();
  let sortedTodos = [];
  if (e.currentTarget.id === "today") {
    sortedTodos = todos.filter((todo) => {
      changeStatus("today");
      return todo.dueDate === getTodaysDate();
    });
  } else if (e.currentTarget.id === "overdue") {
    sortedTodos = todos.filter((todo) => {
      changeStatus("overdue");
      return todo.dueDate < getTodaysDate();
    });
  } else if (e.currentTarget.id === "upcoming") {
    sortedTodos = todos.filter((todo) => {
      changeStatus("upcoming");
      return todo.dueDate > getTodaysDate();
    });
  }
  renderTasksHeader(getStatus());
  renderTasksUI(sortedTodos);
}

function showAllTasks(e) {
  const display = document.querySelector(".header__display");
  display.textContent = "Tasks";
  getAllData(getUsername());
  checkScreenSize();
  renderTasksHeader(e.currentTarget.id);
  renderTasksUI(todos);
  changeStatus("all");
}

function getTodoById(id) {
  const match = [];
  todos.forEach((todo) => {
    if (todo.id == id) {
      match.push(todo);
    }
  });
  return match[0];
}

function updateTodo(
  title,
  description,
  dueDate,
  priority,
  project,
  id,
  status,
  completed
) {
  todos.forEach((todo) => {
    if (todo.id === id) {
      todo.title = title;
      todo.description = description;
      todo.dueDate = dueDate;
      todo.priority = priority;
      todo.project = project;
      todo.status = status;
      todo.completed = completed;
    }
  });
  updateDocument(
    title,
    description,
    dueDate,
    priority,
    project,
    id,
    status,
    completed
  );
}

function deleteTodo(id) {
  todos.forEach((todo, index) => {
    if (String(todo.id) === id) {
      todos.splice(index, 1);
      deleteDocument(String(id));
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
  checkScreenSize();
  showInbox(inbox);
  changeStatus("inbox");
}

//get # tasks
function getNumTasks() {
  getAllData(getUsername());
  let count;
  todos.length > 0 ? (count = todos.length) : (count = 0);
  return count;
}

//get unread tasks
function getUpcomingTasks() {
  getAllData(getUsername());
  let count;
  const unread = todos.filter((todo) => {
    return todo.dueDate > getTodaysDate();
  });
  unread.length > 0 ? (count = unread.length) : (count = 0);
  return count;
}

//get overdue tasks
function getOverdueTasks() {
  getAllData(getUsername());
  let count;
  const overdue = todos.filter((todo) => {
    return todo.dueDate < getTodaysDate();
  });
  overdue.length > 0 ? (count = overdue.length) : (count = 0);
  return count;
}
//get due today tasks
function getTodaysNumTasks() {
  getAllData(getUsername());
  let count;
  const today = todos.filter((todo) => {
    return todo.dueDate === getTodaysDate();
  });
  today.length > 0 ? (count = today.length) : (count = 0);
  return count;
}

function getDashboardCounts() {
  let dashboardCounts = [];
  dashboardCounts[0] = getNumTasks();
  dashboardCounts[1] = getUpcomingTasks();
  dashboardCounts[2] = getOverdueTasks();
  dashboardCounts[3] = getTodaysNumTasks();
  return dashboardCounts;
}

export {
  populateTodo,
  sortTodosByProject,
  getTodoById,
  updateTodo,
  deleteTodo,
  showAllTasks,
  sortTodosByTask,
  getInbox,
  deleteInboxMessage,
  getADocument,
  updateDocument,
  getAllData,
  getNumTasks,
  getTodaysNumTasks,
  getUpcomingTasks,
  getOverdueTasks,
  getDashboardCounts,
};
