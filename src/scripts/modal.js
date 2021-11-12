// import { createElementWithClass } from "./createElement";
// import { renderForm } from "./form";
import {populateTodo} from "./todo.js"

function addButtonEvents() {
    const addBtn = document.getElementById("add");
    const createBtn = document.getElementById("create");
    addBtn.addEventListener("click", toggleModal);
    const closeBtn = document.getElementById("close");
    const cancelBtn = document.getElementById("cancel");
    cancelBtn.addEventListener("click", toggleModal);
    closeBtn.addEventListener("click", toggleModal);
    // modal.addEventListener("click", openModal);
    createBtn.addEventListener("click", (e)=>{
        populateTodo(e);
    });
}

function toggleModal() {
    const modal = document.querySelector(".modal");
    const form = document.querySelector(".modal__form");
    modal.classList.toggle("showModal");
    form.reset();
}


// function renderModal() {
//     const modal = createElementWithClass("section", "modal");
//     const modalContainer = createElementWithClass(
// 			"article",
// 			"modal__container"
//     );
//     const form = renderForm();
//     modalContainer.appendChild(form);
//     modal.appendChild(modalContainer);
//     console.log(modal);
//     return modal;
// }

export { addButtonEvents, toggleModal };