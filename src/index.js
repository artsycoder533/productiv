
import "./styles/style.scss";
import { addSidebarEvents } from "./scripts/sidebar.js";
import { addHeaderEvents } from "./scripts/header.js";
import { renderModal } from "./scripts/modal.js";
import { addButtonEvents } from "./scripts/modal.js";


window.addEventListener("DOMContentLoaded", () => {
    addSidebarEvents();
    addHeaderEvents();
    // const modal = renderModal();
    // document.body.appendChild(modal);
    addButtonEvents();
});





//render main content container
