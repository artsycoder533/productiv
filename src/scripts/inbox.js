import {
  createElementWithClass,
  createInputElement,
  createTextElementWithClass,
} from "./createElement";

let count = 0;

function showInbox(todos) {
  clearInboxUI();
  const container = document.querySelector(".container");
  const title = createTextElementWithClass("h2", "inbox__title", "Inbox");
  if (todos.length === 0) {
    const status = createTextElementWithClass(
      "p",
      "inbox__status",
      "Your inbox is empty"
    );
    container.appendChild(title);
    container.appendChild(status);
  } else {
    todos.map((todo) => {
        const inbox = createElementWithClass("div", "inbox");
      const subject = createElementWithClass("p", "inbox__subject");
        subject.textContent = "You have a task that's due today";
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
      container.appendChild(title);
      container.appendChild(inbox);
      return container;
    });
  }

  return container;
}

function showMessage(todo, subject, todos) {
    console.log(subject);
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
        showInbox(todos);
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

export { showInbox, updateInboxCount };
