function createElement(type) {
    const el = document.createElement(type);
    return el;
}

function createElementWithClass(type, className) {
    const el = document.createElement(type);
    document.classList.add(className);
    return el;
}

function createTextElement(type, className, text) {
    const el = document.createElement(type);
    el.classList.add(className);
    el.textContent = text;
    return el;
}

function createLink(type, className, src, text) {
    const el = document.createElement(type);
    el.classList.add(className);
    el.src = src;
    el.textContent = text;
    return el;
}

function createElementWithDataId(type, className, text, id) {
    const el = document.createElement(type);
    el.classList.add(className);
    el.textContent = text;
    el.dataset.id = id;
}

export { createElement, createElementWithClass, createTextElement, createLink, createElementWithDataId };
