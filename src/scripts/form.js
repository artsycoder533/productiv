import { getElement } from "./getElement.js";
import {
	createInputElement,
	createLabelElement,
	createTextArea,
    createElementWithTwoAttributes,
    createOption,
    createTextElementWithClass
} from "./createElement.js";

function renderForm(){
    const form = createTextElementWithClass("form", "modal__form")
    // title
    const titleLabel = createLabelElement("label", "title", "Title:");
    const titleInput = createInputElement("input", "text", "title", "title");
    // description
    const descriptionLabel = createLabelElement("label", "description", "Description:");
    const descriptionInput = createTextArea("textarea", "description", "30", "10");
    // date
    const dateLabel = createLabelElement("label", "date", "Date:");
    const dateInput = createElementWithTwoAttributes("input", "type","date", "id", "date");
    // priority
    const priorityLabel = createLabelElement("label", "priority", "Choose a priority level:");
    const prioritySelect = createElementWithTwoAttributes("select", "name", "priority", "id", "priority");
    const normalOption = createOption("normal", "Normal");
    const highOption = createOption("high", "High");
    // project
    const projectLabel = createLabelElement("label", "project", "Project:");
    const projectSelect = createElementWithTwoAttributes("select", "name", "project", "id", "project")
    const defaultOption = createOption("default", "Default");
    const workOption = createOption("work", "Work");
    const homeOption = createOption("home", "Home");
    // button
    const button = createElementWithTwoAttributes("button", "type", "submit", "id", "submit");
    button.textContent = "Create";

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(dateLabel);
    form.appendChild(dateInput);
    form.appendChild(priorityLabel);

    prioritySelect.appendChild(normalOption);
    prioritySelect.appendChild(highOption);

    form.appendChild(projectLabel);

    projectSelect.appendChild(defaultOption);
    projectSelect.appendChild(workOption);
    projectSelect.appendChild(homeOption);
    form.appendChild(projectSelect);
    form.appendChild(button);
    return form;
} 

export { renderForm };
