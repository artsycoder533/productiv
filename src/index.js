
import "./styles/style.scss";
import { addSidebarEvents } from "./scripts/sidebar.js";
import { addHeaderEvents } from "./scripts/header.js";
import { addButtonEvents } from "./scripts/modal.js";

window.addEventListener("DOMContentLoaded", () => {
    addSidebarEvents();
    addHeaderEvents();
    addButtonEvents();
});



//render main content container
