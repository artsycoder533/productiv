

function createElementWithClass(type, className) {
    const el = document.createElement(type);
    el.classList.add(className);
    return el;
}

function createTextElementWithClass(type, className, text) {
    const el = document.createElement(type);
    el.classList.add(className);
    el.textContent = text;
    return el;
}

function createImageWithId(type, src, alt, id) {
    // const el = document.createElement(type);
    const el = new Image();
    el.src = src;
    el.setAttribute("alt", alt);
    el.setAttribute("id", id);
    return el;
}

function createTextElementWithId(type, className, text, id) {
    const el = document.createElement(type);
    el.classList.add(className);
    el.textContent = text;
    el.setAttribute("id", id);
    return el;
}

function createElementWithAttribute(type, className, attr, attrName) {
    const el = document.createElement(type);
    el.className = className;
    el.setAttribute(attr, attrName);
    return el;
}

function createLabelElement(type, attr, text) {
    const el = document.createElement(type);
    el.setAttribute("for", attr);
    el.textContent = text;
    return el;
}

function createInputElement(type, attr, name, id) {
    const el = document.createElement(type);
    el.setAttribute("type", attr);
    el.setAttribute("name", name);
    el.setAttribute("id", id);
    return el;
}

export { createElementWithClass, createTextElementWithClass, createImageWithId, createTextElementWithId, createElementWithAttribute, createLabelElement, createInputElement };
