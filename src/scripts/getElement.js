const getElement = (selector, isList)=>{
    const el = isList ? [...document.querySelectorAll(selector)] : document.querySelector(selector);

    if (!isList && el) {
        return el;
    }

    else if (isList && !el.length < 1) {
        return el;
    }
    else {
        throw new Error(`There's an error in your ${selector} selector`);
    };
}

export { getElement };