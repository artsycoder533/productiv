import { renderForm } from "./form";

function addButtonEvents() {
    const addBtn = document.getElementById("add");
    addBtn.addEventListener("click", openModal);
}

function openModal() {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("showModal");
    const form = renderForm();
    modal.appendChild(form);
}

export { addButtonEvents };