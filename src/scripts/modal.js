import { createElementWithClass } from "./createElement";
import { renderForm } from "./form";

function addButtonEvents() {
	const addBtn = document.getElementById("add");
	addBtn.addEventListener("click", openModal);
}



function openModal() {
	const modal = document.querySelector(".modal");
	modal.classList.toggle("showModal");
}

function renderModal() {
    const modal = createElementWithClass("section", "modal");
    const modalContainer = createElementWithClass(
			"article",
			"modal__container"
    );
    const form = renderForm();
    modalContainer.appendChild(form);
    modal.appendChild(modalContainer);
    console.log(modal);
    return modal;
}

export { addButtonEvents, renderModal, openModal };