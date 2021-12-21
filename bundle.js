/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/createElement.js":
/*!**************************************!*\
  !*** ./src/scripts/createElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElementWithClass": () => (/* binding */ createElementWithClass),
/* harmony export */   "createTextElementWithClass": () => (/* binding */ createTextElementWithClass),
/* harmony export */   "createImageWithId": () => (/* binding */ createImageWithId),
/* harmony export */   "createTextElementWithId": () => (/* binding */ createTextElementWithId),
/* harmony export */   "createElementWithAttribute": () => (/* binding */ createElementWithAttribute),
/* harmony export */   "createLabelElement": () => (/* binding */ createLabelElement),
/* harmony export */   "createInputElement": () => (/* binding */ createInputElement),
/* harmony export */   "createTextArea": () => (/* binding */ createTextArea),
/* harmony export */   "createElementWithTwoAttributes": () => (/* binding */ createElementWithTwoAttributes),
/* harmony export */   "createOption": () => (/* binding */ createOption)
/* harmony export */ });

function createElementWithClass(type, className) {
    const el = document.createElement(type);
    el.classList.add(className);
    return el;
}

function createTextElementWithClass(type, className, text) {
    const el = document.createElement(type);
    el.classList.add(className);
    el.textContent = text;
    return el;
}

function createImageWithId(type, src, alt, id) {
    const el = new Image();
    el.src = src;
    el.setAttribute("alt", alt);
    el.setAttribute("id", id);
    return el;
}

function createTextElementWithId(type, className, text, id) {
    const el = document.createElement(type);
    el.classList.add(className);
    el.textContent = text;
    el.setAttribute("id", id);
    return el;
}

function createElementWithAttribute(type, className, attr, attrName) {
    const el = document.createElement(type);
    el.className = className;
    el.setAttribute(attr, attrName);
    return el;
}

function createLabelElement(type, attr, text) {
    const el = document.createElement(type);
    el.setAttribute("for", attr);
    el.textContent = text;
    return el;
}

function createInputElement(type, attr, name, id) {
    const el = document.createElement(type);
    el.setAttribute("type", attr);
    el.setAttribute("name", name);
    el.setAttribute("id", id);
    return el;
}

function createTextArea(type, name, id, col, row) {
    const el = document.createElement(type);
    el.setAttribute("name", name);
    el.setAttribute("id", id);
    el.setAttribute("cols", col);
    el.setAttribute("rows", row);
    return el;
}

function createElementWithTwoAttributes(type, attr1, attr1Name, attr2, attr2Name){
    const el = document.createElement(type);
    el.setAttribute(attr1, attr1Name);
    el.setAttribute(attr2, attr2Name);
    return el;
}

function createOption(value, text) {
    const el = document.createElement("option");
    el.setAttribute("value", value);
    el.textContent = text;
    return el;
}






/***/ }),

/***/ "./src/scripts/header.js":
/*!*******************************!*\
  !*** ./src/scripts/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addHeaderEvents": () => (/* binding */ addHeaderEvents)
/* harmony export */ });
/* harmony import */ var _assets_user_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/user.png */ "./src/assets/user.png");


function addHeaderEvents() {
	const hamburgerBtn = document.getElementById("hamburger");
	const profileContainer = document.querySelector(".header__image");
    const upload = document.getElementById("imgUpload");
    addProfilePlaceholder(profileContainer);

	hamburgerBtn.addEventListener("click", closeSidebar);
	upload.addEventListener("change", readUrl);
	profileContainer.addEventListener("click", uploadPic);
}

function addProfilePlaceholder(profileContainer) {
    profileContainer.children[0].src = _assets_user_png__WEBPACK_IMPORTED_MODULE_0__;
}

function closeSidebar() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.classList.toggle("hide");
}

function uploadPic() {
	const headerUpload = document.querySelector(".header__upload");
	headerUpload.classList.toggle("visible");
}

function readUrl() {
	const profilePic = document.getElementById("profile");
	const profileContainer = document.querySelector(".header__image");
	if (this.files) {
		const reader = new FileReader();
		reader.readAsDataURL(this.files[0]);
		reader.addEventListener("load", () => {
			profilePic.src = reader.result;
		});
	}
	profileContainer.click();
}




/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addButtonEvents": () => (/* binding */ addButtonEvents),
/* harmony export */   "toggleModal": () => (/* binding */ toggleModal)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/scripts/todo.js");


function addButtonEvents() {
    const addBtn = document.getElementById("add");
    const createBtn = document.getElementById("create");
    addBtn.addEventListener("click", toggleModal);
    const closeBtn = document.getElementById("close");
    const cancelBtn = document.getElementById("cancel");
    cancelBtn.addEventListener("click", toggleModal);
    closeBtn.addEventListener("click", toggleModal);
    createBtn.addEventListener("click", (e)=>{
        (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.populateTodo)(e);
    });
}

function toggleModal() {
    const modal = document.querySelector(".modal");
    const form = document.querySelector(".modal__form");
    modal.classList.toggle("showModal");
    form.reset();
}



/***/ }),

/***/ "./src/scripts/projects.js":
/*!*********************************!*\
  !*** ./src/scripts/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjectUI": () => (/* binding */ renderProjectUI),
/* harmony export */   "renderProjectHeader": () => (/* binding */ renderProjectHeader)
/* harmony export */ });
/* harmony import */ var _renderTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTodo.js */ "./src/scripts/renderTodo.js");
/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement.js */ "./src/scripts/createElement.js");



