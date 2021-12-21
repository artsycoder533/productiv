import {populateTodo} from "./todo.js"

function addButtonEvents() {
    const addBtn = document.getElementById("add");
    const createBtn = document.getElementById("create");
    addBtn.addEventListener("click", function () {
        const title = document.querySelector(".form__heading");
        title.textContent = "Add Task";
        toggleModal();
    });
    const closeBtn = document.getElementById("close");
    const cancelBtn = document.getElementById("cancel");
    cancelBtn.addEventListener("click", toggleModal);
    closeBtn.addEventListener("click", toggleModal);
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

export { addButtonEvents, toggleModal };