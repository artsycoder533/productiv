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
        validateForm(e);
    });
}

function validateForm(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const priority = document.getElementById("priority").value;
    const project = document.getElementById("project").value;
    const titleError = document.querySelector(".title__error");
    const messageError = document.querySelector(".message__error");
    const dateError = document.querySelector(".date__error");
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const fullDate = `${year}-${month}-${day}`;
    if (title.trim() === "") {
        titleError.textContent = "Title must not be blank";
        setTimeout(function () {
            titleError.textContent = " ";
        }, 2000);
        
    }
    if (description.trim()=== "") {
        messageError.textContent = "Message must not be blank";
        setTimeout(function () {
            messageError.textContent = " ";
        }, 2000);
    }
    if (date === "") {
        dateError.textContent = "Please select a date";
        setTimeout(function () {
            dateError.textContent = " ";
        }, 2000);
    }
    if (date < fullDate) {
        
        dateError.textContent = "Date must not be in the past";
        setTimeout(function () {
          dateError.textContent = " ";
        }, 3000);
    }
    else {
        populateTodo(e);
    }
}

function toggleModal() {
    const modal = document.querySelector(".modal");
    const form = document.querySelector(".modal__form");
    modal.classList.toggle("showModal");
    form.reset();
}

export { addButtonEvents, toggleModal };