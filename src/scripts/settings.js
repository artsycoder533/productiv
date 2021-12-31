import { auth } from "..";
import { updateProfile } from "firebase/auth";
import { getUsername } from "./auth";


const settings = {};

const container = document.querySelector(".container");

function displaySettings() {
    container.innerHTML = `
        <div class="settings">
  <form action="" class="settings__form">
    <div class="settings__wrapper">
      <label for="image" class="settings__label">Profile Picture:</label>
    <input type="file" id="imgSrc" class="settings__input" accept="image/png, image/jpeg">
    </div>
     <div class="settings__wrapper">
       <label for="darkmode" class="settings__label">Dark Mode:</label>
     <input type="radio" class="settings__input" name="darkmode" checked value="Off">
    <label for="darkmode" class="settings__label">Off</label>
    <input type="radio" class="settings__input" name="darkmode" value="On">
    <label for="darkmode" class="settings__label">On</label>
     </div>
    <div class="settings__wrapper">
      <label for="accent" class="settings__label">Accent Color:</label>
    <input type="color" id="color" value="#ff0000" class="settings__input">
    </div>
    
    
    <button type="submit" class="settings__button">Save Changes</button>
  </form>
</div>
    `;
    const saveBtn = document.querySelector(".settings__button");
    saveBtn.addEventListener("click", settingsEvents);
    const img = document.getElementById("imgSrc");
    img.addEventListener("change", readUrl);
    return container;
}

function settingsEvents(e){
    e.preventDefault();
    
  const accent = document.getElementById("color").value;
  const form = document.querySelector(".settings__form");
    const darkMode = document.querySelector("input[name='darkmode']:checked").value;
    const profilePic = document.getElementById("profile");
    
    // if (img) {
    //     settings.img = img;
    // }
    if (accent) {
        settings.accent = accent;
    }
    if (darkMode) {
        settings.darkMode = darkMode;
    }
    updateSettings();
    addDocument(darkMode, accent);
}

async function addDocument(darkmode, accent) {
    const ref = doc(db, `${getUsername()}tasks`, settings);
    await setDoc(ref, {
      darkMode: darkmode,
      accent: accent,
    });
}

function readUrl(){
    const profilePic = document.getElementById("profile");
    //const profileContainer = document.querySelector(".header__image");
    if (this.files) {
      const reader = new FileReader();
      reader.readAsDataURL(this.files[0]);
      reader.addEventListener("load", () => {
          profilePic.src = reader.result;
          console.log(reader.result);
          //updateProfile(auth.currentUser, { photoURL: reader.result });
      });
    }
}

function updateSettings() {
    if (settings.darkMode === "On") {
        document.body.classList.add("dark");
        //forms
        // document.querySelector(".modal__form").classList.add("black");
        // document.querySelector(".form__container").classList.add("black");
        // document.querySelector(".container2").classList.add("black");
        // document.querySelector(".inbox").classList.add("black");
        // document.querySelector(".message__container").classList.add("black");
        // document.querySelector(".todo").classList.add("black");
        // document.querySelector(".description").classList.add("black");
    }
    
  //save settings object to firebase
}

function storeImage() {
    
}

export { displaySettings };