const container = document.querySelector(".container");


function renderProjectHeader(projectId) {
    clearProjectsUI();
    const projectTitle = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__.createElementWithClass)("h2", "project__title");
    projectTitle.textContent = projectId;
    const container = document.querySelector(".container");
    const todos = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__.createElementWithClass)("section", "todos");
    container.appendChild(projectTitle);
    container.appendChild(todos);
}


function renderProjectUI(projects) {
    projects.map(project => {
        const todos = document.querySelector(".todos");
        todos.appendChild(
					(0,_renderTodo_js__WEBPACK_IMPORTED_MODULE_0__.renderTodo)(
						project.title,
						project.description,
						project.dueDate,
						project.priority,
						project.project,
						project.id
					)
        );
        container.appendChild(todos);
    });
}

function clearProjectsUI() {
    const children = [...container.children];
    children.forEach(child => {
        child.remove();
    });
}



/***/ }),

/***/ "./src/scripts/renderTodo.js":
/*!***********************************!*\
  !*** ./src/scripts/renderTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTodo": () => (/* binding */ renderTodo)
/* harmony export */ });
/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ "./src/scripts/createElement.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ "./src/scripts/modal.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/scripts/todo.js");




const todos = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("section", "todos");

function renderTodo(title, description, date, priority, project, id) {
    const todo__container = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("div", "todo__container");
    todo__container.setAttribute("data-id", id);
    const todo = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("article", "todo");
    const todo__date = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("div", "todo__date");
    const date1 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createTextElementWithClass)("small", "date", date);
    todo__date.appendChild(date1);
    todo.appendChild(todo__date);

    const todo__content = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("div", "todo__content");
    const todo__title = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createTextElementWithClass)("div", "todo__title", title);
    const todo__priority = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("div", "todo__priority");

    const priority1 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createTextElementWithClass)("small", "priority", priority);
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
    const todo__buttons = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("div", "todo__buttons");
    const todo__more = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttribute)("button", "todo__more", "id", "more");
    const moreBtn = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("i", "fas");
    moreBtn.classList.add("fa-caret-down");
    moreBtn.addEventListener("click", showDetails);
    todo__more.appendChild(moreBtn);
    todo__buttons.appendChild(todo__more);
    const todo__edit = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttribute)("button", "todo__edit", "id", "edit");
    const editBtn = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("i", "fas");
    editBtn.classList.add("fa-edit");
    editBtn.addEventListener("click", editTodo);
    todo__edit.appendChild(editBtn);
    todo__buttons.appendChild(todo__edit);
    const todo__delete = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttribute)("button", "todo__delete", "id", "delete");
    const deleteBtn = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("i", "fas");
    deleteBtn.classList.add("fa-trash-alt");
    deleteBtn.addEventListener("click", deleteTodoUI);
    todo__delete.appendChild(deleteBtn);
    todo__buttons.appendChild(todo__delete);
    todo__content.append(todo__buttons);
    todo.appendChild(todo__content);

    const todo__project = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createTextElementWithClass)("div", "todo__project", project);
    todo.appendChild(todo__project);
    todo__container.appendChild(todo);
    

    // description
    const todo__details = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("div", "todo__details");
    const todo__description = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("p", "description");
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
    (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.deleteTodo)(todo.dataset.id);
}

function editTodo(e) {
	const form = document.getElementById("form");
	const todo2 = (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.getTodoById)(
		e.currentTarget.parentElement.parentElement.parentElement.parentElement
			.parentElement.dataset.id
    );
    const modal = document.querySelector(".modal");
    (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.toggleModal)();
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
            (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.toggleModal)();
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
            (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.updateTodo)(title, description, date, priority, project, todo2.getId());
            (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.toggleModal)();
            work.click();
        }
        if (projectType === "home") {
            (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.updateTodo)(title, description, date, priority, project, todo2.getId());
            (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.toggleModal)();
            home.click();
        }
        if (projectType === "miscellaneous") {
            (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.updateTodo)(title, description, date, priority, project, todo2.getId());
            (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.toggleModal)();
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

    (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.updateTodo)(title, description, date, priority, project, todo.getId());
    
}



/***/ }),

/***/ "./src/scripts/sidebar.js":
/*!********************************!*\
  !*** ./src/scripts/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addSidebarEvents": () => (/* binding */ addSidebarEvents)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/scripts/todo.js");



const sidebarDivs = [...document.querySelectorAll(".sidebar__link")];
const workLink = document.getElementById("work");
const homeLink = document.getElementById("home");
const miscLink = document.getElementById("miscellaneous");

function addSidebarEvents() {
	const allTasks = document.getElementById("all");
	const today = document.getElementById("due");
	const upcoming = document.getElementById("overdue");
	const overdue = document.getElementById("overdue");

	allTasks.addEventListener("click", _todo_js__WEBPACK_IMPORTED_MODULE_0__.showAllTasks);
	today.addEventListener("click", sortTodosByTask);
	upcoming.addEventListener("click", sortTodosByTask);
	overdue.addEventListener("click", sortTodosByTask);

	workLink.addEventListener("click", _todo_js__WEBPACK_IMPORTED_MODULE_0__.sortTodosByProject);
	homeLink.addEventListener("click", _todo_js__WEBPACK_IMPORTED_MODULE_0__.sortTodosByProject);
	miscLink.addEventListener("click", _todo_js__WEBPACK_IMPORTED_MODULE_0__.sortTodosByProject);

	sidebarDivs.map((div) => {
    div.addEventListener("click", (e) => {
        openSubMenu(e);
	});
});
}

