import {
	createElementWithClass,
	createTextElementWithClass,
	createImageWithId,
	createTextElementWithId,
	createElementWithAttribute,
	createLabelElement,
	createInputElement,
} from "./createElement.js";

function createSidebarLink() {
    const li = document.createElement("li");
    const sidebarLink = createElementWithAttribute("div", "sidebar__link", "data-id", "Dashboard");
    sidebarLink.classList.add("active");
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    const i = document.createElement
}

function createSidebarLinkDropdown() {
    
}

export { createSidebarLink, createSidebarLinkDropdown };