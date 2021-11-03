import profile from "../assets/user.png";
import {
	createElementWithClass,
	createTextElementWithClass,
	createImageWithId,
    createTextElementWithId,
    createElementWithAttribute,
    createLabelElement,
    createInputElement
} from "./createElement.js";

function renderHeader() {
    const header = createElementWithClass("header", "header");
    const headerControls = createElementWithClass("section", "header__controls");
    const hamburger = createElementWithAttribute("i", "fas", "id", "hamburger");
    hamburger.classList.add("fa-bars");
    headerControls.appendChild(hamburger);

    const headerUser = createElementWithClass("section","header__user");
    const headerTitle = createElementWithClass("div", "header__title");
    const headerDisplay = createTextElementWithClass("h3", "header__display", "Dashboard");
    headerTitle.appendChild(headerDisplay);
    headerUser.appendChild(headerTitle);

    const headerRight = createElementWithClass("div", "header__right");
    const headerUserName = createTextElementWithClass("span", "header__username", "username");
    const headerImage = createElementWithClass("div", "header__image");
    const img = createImageWithId("img", profile, "profile picture", "profile");
    
    headerImage.appendChild(img);
    headerRight.appendChild(headerUserName);
    headerRight.appendChild(headerImage);
    headerUser.appendChild(headerRight);

    const headerUpload = createElementWithClass("div", "header__upload");
    const label = createLabelElement("label", "file", "Change Profile Image");
    const input = createInputElement("input", "file", "imageUpload", "imgUpload");
    headerUpload.appendChild(label);
    headerUpload.appendChild(input);
    headerRight.appendChild(headerUpload);

    const logout = createElementWithAttribute("i", "fas", "id", "logout");
    logout.classList.add("fa-sign-out-alt");
    headerRight.appendChild(logout);
    
    header.appendChild(headerControls);
    header.appendChild(headerUser);
    return header;
}

export { renderHeader };