import { createElementWithClass } from "./createElement";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "..";
import { addUserName } from "./header";
import { getAllData } from "./todo";

const container = document.querySelector(".container");
const dashboard = document.getElementById("dashboard");
let firstLogin = false;
 let active = "signup";

let status = "";

function showLogin() {
  addLoginScreen();
  const loginContainer = createElementWithClass("div", "login__container");

  loginContainer.innerHTML = `
  <div class="form__container">
    <form class="form">
    <h2 class="login__title"><i class="fas fa-business-time"> Productiv</i></h2>
      <div class="form__wrapper">
        <div class="form__signup ">Sign Up</div>
        <div class="form__login">Login</div>
        <div class="form__cover"></div>
      </div>
      <div class="form2">
        <div class="form__section signup">
        <div class="form__group">
          <input id="signup__email"name="email" type="text" class="form__input" placeholder="">
          <label class="form__label" for="email">Email</label>
          <small class="email__signup"></small>
        </div>
        <div class="form__group">
            <input id="signup__password" name="password" type="password" class="form__input" placeholder="">
            <label class="form__label" for="password">Password</label>
            <small class="password__signup"></small>
         </div>
        <div class="form__group">
            <input id="username" type="text" name="username" class="form__input" placeholder="">
            <label class="form__label" for="username">Username</label>
            <small class="username__signup"></small>
        </div>
        <button type="" id="signup" class="form__button">Sign-Up</button>
        
      </div>
        
       <div class="form__section login hide">
        <div class="form__group">
          <input id="login__email" type="text" name="login_email" class="form__input" placeholder="">
          <label class="form__label" for="login_email">Email</label>
          <small class="email__login"></small>
        </div>
        <div class="form__group">
            <input id="login__password" name="login_password" type="password" class="form__input" placeholder="">
            <label class="form__label" for="login_password">Password</label>
            <small class="password__login"></small>
         </div>
        <button id="login" class="form__button">Login</button>
        <button id="demo" class="form__button">Login As Demo User</button>
      </div>
      </div>
      </div>
    </form>
  </div>
    `;
  container.appendChild(loginContainer);
  addAuthEvents();
  return container;
}

function getStatus() {
  return status;
}

function changeStatus(page) {
  status = page;
}

function addLoginScreen() {
  const sidebar = document.querySelector(".sidebar");
  const header = document.querySelector(".header");
  const addBtn = document.querySelector(".add__button");
  sidebar.classList.add("hide");
  header.classList.add("hide");
  addBtn.classList.add("hide");
}

function hideLogin() {
  const sidebar = document.querySelector(".sidebar");
  const header = document.querySelector(".header");
  const addBtn = document.querySelector(".add__button");
  sidebar.classList.remove("hide");
  header.classList.remove("hide");
  addBtn.classList.remove("hide");
}