function openSubMenu(e) {
    const display = document.querySelector(".header__display");
	display.textContent = e.currentTarget.dataset.id;
	removeActiveLinks(e);
	closeSubMenus();
	if (e.currentTarget.nextElementSibling) {
		e.currentTarget.classList.toggle("active");
		e.currentTarget.nextElementSibling.classList.toggle("showSub");
	} else {
		e.currentTarget.classList.add("active");
	}
}

function removeActiveLinks() {
	sidebarDivs.map((div) => {
		div.classList.remove("active");
	});
}

function closeSubMenus() {
	const submenus = [...document.querySelectorAll(".sidebar__sublinks")];
	submenus.map((menu) => {
		if (menu.classList.contains("showSub")) {
			return;
		} else {
			menu.classList.remove("showSub");
		}
	});
}




/***/ }),

/***/ "./src/scripts/todo.js":
/*!*****************************!*\
  !*** ./src/scripts/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateTodo": () => (/* binding */ populateTodo),
/* harmony export */   "sortTodosByProject": () => (/* binding */ sortTodosByProject),
/* harmony export */   "getTodoById": () => (/* binding */ getTodoById),
/* harmony export */   "updateTodo": () => (/* binding */ updateTodo),
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
/* harmony export */   "showAllTasks": () => (/* binding */ showAllTasks)
/* harmony export */ });
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ "./src/scripts/modal.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/scripts/projects.js");



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
	(0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.toggleModal)();
}

function sortTodosByProject(e) {
	const sortedByProject = todos.filter(todo => {
		for (const prop in todo) {
			if (todo[prop] === e.currentTarget.id) {
				return todo;
			}
		}
        
    });
	(0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectHeader)(e.currentTarget.id);
	(0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectUI)(sortedByProject);
}

function showAllTasks(e) {
	//call render todo
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



/***/ }),

/***/ "./src/assets/user.png":
/*!*****************************!*\
  !*** ./src/assets/user.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d4b16957e06b7a61672.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _scripts_sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/sidebar.js */ "./src/scripts/sidebar.js");
/* harmony import */ var _scripts_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/header.js */ "./src/scripts/header.js");
/* harmony import */ var _scripts_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/modal.js */ "./src/scripts/modal.js");








window.addEventListener("DOMContentLoaded", () => {
    (0,_scripts_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.addSidebarEvents)();
    (0,_scripts_header_js__WEBPACK_IMPORTED_MODULE_2__.addHeaderEvents)();
    // const modal = renderModal();
    // document.body.appendChild(modal);
    (0,_scripts_modal_js__WEBPACK_IMPORTED_MODULE_3__.addButtonEvents)();
});





