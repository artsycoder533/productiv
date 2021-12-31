import profile from "../assets/user.png";

function addHeaderEvents() {
	const hamburgerBtn = document.getElementById("hamburger");
	const profileContainer = document.querySelector(".header__image");
    const upload = document.getElementById("imgUpload");
    addProfilePlaceholder(profileContainer);

	hamburgerBtn.addEventListener("click", closeSidebar);
	upload.addEventListener("change", readUrl);
	profileContainer.addEventListener("click", uploadPic);
}

function addUserName(name) {
	console.log(name);
	const username = document.querySelector(".header__username");
	username.textContent = name;
}

function addProfilePlaceholder(profileContainer) {
    profileContainer.children[0].src = profile;
}

function closeSidebar() {
	const sidebar = document.querySelector(".sidebar");
	if (!sidebar.classList.contains("hide")) {
		sidebar.classList.add("hide");
	}
	else {
		sidebar.classList.remove("hide");
	}
}

function uploadPic() {
	const headerUpload = document.querySelector(".header__upload");
	headerUpload.classList.toggle("visible");
}

function readUrl() {
	const profilePic = document.getElementById("profile");
	const profileContainer = document.querySelector(".header__image");
	if (this.files) {
		const reader = new FileReader();
		reader.readAsDataURL(this.files[0]);
		reader.addEventListener("load", () => {
			profilePic.src = reader.result;
			console.log(profilePic.src);
		});
	}
	profileContainer.click();
}

export { addHeaderEvents, addUserName, closeSidebar };
