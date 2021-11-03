import {
	createElement,
	createElementWithClass,
	createTextElementWithClass,
	createImageWithId,
    createTextElementWithId,
    createElementWithAttribute,
    createLabelElement,
    createInputElement
} from "./scripts/createElement.js";

function renderHeader() {
    const header = createElementWithClass("header", "header");
    const headerControls = createElementWithClass("section", "header__controls");
    const hamburger = createElementWithId("i", "fas", "hamburger");
    hamburger.classList.add("fa-bars");
    headerControls.appendChild(hamburger);

    const headerUser = createElementWithClass("section","header__user");
    const headerTitle = document.createElementWithClass("div", "header__title");
    const headerDisplay = document.createTextElementWithClass("h3", "header__display", "Dashboard");
    headerTitle.appendChild(headerDisplay);
    headerUser.appendChild(headerTitle);

    const header__right = document.createElementWithClass("div", "header__right");
    const headerUserName = document.createTextElementWithClass("span", "header__username", "username");
    const headerImage = document.createElementWithClass("div", "header__image");
    const img = createImageWithId("img", "user.png", "profile picture", "profile");
    headerImage.appendChild(img);
    header__right.appendChild(headerUserName);
    header__right.appendChild(headerImage);

    const headerUpload = createElementWithClass("div", "header__upload");
    const label = createLabelElement("label", "file", "Change Profile Image");
    const input = createInputElement("input", "file", "imageUpload", "imgUpload");
    headerUpload.appendChild(label);
    headerUpload.appendChild(input);
    header__right.appendChild(header__upload);

    const logout = createElementWithId("i", "fas", "logout");
    logout.classList.add("fa-sign-out-alt");
    header__right.appendChild(logout);
    
    header.appendChild(headerControls);
    header.appendChild(headerUser);
    return header;
}