function addAuthEvents() {
  const form = document.querySelector(".form");
  const signup = document.querySelector(".form__signup");
  const login = document.querySelector(".form__login");
  const cover = document.querySelector(".form__cover");
  const signupForm = document.querySelector(".signup");
  const loginForm = document.querySelector(".login");
  const loginBtn = document.getElementById("login");
  const signupBtn = document.getElementById("signup");
  const logoutBtn = document.getElementById("logout");
  const loginScreen = document.querySelector(".login__container");
  const sidebarLogout = document.getElementById("sidebar__logout");
  const demo = document.getElementById("demo");
  let loggedIn;

  if (loggedIn) {
    //loginScreen.classList.add("hide");
  }

  function addActiveLogin() {
    cover.classList.add("moveRight");
    cover.classList.remove("moveLeft");
    loginForm.classList.remove("hide");
    signupForm.classList.add("hide");
    active = "login";
  }

  function addActiveSignup() {
    cover.classList.add("moveLeft");
    cover.classList.remove("moveRight");
    signupForm.classList.remove("hide");
    loginForm.classList.add("hide");
    active = "signup";
  }

  function loginUser(e) {
    e.preventDefault();
    //form validation
    const emailLogin = document.querySelector(".email__login");
    const passwordLogin = document.querySelector(".password__login");
    const email = document.getElementById("login__email").value;
    const password = document.getElementById("login__password").value;
    const result = formValidation(email, password, null);
    if (result) {
      if (active === "login") {
        signInWithEmailAndPassword(auth, email, password)
          .then((cred) => {
            addUserName(cred.user.displayName);
            if (cred.user.photoURL) {
              const profilePic = document.getElementById("profile");
              profilePic.src = cred.user.photoURL;
            }
            hideLogin();
            clearUI();
            setLoginStatus(true);
            emailLogin.textContent = "";
            passwordLogin.textContent = "";
          })
          .catch((err) => {
            console.log(err.message);
            if (err.message === "Firebase: Error (auth/wrong-password).") {
              passwordLogin.textContent = "Invalid password"
            }
            if (err.message === "Firebase: Error (auth/user-not-found).") {
              emailLogin.textContent = "user not found";
            }
          });
      }
    } 
  }

  function logoutUser() {
    signOut(auth)
      .then(() => {
        showLogin();
        form.reset();
        setLoginStatus(false);
        document.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function signupUser(e) {
    e.preventDefault();
    const emailSignup = document.querySelector(".email__signup");
    const passwordSignup = document.querySelector(".password__signup");
    const usernameSignup = document.querySelector(".username__signup");
    const email = document.getElementById("signup__email").value;
    const password = document.getElementById("signup__password").value;
    const username = document.getElementById("username").value;
    //form validation
    const result = formValidation(email, password, username);
    if (result) {
      if (active === "signup") {
            if (email && password && username) {
              createUserWithEmailAndPassword(auth, email, password)
                .then((cred) => {
                  updateProfile(auth.currentUser, { displayName: username });
                  addUserName(username);
                  hideLogin();
                  setLoginStatus(true);
                  form.reset();
                  emailSignup.textContent = "";
                  passwordSignup.textContent = "";
                  usernameSignup.textContent = "";
                })
                .catch((err) => {
                  console.log(err.message);
                  if (
                    err.message ===
                    "Firebase: Error (auth/email-already-in-use)."
                  ) {
                    emailWarning.textContent = "Email already in use!";
                    return;
                  }
                });
            }
          }
    }
    else {
      return;
    }
  }

  function addDemoCredentials(e) {
    e.preventDefault();
    const email = document.getElementById("login__email");
    const password = document.getElementById("login__password");
    email.value = "demo@email.com";
    password.value = "demo1234";
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoginStatus(true);
      addUserName(user.displayName);
      hideLogin();
      clearUI();
      getAllData(user.displayName);
    }
    else {
      logoutUser();
    }
  });

  login.addEventListener("click", addActiveLogin);
  signup.addEventListener("click", addActiveSignup);
  loginBtn.addEventListener("click", loginUser);
  signupBtn.addEventListener("click", signupUser);
  logoutBtn.addEventListener("click", logoutUser);
  sidebarLogout.addEventListener("click", logoutUser);
  demo.addEventListener("click", addDemoCredentials);
}

function getUsername() {
  const username = document.querySelector(".header__username").textContent;
  return username;
}

function clearUI() {
  const container = document.querySelector(".container");
  const children = [...container.children];
  children.forEach((child) => {
    child.remove();
  });
}

function formValidation(em, pass, user) {
  const emailSignup = document.querySelector(".email__signup");
  const passwordSignup = document.querySelector(".password__signup");
  const usernameSignup = document.querySelector(".username__signup");
  const emailLogin = document.querySelector(".email__login");
  const passwordLogin = document.querySelector(".password__login");
  
  let status = false;
  //if active is login
  if (active === "login") {
    if (em === "") {
      emailLogin.textContent = "Enter a valid email";
      status = false;
    }
    if (pass === "") {
      passwordLogin.textContent = "Invalid password";
      status = false;
    }
    else {
      status = true;
      emailLogin.textContent = "";
      passwordLogin.textContent = "";
    }
  }
  //if active is signup
  if (active === "signup") {
    if (em === "") {
      emailSignup.textContent = "Email cannot be blank!";
      status = false;
    }
    if (pass === "" || pass.length < 8) {
      passwordSignup.textContent = "Password must be a minimum of 8 characters";
      status = false;
    }
    if (user === "") {
      usernameSignup.textContent = "Username cannot be blank";
      status = false;
    }
    else {
      status = true;
      emailSignup.textContent = "";
      passwordSignup.textContent = "";
      usernameSignup.textContent = "";
    }
  }
  return status
}

function getLoginStatus() {
  return firstLogin;
}

function setLoginStatus(mode) {
  firstLogin = mode;
}

export {
  showLogin,
  addAuthEvents,
  getUsername,
  dashboard,
  getLoginStatus,
  setLoginStatus,
  getStatus,
  changeStatus,
};
