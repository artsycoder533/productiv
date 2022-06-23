import { createElementWithClass } from "./createElement";
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, updateProfile} from "firebase/auth";
import { auth } from "..";
import { addUserName } from "./header";
import { getAllData } from "./todo";
import { renderDashboard } from "./dashboard";
import { render } from "sass";
// import { render } from "sass";

const container = document.querySelector(".container");
const dashboard = document.getElementById("dashboard");
let firstLogin = false;

let status = "";

function showLogin() {
  //clearUI();
  addLoginScreen();
  const loginContainer = createElementWithClass("div", "login__container");
  
  loginContainer.innerHTML = `
        <div class="form__container">
    <form action="" class="form">
    <h2 class="login__title"><i class="fas fa-business-time"> Productiv</i></h2>
      <div class="form__wrapper">
        <div class="form__signup ">Sign Up</div>
        <div class="form__login">Login</div>
        <div class="form__cover"></div>
      </div>
      <div class="form2">
        <div class="form__section signup">
        <div class="form__group">
          <input id="signup__email" type="text" class="form__input" placeholder="">
          <label class="form__label" for="email">Email</label>
        </div>
        <div class="form__group">
            <input id="signup__password" type="password" class="form__input" placeholder="">
            <label class="form__label" for="password">Password</label>
         </div>
        <div class="form__group">
            <input id="username" type="text" class="form__input" placeholder="">
            <label class="form__label" for="username">Username</label>
        </div>
        <button type="submit" id="signup" class="form__button">Sign-Up</button>
        
      </div>
        
       <div class="form__section login hide">
        <div class="form__group">
          <input id="login__email" type="text" class="form__input" placeholder="">
          <label class="form__label" for="email">Email</label>
        </div>
        <div class="form__group">
            <input id="login__password" type="password" class="form__input" placeholder="">
            <label class="form__label" for="password">Password</label>
         </div>
        <button type="submit" id="login" class="form__button">Login</button>
        <button type="submit" id="demo" class="form__button">Login As Demo User</button>
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

    let active = "signup";

    if (loggedIn) {
        //loginScreen.classList.add("hide");
    }

    function addActiveLogin() {
      // login.classList.add("active");
      // signup.classList.remove("active");
      console.log("login clicked");
      cover.classList.add("moveRight");
      cover.classList.remove("moveLeft");
      loginForm.classList.remove("hide");
      signupForm.classList.add("hide");
      active = "login";
    }

    function addActiveSignup() {
      // signup.classList.add("active");
      // login.classList.remove("active");
      console.log("signup clicked");
      cover.classList.add("moveLeft");
      cover.classList.remove("moveRight");
      signupForm.classList.remove("hide");
      loginForm.classList.add("hide");
      active = "signup";
    }

    function loginUser(e) {
        e.preventDefault();
        //form validation
        const email = document.getElementById("login__email").value;
        const password = document.getElementById("login__password").value;
        signInWithEmailAndPassword(auth, email, password)
            .then((cred) => {
              console.log("user logged in", cred.user.displayName);
              addUserName(cred.user.displayName);
              if (cred.user.photoURL) {
                const profilePic = document.getElementById("profile");
                profilePic.src = cred.user.photoURL;
              }
              hideLogin();
              clearUI();
              console.log("user loggin in");
              setLoginStatus(true);
              //document.location.reload();
              //renderDashboard();
              //dashboard.click();
              //  dashboard.click();
            }).catch((err) => {
                console.log(err.message);
            });
      
    }

    function logoutUser() {
        signOut(auth).then(() => {
          console.log("user signed out");
          showLogin();
          form.reset();
          setLoginStatus(false);
          document.location.reload();
        }).catch((err) => {
            console.log(err.message);
        });
        //make login screen show again
      
  }
  
 

    function signupUser(e) {
        e.preventDefault;
        const email = document.getElementById("signup__email").value;
        const password = document.getElementById("signup__password").value;
      const username = document.getElementById("username").value;
      console.log(username);
        //form validation
        createUserWithEmailAndPassword(auth, email, password)
          .then((cred) => {
            console.log(cred.user);
            updateProfile(auth.currentUser, { displayName: username });
            addUserName(username);
            hideLogin();
            console.log("user siged up");
            setLoginStatus(true);
            //document.location.reload();
            //renderDashboard();
          //  dashboard.click();
          })
          .catch((err) => {
            console.log(err.message);
          });
      form.reset();
  }

  function addDemoCredentials(e) {
    e.preventDefault();
    const email = document.getElementById("login__email");
    const password = document.getElementById("login__password");
   // const username = document.getElementById("username");
    email.value = "demo@email.com";
    password.value = "demo1234";
    //username.value = "demo1234";
  }
  

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("auth state changed");
        addUserName(user.displayName);
        hideLogin();
        clearUI();
            //loginScreen.classList.remove("display");
          //loginScreen.classList.add("hide");
       getAllData(user.displayName);
        //document.location.reload();
       //dashboard.click();
      }
      // else {
      //   logoutUser();
      // }
    })

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

function formValidation(active) {
    //if active is login
    //if active is signup
}

 function getLoginStatus() {
   return firstLogin;
}
 
function setLoginStatus(mode) {
  firstLogin = mode;
}

export { showLogin, addAuthEvents, getUsername, dashboard, getLoginStatus, setLoginStatus, getStatus, changeStatus };