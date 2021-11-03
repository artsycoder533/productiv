import {
	createElementWithClass,
	createTextElementWithClass,
	createImageWithId,
	createTextElementWithId,
	createElementWithAttribute,
	createLabelElement,
	createInputElement,
} from "./createElement.js";

function renderSidebar() {
    const sidebar = createElementWithClass("nav", "sidebar");

    // company logo
    const sidebarBrand = createElementWithClass("article", "sidebar__brand");
    const sidebarCompany = createElementWithClass("span", "sidebar__company");
    const companyLogo = createTextElementWithClass("i", "fas", " Productiv");
    companyLogo.classList.add("fa-business-time");
    sidebarCompany.appendChild(companyLogo);
    sidebarBrand.appendChild(sidebarCompany);
    sidebar.appendChild(sidebarBrand);

    // sidebar links
    const sidebarLinks = createElementWithClass("ul", "sidebar__links");

    // dashboard link
    const li1 = document.createElement("li");
    const sidebarLink1 = createElementWithAttribute("div", "sidebar__link", "data-id", "Dashboard");
    sidebarLink1.classList.add("active");
    const a1 = document.createElement("a");
    a1.setAttribute("href", "#");
    const dashboardIcon = createElementWithClass("i", "fas");
    dashboardIcon.classList.add("fa-th-large");
    const sidebarName1 = createTextElementWithClass("span", "sidebar__name", "Dashboard");
    a1.appendChild(dashboardIcon);
    a1.appendChild(sidebarName1);
    sidebarLink1.appendChild(a1);
    li1.appendChild(sidebarLink1);
    sidebar.appendChild(li1);

    // inbox link
    const li = document.createElement("li");
    const sidebarLink = createElementWithAttribute("div", "sidebar__link", "data-id", "Inbox");
    const a = document.createElement("a");
    const inboxIcon = createElementWithClass("i", "fas");
    inboxIcon.classList.add("fa-inbox");
    const sidebarName = createTextElementWithClass("span", "sidebar__name", " Inbox");
    const notification = createElementWithClass("div", "notification");
    const number = createTextElementWithClass("div", "number", "3");
    a.appendChild(inboxIcon);
    a.appendChild(sidebarName);
    sidebarLink.appendChild(a);
    notification.appendChild(number);
    sidebarLink.appendChild(notification);
    li.appendChild(sidebarLink);
    sidebar.appendChild(li);

    return sidebar;
}

export { renderSidebar };