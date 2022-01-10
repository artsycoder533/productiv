import "./styles/style.scss";
import { addSidebarEvents } from "./scripts/sidebar.js";
import { addHeaderEvents } from "./scripts/header.js";
import { renderModal } from "./scripts/modal.js";
import { addButtonEvents } from "./scripts/modal.js";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addAuthEvents, showLogin } from "./scripts/auth";

//init firebase app

//init services
const auth = getAuth();

//collection reference

document.body.appendChild(showLogin());

window.addEventListener("DOMContentLoaded", () => {
  //addAuthEvents();
  addSidebarEvents();
  addHeaderEvents();
  // const modal = renderModal();
  // document.body.appendChild(modal);
  addButtonEvents();
});

//arguments email and password
//password must be at least 6 characters long
//find out about firebase displayName

export { auth };
