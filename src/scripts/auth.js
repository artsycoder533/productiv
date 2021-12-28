import { createElementWithClass } from "./createElement";
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "..";
import { addUserName } from "./header";

function showLogin() {
    const container = createElementWithClass("div", "login__container");
    container.innerHTML = `
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
      </div>
      </div>
      </div>
    </form>
  </div>
    `;
    return container;
}

function addAuthEvents() {
    const signup = document.querySelector(".form__signup");
    const login = document.querySelector(".form__login");
    const cover = document.querySelector(".form__cover");
    const signupForm = document.querySelector(".signup");
    const loginForm = document.querySelector(".login");
    const loginBtn = document.getElementById("login");
    const signupBtn = document.getElementById("signup");
    const logoutBtn = document.getElementById("logout");
    const loginScreen = document.querySelector(".login__container");
    let loggedIn;

    let active = "signup";

    if (loggedIn) {
        loginScreen.classList.add("hide");
    }

    function addActiveLogin() {
      // login.classList.add("active");
      // signup.classList.remove("active");
      cover.classList.add("moveRight");
      cover.classList.remove("moveLeft");
      loginForm.classList.remove("hide");
      signupForm.classList.add("hide");
      active = "login";
    }

    function addActiveSignup() {
      // signup.classList.add("active");
      // login.classList.remove("active");
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
                console.log("user logged in", cred.user);
                loggedIn = true;
                loginScreen.classList.add("hide");
            }).catch((err) => {
                console.log(err.message);
        });
    }

    function logoutUser() {
        signOut(auth).then(() => {
            console.log("user signed out");
            loginScreen.classList.remove("hide");
            loginScreen.classList.add("display");
            loggedIn = false;
            //loginBtn.click();
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
        addUserName(username);
        //form validation
        createUserWithEmailAndPassword(auth, email, password)
          .then((cred) => {
              console.log(cred.user);
              loggedIn = true;
              loginScreen.classList.add("hide");
          })
          .catch((err) => {
            console.log(err.message);
          });
        
    }

    onAuthStateChanged(auth, (user) => {
        
    })

    login.addEventListener("click", addActiveLogin);
    signup.addEventListener("click", addActiveSignup);
    loginBtn.addEventListener("click", loginUser);
    signupBtn.addEventListener("click", signupUser);
    logoutBtn.addEventListener("click", logoutUser);
}

function formValidation(active) {
    //if active is login
    //if active is signup
}

export { showLogin, addAuthEvents };