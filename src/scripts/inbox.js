import {
  createElementWithClass,
  createInputElement,
    createTextElementWithClass,
  createElementWithAttribute
} from "./createElement";
import { getTodaysDate } from "./modal";
import { deleteInboxMessage, getInbox, updateDocument } from "./todo";

let count = 0;

function showInbox(todos) {
  clearInboxUI();
  const container = document.querySelector(".container");
    const title = createTextElementWithClass("h2", "inbox__title", "Inbox");
    container.appendChild(title);
  if (todos.length === 0) {
    const status = createTextElementWithClass(
      "p",
      "inbox__status",
      "Your inbox is empty"
    );
    container.appendChild(title);
      container.appendChild(status);
      return container;
  } else {
    todos.map((todo) => {
        const inbox = createElementWithClass("div", "inbox");
      inbox.setAttribute("data-id", todo.id);
      const subject = createElementWithClass("p", "inbox__subject");
      if (todo.dueDate === getTodaysDate()) {
        subject.textContent = "You have a task that's due today";
      }
      else if (todo.dueDate < getTodaysDate()) {
        subject.textContent = "You have a task that's overdue!";
      }
        
        const trashBtn = createElementWithAttribute(
          "button",
          "todo__delete",
          "id",
          "delete"
        );
        const trashIcon = createElementWithClass("i", "fas");
        trashIcon.classList.add("fa-trash-alt");
      trashBtn.addEventListener("click", function (e) {
            deleteMessage(todo.id, e.currentTarget.parentElement);
        });
        trashBtn.appendChild(trashIcon);
        if (todo.status === "unread") {
            subject.classList.add("bold");
        }
        if (todo.status === "read") {
            subject.classList.remove("bold");
        }
      const checkbox = createInputElement(
        "input",
        "checkbox",
        "checkbox",
        "checkbox"
        );
        checkbox.classList.add("checkbox");
        
      subject.addEventListener("click", function () {
        showMessage(todo, subject.textContent, todos);
      });
      inbox.appendChild(checkbox);
        inbox.appendChild(subject);
        inbox.appendChild(trashBtn);

        container.appendChild(inbox);
        
    });
    }
    const deleteAll = createTextElementWithClass(
      "button",
      "inbox__button",
      "Delete Selected"
    );
    deleteAll.addEventListener("click", function () {
      deleteSelected(todos);
    });
container.appendChild(deleteAll);

  return container;
}

function deleteSelected(todos) {
    const container = document.querySelector(".container");
    const kids = container.children;
    const containerChildren = Array.from(kids);
    containerChildren.forEach((child, index) => {
        if (child.children[0]) {
            if (child.children[0].checked) {
                deleteMessage(child.dataset.id, child);
                if (child.children[1].classList.contains("bold")) {
                    updateInboxCount("subtract");
                }
            }
        }
        getInbox();
    });
}

function deleteMessage(id, todo) {
    const container = document.querySelector(".container");
    const message = document.querySelector(".inbox");
  todo.remove();
  deleteInboxMessage(id);
  getInbox();
}

function showMessage(todo, subject, todos) {
  clearInboxUI();
  const container = document.querySelector(".container");
  const message = createElementWithClass("div", "message__container");
  const messageSubject = createTextElementWithClass(
    "h3",
    "message__subject",
    subject
  );
  const messageTitle = createTextElementWithClass(
    "p",
    "message__title",
    todo.title
  );
  const messagePriority = createTextElementWithClass(
    "p",
    "message__priority",
    todo.priority
  );
  const messageDueDate = createTextElementWithClass(
    "p",
    "message__date",
    todo.dueDate
  );
  const messageDescription = createTextElementWithClass(
    "p",
    "message__description",
    todo.description
  );
  const backToInbox = createTextElementWithClass(
    "button",
    "inbox__button",
    "Back To Inbox"
    );
    backToInbox.classList.add("button");
    backToInbox.addEventListener("click", function () {
        getInbox();
    });
  message.appendChild(messageSubject);
  message.appendChild(messageTitle);
  message.appendChild(messagePriority);
  message.appendChild(messageDueDate);
  message.appendChild(messageDescription);
  message.appendChild(backToInbox);
  container.appendChild(message);
    updateInboxCount("subtract");
  todo.status = "read";
  updateDocument(todo.title, todo.description, todo.dueDate, todo.priority, todo.project, String(todo.id), todo.status);
  console.log(todo);
  return container;
}

function clearInboxUI() {
  const container = document.querySelector(".container");
  const children = [...container.children];
  children.forEach((child) => {
    child.remove();
  });
}

function updateInboxCount(status) {
  const background = document.getElementById("number");
  const countUI = document.getElementById("count");
  if (status === "add") {
    count++;
    countUI.textContent = count;
    background.classList.add("number");
  } else if (status === "subtract") {
    count--;
    if (count < 1) {
      count === 0;
      countUI.textContent = "";
      background.classList.remove("number");
    } else {
      countUI.textContent = count;
    }
  }
}

function resetInboxCount() {
  const background = document.getElementById("number");
  const countUI = document.getElementById("count");
  count = 0;
  countUI.textContent = count;
  background.classList.remove("number");
}

export { showInbox, updateInboxCount, resetInboxCount };