//render main content container

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUM2QjtBQUMyQjtBQUNGO0FBQ0w7QUFDSTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUFnQjtBQUNwQixJQUFJLG1FQUFlO0FBQ25CO0FBQ0E7QUFDQSxJQUFJLGtFQUFlO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aXYvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/YzA2MyIsIndlYnBhY2s6Ly9wcm9kdWN0aXYvLi9zcmMvc2NyaXB0cy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdi8uL3NyYy9zY3JpcHRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9wcm9kdWN0aXYvLi9zcmMvc2NyaXB0cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9wcm9kdWN0aXYvLi9zcmMvc2NyaXB0cy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9wcm9kdWN0aXYvLi9zcmMvc2NyaXB0cy9yZW5kZXJUb2RvLmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdi8uL3NyYy9zY3JpcHRzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vcHJvZHVjdGl2Ly4vc3JjL3NjcmlwdHMvdG9kby5qcyIsIndlYnBhY2s6Ly9wcm9kdWN0aXYvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvZHVjdGl2L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9kdWN0aXYvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9kdWN0aXYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9kdWN0aXYvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9kdWN0aXYvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvZHVjdGl2Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aENsYXNzKHR5cGUsIGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgcmV0dXJuIGVsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUZXh0RWxlbWVudFdpdGhDbGFzcyh0eXBlLCBjbGFzc05hbWUsIHRleHQpIHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIGVsLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHJldHVybiBlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW1hZ2VXaXRoSWQodHlwZSwgc3JjLCBhbHQsIGlkKSB7XHJcbiAgICBjb25zdCBlbCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgZWwuc3JjID0gc3JjO1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKFwiYWx0XCIsIGFsdCk7XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XHJcbiAgICByZXR1cm4gZWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRleHRFbGVtZW50V2l0aElkKHR5cGUsIGNsYXNzTmFtZSwgdGV4dCwgaWQpIHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIGVsLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIGVsLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcclxuICAgIHJldHVybiBlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhBdHRyaWJ1dGUodHlwZSwgY2xhc3NOYW1lLCBhdHRyLCBhdHRyTmFtZSkge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJOYW1lKTtcclxuICAgIHJldHVybiBlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGFiZWxFbGVtZW50KHR5cGUsIGF0dHIsIHRleHQpIHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIGVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBhdHRyKTtcclxuICAgIGVsLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHJldHVybiBlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW5wdXRFbGVtZW50KHR5cGUsIGF0dHIsIG5hbWUsIGlkKSB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGF0dHIpO1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcclxuICAgIGVsLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcclxuICAgIHJldHVybiBlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGV4dEFyZWEodHlwZSwgbmFtZSwgaWQsIGNvbCwgcm93KSB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBjb2wpO1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKFwicm93c1wiLCByb3cpO1xyXG4gICAgcmV0dXJuIGVsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFR3b0F0dHJpYnV0ZXModHlwZSwgYXR0cjEsIGF0dHIxTmFtZSwgYXR0cjIsIGF0dHIyTmFtZSl7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0cjEsIGF0dHIxTmFtZSk7XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0cjIsIGF0dHIyTmFtZSk7XHJcbiAgICByZXR1cm4gZWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbih2YWx1ZSwgdGV4dCkge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdmFsdWUpO1xyXG4gICAgZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIGVsO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MsIGNyZWF0ZVRleHRFbGVtZW50V2l0aENsYXNzLCBjcmVhdGVJbWFnZVdpdGhJZCwgY3JlYXRlVGV4dEVsZW1lbnRXaXRoSWQsIGNyZWF0ZUVsZW1lbnRXaXRoQXR0cmlidXRlLCBjcmVhdGVMYWJlbEVsZW1lbnQsIGNyZWF0ZUlucHV0RWxlbWVudCwgY3JlYXRlVGV4dEFyZWEsIGNyZWF0ZUVsZW1lbnRXaXRoVHdvQXR0cmlidXRlcywgY3JlYXRlT3B0aW9uIH07XHJcbiIsImltcG9ydCBwcm9maWxlIGZyb20gXCIuLi9hc3NldHMvdXNlci5wbmdcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZEhlYWRlckV2ZW50cygpIHtcclxuXHRjb25zdCBoYW1idXJnZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbWJ1cmdlclwiKTtcclxuXHRjb25zdCBwcm9maWxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2ltYWdlXCIpO1xyXG4gICAgY29uc3QgdXBsb2FkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdVcGxvYWRcIik7XHJcbiAgICBhZGRQcm9maWxlUGxhY2Vob2xkZXIocHJvZmlsZUNvbnRhaW5lcik7XHJcblxyXG5cdGhhbWJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VTaWRlYmFyKTtcclxuXHR1cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCByZWFkVXJsKTtcclxuXHRwcm9maWxlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGxvYWRQaWMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9maWxlUGxhY2Vob2xkZXIocHJvZmlsZUNvbnRhaW5lcikge1xyXG4gICAgcHJvZmlsZUNvbnRhaW5lci5jaGlsZHJlblswXS5zcmMgPSBwcm9maWxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZVNpZGViYXIoKSB7XHJcblx0Y29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuXHRzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRQaWMoKSB7XHJcblx0Y29uc3QgaGVhZGVyVXBsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX3VwbG9hZFwiKTtcclxuXHRoZWFkZXJVcGxvYWQuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRVcmwoKSB7XHJcblx0Y29uc3QgcHJvZmlsZVBpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZVwiKTtcclxuXHRjb25zdCBwcm9maWxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2ltYWdlXCIpO1xyXG5cdGlmICh0aGlzLmZpbGVzKSB7XHJcblx0XHRjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwodGhpcy5maWxlc1swXSk7XHJcblx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG5cdFx0XHRwcm9maWxlUGljLnNyYyA9IHJlYWRlci5yZXN1bHQ7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cHJvZmlsZUNvbnRhaW5lci5jbGljaygpO1xyXG59XHJcblxyXG5leHBvcnQgeyBhZGRIZWFkZXJFdmVudHMgfTtcclxuIiwiaW1wb3J0IHtwb3B1bGF0ZVRvZG99IGZyb20gXCIuL3RvZG8uanNcIlxyXG5cclxuZnVuY3Rpb24gYWRkQnV0dG9uRXZlbnRzKCkge1xyXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRcIik7XHJcbiAgICBjb25zdCBjcmVhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVwiKTtcclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTW9kYWwpO1xyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlXCIpO1xyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxcIik7XHJcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU1vZGFsKTtcclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVNb2RhbCk7XHJcbiAgICBjcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xyXG4gICAgICAgIHBvcHVsYXRlVG9kbyhlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVNb2RhbCgpIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dNb2RhbFwiKTtcclxuICAgIGZvcm0ucmVzZXQoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgYWRkQnV0dG9uRXZlbnRzLCB0b2dnbGVNb2RhbCB9OyIsImltcG9ydCB7IHJlbmRlclRvZG8gfSBmcm9tIFwiLi9yZW5kZXJUb2RvLmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50LmpzXCI7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0SGVhZGVyKHByb2plY3RJZCkge1xyXG4gICAgY2xlYXJQcm9qZWN0c1VJKCk7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiaDJcIiwgXCJwcm9qZWN0X190aXRsZVwiKTtcclxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RJZDtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgdG9kb3MgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwic2VjdGlvblwiLCBcInRvZG9zXCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb3MpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFVJKHByb2plY3RzKSB7XHJcbiAgICBwcm9qZWN0cy5tYXAocHJvamVjdCA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xyXG4gICAgICAgIHRvZG9zLmFwcGVuZENoaWxkKFxyXG5cdFx0XHRcdFx0cmVuZGVyVG9kbyhcclxuXHRcdFx0XHRcdFx0cHJvamVjdC50aXRsZSxcclxuXHRcdFx0XHRcdFx0cHJvamVjdC5kZXNjcmlwdGlvbixcclxuXHRcdFx0XHRcdFx0cHJvamVjdC5kdWVEYXRlLFxyXG5cdFx0XHRcdFx0XHRwcm9qZWN0LnByaW9yaXR5LFxyXG5cdFx0XHRcdFx0XHRwcm9qZWN0LnByb2plY3QsXHJcblx0XHRcdFx0XHRcdHByb2plY3QuaWRcclxuXHRcdFx0XHRcdClcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2Rvcyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0c1VJKCkge1xyXG4gICAgY29uc3QgY2hpbGRyZW4gPSBbLi4uY29udGFpbmVyLmNoaWxkcmVuXTtcclxuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlclByb2plY3RVSSwgcmVuZGVyUHJvamVjdEhlYWRlciB9OyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MsIGNyZWF0ZVRleHRFbGVtZW50V2l0aENsYXNzLCBjcmVhdGVFbGVtZW50V2l0aEF0dHJpYnV0ZSB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnQuanNcIjtcclxuaW1wb3J0IHsgdG9nZ2xlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbC5qc1wiO1xyXG5pbXBvcnQgeyBnZXRUb2RvQnlJZCwgdXBkYXRlVG9kbywgZGVsZXRlVG9kb30gZnJvbSBcIi4vdG9kby5qc1wiO1xyXG5cclxuY29uc3QgdG9kb3MgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwic2VjdGlvblwiLCBcInRvZG9zXCIpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBpZCkge1xyXG4gICAgY29uc3QgdG9kb19fY29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImRpdlwiLCBcInRvZG9fX2NvbnRhaW5lclwiKTtcclxuICAgIHRvZG9fX2NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGlkKTtcclxuICAgIGNvbnN0IHRvZG8gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiYXJ0aWNsZVwiLCBcInRvZG9cIik7XHJcbiAgICBjb25zdCB0b2RvX19kYXRlID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImRpdlwiLCBcInRvZG9fX2RhdGVcIik7XHJcbiAgICBjb25zdCBkYXRlMSA9IGNyZWF0ZVRleHRFbGVtZW50V2l0aENsYXNzKFwic21hbGxcIiwgXCJkYXRlXCIsIGRhdGUpO1xyXG4gICAgdG9kb19fZGF0ZS5hcHBlbmRDaGlsZChkYXRlMSk7XHJcbiAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9fX2RhdGUpO1xyXG5cclxuICAgIGNvbnN0IHRvZG9fX2NvbnRlbnQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiZGl2XCIsIFwidG9kb19fY29udGVudFwiKTtcclxuICAgIGNvbnN0IHRvZG9fX3RpdGxlID0gY3JlYXRlVGV4dEVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIiwgXCJ0b2RvX190aXRsZVwiLCB0aXRsZSk7XHJcbiAgICBjb25zdCB0b2RvX19wcmlvcml0eSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIiwgXCJ0b2RvX19wcmlvcml0eVwiKTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eTEgPSBjcmVhdGVUZXh0RWxlbWVudFdpdGhDbGFzcyhcInNtYWxsXCIsIFwicHJpb3JpdHlcIiwgcHJpb3JpdHkpO1xyXG4gICAgaWYgKHByaW9yaXR5ID09PSBcImhpZ2hcIikge1xyXG4gICAgICAgIHByaW9yaXR5MS5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHByaW9yaXR5MS5jbGFzc0xpc3QuYWRkKFwibm9ybWFsXCIpO1xyXG4gICAgfVxyXG4gICAgdG9kb19fcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHkxKTtcclxuICAgIHRvZG9fX2NvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb19fdGl0bGUpO1xyXG4gICAgdG9kb19fY29udGVudC5hcHBlbmRDaGlsZCh0b2RvX19wcmlvcml0eSk7XHJcblxyXG4gICAgLy90b2RvIGJ1dHRvbnNcclxuICAgIGNvbnN0IHRvZG9fX2J1dHRvbnMgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiZGl2XCIsIFwidG9kb19fYnV0dG9uc1wiKTtcclxuICAgIGNvbnN0IHRvZG9fX21vcmUgPSBjcmVhdGVFbGVtZW50V2l0aEF0dHJpYnV0ZShcImJ1dHRvblwiLCBcInRvZG9fX21vcmVcIiwgXCJpZFwiLCBcIm1vcmVcIik7XHJcbiAgICBjb25zdCBtb3JlQnRuID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImlcIiwgXCJmYXNcIik7XHJcbiAgICBtb3JlQnRuLmNsYXNzTGlzdC5hZGQoXCJmYS1jYXJldC1kb3duXCIpO1xyXG4gICAgbW9yZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0RldGFpbHMpO1xyXG4gICAgdG9kb19fbW9yZS5hcHBlbmRDaGlsZChtb3JlQnRuKTtcclxuICAgIHRvZG9fX2J1dHRvbnMuYXBwZW5kQ2hpbGQodG9kb19fbW9yZSk7XHJcbiAgICBjb25zdCB0b2RvX19lZGl0ID0gY3JlYXRlRWxlbWVudFdpdGhBdHRyaWJ1dGUoXCJidXR0b25cIiwgXCJ0b2RvX19lZGl0XCIsIFwiaWRcIiwgXCJlZGl0XCIpO1xyXG4gICAgY29uc3QgZWRpdEJ0biA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJpXCIsIFwiZmFzXCIpO1xyXG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZmEtZWRpdFwiKTtcclxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUb2RvKTtcclxuICAgIHRvZG9fX2VkaXQuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XHJcbiAgICB0b2RvX19idXR0b25zLmFwcGVuZENoaWxkKHRvZG9fX2VkaXQpO1xyXG4gICAgY29uc3QgdG9kb19fZGVsZXRlID0gY3JlYXRlRWxlbWVudFdpdGhBdHRyaWJ1dGUoXCJidXR0b25cIiwgXCJ0b2RvX19kZWxldGVcIiwgXCJpZFwiLCBcImRlbGV0ZVwiKTtcclxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJpXCIsIFwiZmFzXCIpO1xyXG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJmYS10cmFzaC1hbHRcIik7XHJcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRvZG9VSSk7XHJcbiAgICB0b2RvX19kZWxldGUuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcclxuICAgIHRvZG9fX2J1dHRvbnMuYXBwZW5kQ2hpbGQodG9kb19fZGVsZXRlKTtcclxuICAgIHRvZG9fX2NvbnRlbnQuYXBwZW5kKHRvZG9fX2J1dHRvbnMpO1xyXG4gICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvX19jb250ZW50KTtcclxuXHJcbiAgICBjb25zdCB0b2RvX19wcm9qZWN0ID0gY3JlYXRlVGV4dEVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIiwgXCJ0b2RvX19wcm9qZWN0XCIsIHByb2plY3QpO1xyXG4gICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvX19wcm9qZWN0KTtcclxuICAgIHRvZG9fX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvKTtcclxuICAgIFxyXG5cclxuICAgIC8vIGRlc2NyaXB0aW9uXHJcbiAgICBjb25zdCB0b2RvX19kZXRhaWxzID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImRpdlwiLCBcInRvZG9fX2RldGFpbHNcIik7XHJcbiAgICBjb25zdCB0b2RvX19kZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJwXCIsIFwiZGVzY3JpcHRpb25cIik7XHJcbiAgICB0b2RvX19kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdG9kb19fZGV0YWlscy5hcHBlbmRDaGlsZCh0b2RvX19kZXNjcmlwdGlvbik7XHJcbiAgICB0b2RvX19jb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb19fZGV0YWlscyk7XHJcbiAgICByZXR1cm4gdG9kb19fY29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93RGV0YWlscyhlKSB7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcclxuXHRcdFx0XCJzaG93RGV0YWlsc1wiXHJcblx0XHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUb2RvVUkoZSkge1xyXG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xyXG4gICAgY29uc3QgdG9kbyA9XHJcblx0XHRcdGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgICAgIC5wYXJlbnRFbGVtZW50O1xyXG4gICAgdG9kb3MucmVtb3ZlQ2hpbGQodG9kbyk7XHJcbiAgICBkZWxldGVUb2RvKHRvZG8uZGF0YXNldC5pZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRUb2RvKGUpIHtcclxuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xyXG5cdGNvbnN0IHRvZG8yID0gZ2V0VG9kb0J5SWQoXHJcblx0XHRlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxyXG5cdFx0XHQucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkXHJcbiAgICApO1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xyXG4gICAgdG9nZ2xlTW9kYWwoKTtcclxuICAgIGZvcm0uZWxlbWVudHMubmFtZWRJdGVtKFwidGl0bGVcIikudmFsdWUgPSB0b2RvMi5nZXRUaXRsZSgpO1xyXG4gICAgZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oXCJkZXNjcmlwdGlvblwiKS52YWx1ZSA9IHRvZG8yLmdldERlc2NyaXB0aW9uKCk7XHJcbiAgICBmb3JtLmVsZW1lbnRzLm5hbWVkSXRlbShcInByaW9yaXR5XCIpLnZhbHVlID0gdG9kbzIuZ2V0UHJpb3JpdHkoKTtcclxuICAgIGZvcm0uZWxlbWVudHMubmFtZWRJdGVtKFwicHJvamVjdFwiKS52YWx1ZSA9IHRvZG8yLmdldFByb2plY3QoKTtcclxuICAgIGZvcm0uZWxlbWVudHMubmFtZWRJdGVtKFwiZGF0ZVwiKS52YWx1ZSA9IHRvZG8yLmdldER1ZURhdGUoKTtcclxuICAgIFxyXG4gICAgY29uc3QgY3JlYXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVcIik7XHJcbiAgICBjcmVhdGVCdG4uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICBjb25zdCB1cGRhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwZGF0ZVwiKTtcclxuICAgIHVwZGF0ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIHVwZGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RfX3RpdGxlXCIpO1xyXG4gICAgICAgIC8vZ2V0IGN1cnJlbnQgcHJvamVjdCBwYWdlIHlvdXJlIG9uIGlzIHRoZSBzYW1lIGFzIG5ldyBwcm9qZWN0LCByZSByZW5kZXIgVUlcclxuICAgICAgICBpZiAoZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oXCJwcm9qZWN0XCIpLnZhbHVlID09PSBkaXNwbGF5LnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVRvZG9VSSh0b2RvMik7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0VHlwZSA9IGRpc3BsYXkudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgY29uc3QgbWlzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlzY2VsbGFuZW91c1wiKTtcclxuICAgICAgICBjb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xyXG4gICAgICAgIGNvbnN0IHdvcmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtcIik7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzLm5hbWVkSXRlbShcInRpdGxlXCIpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0uZWxlbWVudHMubmFtZWRJdGVtKFwicHJpb3JpdHlcIikudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGZvcm0uZWxlbWVudHMubmFtZWRJdGVtKFwicHJvamVjdFwiKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkYXRlID0gZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oXCJkYXRlXCIpLnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAocHJvamVjdFR5cGUgPT09IFwid29ya1wiKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgdG9kbzIuZ2V0SWQoKSk7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIHdvcmsuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb2plY3RUeXBlID09PSBcImhvbWVcIikge1xyXG4gICAgICAgICAgICB1cGRhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIHRvZG8yLmdldElkKCkpO1xyXG4gICAgICAgICAgICB0b2dnbGVNb2RhbCgpO1xyXG4gICAgICAgICAgICBob21lLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9qZWN0VHlwZSA9PT0gXCJtaXNjZWxsYW5lb3VzXCIpIHtcclxuICAgICAgICAgICAgdXBkYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCB0b2RvMi5nZXRJZCgpKTtcclxuICAgICAgICAgICAgdG9nZ2xlTW9kYWwoKTtcclxuICAgICAgICAgICAgbWlzYy5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUb2RvVUkodG9kbykge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oXCJ0aXRsZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oXCJwcmlvcml0eVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHByb2plY3QgPSBmb3JtLmVsZW1lbnRzLm5hbWVkSXRlbShcInByb2plY3RcIikudmFsdWU7XHJcbiAgICBjb25zdCBkYXRlID0gZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oXCJkYXRlXCIpLnZhbHVlO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvX190aXRsZVwiKS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKS50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xyXG4gICAgaWYgKHByaW9yaXR5ID09PSBcIm5vcm1hbFwiKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaFwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpLmNsYXNzTGlzdC5hZGQoXCJub3JtYWxcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJub3JtYWxcIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb19fZGF0ZVwiKS50ZXh0Q29udGVudCA9IGRhdGU7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9fX3Byb2plY3RcIikudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xyXG5cclxuICAgIHVwZGF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgdG9kby5nZXRJZCgpKTtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJUb2RvIH07IiwiaW1wb3J0IHsgc29ydFRvZG9zQnlQcm9qZWN0LCBzaG93QWxsVGFza3MgfSBmcm9tIFwiLi90b2RvLmpzXCI7XHJcblxyXG5cclxuY29uc3Qgc2lkZWJhckRpdnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyX19saW5rXCIpXTtcclxuY29uc3Qgd29ya0xpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtcIik7XHJcbmNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xyXG5jb25zdCBtaXNjTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlzY2VsbGFuZW91c1wiKTtcclxuXHJcbmZ1bmN0aW9uIGFkZFNpZGViYXJFdmVudHMoKSB7XHJcblx0Y29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbFwiKTtcclxuXHRjb25zdCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlXCIpO1xyXG5cdGNvbnN0IHVwY29taW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVyZHVlXCIpO1xyXG5cdGNvbnN0IG92ZXJkdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJkdWVcIik7XHJcblxyXG5cdGFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93QWxsVGFza3MpO1xyXG5cdHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzb3J0VG9kb3NCeVRhc2spO1xyXG5cdHVwY29taW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzb3J0VG9kb3NCeVRhc2spO1xyXG5cdG92ZXJkdWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNvcnRUb2Rvc0J5VGFzayk7XHJcblxyXG5cdHdvcmtMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzb3J0VG9kb3NCeVByb2plY3QpO1xyXG5cdGhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzb3J0VG9kb3NCeVByb2plY3QpO1xyXG5cdG1pc2NMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzb3J0VG9kb3NCeVByb2plY3QpO1xyXG5cclxuXHRzaWRlYmFyRGl2cy5tYXAoKGRpdikgPT4ge1xyXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIG9wZW5TdWJNZW51KGUpO1xyXG5cdH0pO1xyXG59KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlblN1Yk1lbnUoZSkge1xyXG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19kaXNwbGF5XCIpO1xyXG5cdGRpc3BsYXkudGV4dENvbnRlbnQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcclxuXHRyZW1vdmVBY3RpdmVMaW5rcyhlKTtcclxuXHRjbG9zZVN1Yk1lbnVzKCk7XHJcblx0aWYgKGUuY3VycmVudFRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcclxuXHRcdGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG5cdFx0ZS5jdXJyZW50VGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1N1YlwiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBY3RpdmVMaW5rcygpIHtcclxuXHRzaWRlYmFyRGl2cy5tYXAoKGRpdikgPT4ge1xyXG5cdFx0ZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlU3ViTWVudXMoKSB7XHJcblx0Y29uc3Qgc3VibWVudXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyX19zdWJsaW5rc1wiKV07XHJcblx0c3VibWVudXMubWFwKChtZW51KSA9PiB7XHJcblx0XHRpZiAobWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93U3ViXCIpKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInNob3dTdWJcIik7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFkZFNpZGViYXJFdmVudHMgfTtcclxuIiwiaW1wb3J0IHsgdG9nZ2xlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbC5qc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0VUksIHJlbmRlclByb2plY3RIZWFkZXIgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xyXG5cclxuY29uc3QgdG9kb3MgPSBbXTtcclxuXHJcbmNsYXNzIFRvZG9zIHtcclxuXHRjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBpZCkge1xyXG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xyXG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG5cdFx0dGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuXHRcdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuXHRcdHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0fVxyXG5cclxuXHRnZXRUaXRsZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnRpdGxlO1xyXG5cdH1cclxuXHJcblx0c2V0VGl0bGUodGl0bGUpIHtcclxuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcclxuXHR9XHJcblxyXG5cdGdldERlc2NyaXB0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcblx0fVxyXG5cclxuXHRzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG5cdH1cclxuXHJcblx0Z2V0RHVlRGF0ZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmR1ZURhdGU7XHJcblx0fVxyXG5cclxuXHRzZXREdWVEYXRlKGR1ZURhdGUpIHtcclxuXHRcdHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcblx0fVxyXG5cclxuXHRnZXRQcmlvcml0eSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnByaW9yaXR5O1xyXG5cdH1cclxuXHJcblx0c2V0UHJpb3JpdHkocHJpb3JpdHkpIHtcclxuXHRcdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuXHR9XHJcblxyXG5cdGdldElkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaWQ7XHJcblx0fVxyXG5cclxuXHRnZXRQcm9qZWN0KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvamVjdDtcclxuXHR9XHJcblxyXG5cdHNldFByb2plY3QocHJvamVjdCkge1xyXG5cdFx0dGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuXHR9XHJcblxyXG5cdHNldElkKGlkKSB7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZVRvZG8oZSkge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XHJcblx0Y29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlO1xyXG5cdGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RcIikudmFsdWU7XHJcbiAgICBjb25zdCBpZCA9IE1hdGgucmFuZG9tKCk7XHJcblx0Y29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvcyhcclxuXHRcdHRpdGxlLFxyXG5cdFx0ZGVzY3JpcHRpb24sXHJcblx0XHRkYXRlLFxyXG5cdFx0cHJpb3JpdHksXHJcblx0XHRwcm9qZWN0LFxyXG5cdFx0aWRcclxuICAgICk7XHJcblxyXG5cdHRvZG9zLnB1c2gobmV3VG9kbyk7XHJcblx0dG9nZ2xlTW9kYWwoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc29ydFRvZG9zQnlQcm9qZWN0KGUpIHtcclxuXHRjb25zdCBzb3J0ZWRCeVByb2plY3QgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiB7XHJcblx0XHRmb3IgKGNvbnN0IHByb3AgaW4gdG9kbykge1xyXG5cdFx0XHRpZiAodG9kb1twcm9wXSA9PT0gZS5jdXJyZW50VGFyZ2V0LmlkKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRvZG87XHJcblx0XHRcdH1cclxuXHRcdH1cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cdHJlbmRlclByb2plY3RIZWFkZXIoZS5jdXJyZW50VGFyZ2V0LmlkKTtcclxuXHRyZW5kZXJQcm9qZWN0VUkoc29ydGVkQnlQcm9qZWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0FsbFRhc2tzKGUpIHtcclxuXHQvL2NhbGwgcmVuZGVyIHRvZG9cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VG9kb0J5SWQoaWQpIHtcclxuXHRjb25zdCBtYXRjaCA9IFtdO1xyXG5cdHRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcblx0XHRpZiAodG9kby5nZXRJZCgpID09PSBOdW1iZXIoaWQpKSB7XHJcblx0XHRcdG1hdGNoLnB1c2godG9kbyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0cmV0dXJuIG1hdGNoWzBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGlkKSB7XHJcblx0dG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcclxuXHRcdGlmICh0b2RvLmdldElkKCkgPT09IE51bWJlcihpZCkpIHtcclxuXHRcdFx0dG9kby5zZXRUaXRsZSh0aXRsZSk7XHJcblx0XHRcdHRvZG8uc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pO1xyXG5cdFx0XHR0b2RvLnNldER1ZURhdGUoZGF0ZSk7XHJcblx0XHRcdHRvZG8uc2V0UHJpb3JpdHkocHJpb3JpdHkpO1xyXG5cdFx0XHR0b2RvLnNldFByb2plY3QocHJvamVjdCk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRvZG8oaWQpIHtcclxuXHR0b2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xyXG5cdFx0aWYgKHRvZG8uZ2V0SWQoKSA9PT0gTnVtYmVyKGlkKSkge1xyXG5cdFx0XHR0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQge3BvcHVsYXRlVG9kbywgc29ydFRvZG9zQnlQcm9qZWN0LCBnZXRUb2RvQnlJZCwgdXBkYXRlVG9kbywgZGVsZXRlVG9kbywgc2hvd0FsbFRhc2tzIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiXHJcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgYWRkU2lkZWJhckV2ZW50cyB9IGZyb20gXCIuL3NjcmlwdHMvc2lkZWJhci5qc1wiO1xyXG5pbXBvcnQgeyBhZGRIZWFkZXJFdmVudHMgfSBmcm9tIFwiLi9zY3JpcHRzL2hlYWRlci5qc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJNb2RhbCB9IGZyb20gXCIuL3NjcmlwdHMvbW9kYWwuanNcIjtcclxuaW1wb3J0IHsgYWRkQnV0dG9uRXZlbnRzIH0gZnJvbSBcIi4vc2NyaXB0cy9tb2RhbC5qc1wiO1xyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBhZGRTaWRlYmFyRXZlbnRzKCk7XHJcbiAgICBhZGRIZWFkZXJFdmVudHMoKTtcclxuICAgIC8vIGNvbnN0IG1vZGFsID0gcmVuZGVyTW9kYWwoKTtcclxuICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgYWRkQnV0dG9uRXZlbnRzKCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vcmVuZGVyIG1haW4gY29udGVudCBjb250YWluZXJcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9