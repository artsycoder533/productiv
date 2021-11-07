// import { createElementWithClass } from "./createElement";
// import { renderForm } from "./form";

function addButtonEvents() {
    const addBtn = document.getElementById("add");
    const createBtn = document.getElementById("submit");
    addBtn.addEventListener("click", openModal);
    const modal = document.querySelector(".modal");
    const closeBtn = document.getElementById("close");
    closeBtn.addEventListener("click", openModal);
    // modal.addEventListener("click", openModal);
    // createBtn.addEventListener("click", populateTodo());
}

function openModal() {
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

export { addButtonEvents, openModal };