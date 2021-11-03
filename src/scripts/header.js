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

function addProfilePlaceholder(profileContainer) {
    profileContainer.children[0].src = profile;
}

function closeSidebar() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.classList.toggle("hide");
}

function uploadPic() {
	const headerUpload = document.querySelector(".header__upload");
	headerUpload.classList.toggle("visible");
}

function readUrl() {
	console.log("clicked");
	const profilePic = document.getElementById("profile");
	const profileContainer = document.querySelector(".header__image");
	// console.log(this.value);
	if (this.files) {
		const reader = new FileReader();
		reader.readAsDataURL(this.files[0]);
		reader.addEventListener("load", () => {
			profilePic.src = reader.result;
		});
	}
	profileContainer.click();
}

export { addHeaderEvents };
