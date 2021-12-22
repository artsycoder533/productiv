import { sortTodosByProject, showAllTasks, sortTodosByTask, getInbox } from "./todo.js";
import { showInbox } from "./inbox.js";


const sidebarDivs = [...document.querySelectorAll(".sidebar__link")];
const workLink = document.getElementById("work");
const homeLink = document.getElementById("home");
const miscLink = document.getElementById("miscellaneous");

function addSidebarEvents() {
	const allTasks = document.getElementById("all");
	const today = document.getElementById("today");
	const upcoming = document.getElementById("upcoming");
	const overdue = document.getElementById("overdue");

	allTasks.addEventListener("click", showAllTasks);
	today.addEventListener("click", sortTodosByTask);
	upcoming.addEventListener("click", sortTodosByTask);
	overdue.addEventListener("click", sortTodosByTask);

	workLink.addEventListener("click", sortTodosByProject);
	homeLink.addEventListener("click", sortTodosByProject);
	miscLink.addEventListener("click", sortTodosByProject);

	const index = document.getElementById("inbox");
	index.addEventListener("click", getInbox);

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

export { addSidebarEvents };
