const sidebarDivs = [...document.querySelectorAll(".sidebar__link")];

function addSidebarEvents() {
    sidebarDivs.map((div) => {
    div.addEventListener("click", (e) => {
        openSubMenu(e);
    });
});
}

function openSubMenu(e) {
    const display = document.querySelector(".header__display");
	// console.log(e.currentTarget.dataset.id);
	display.textContent = e.currentTarget.dataset.id;
	removeActiveLinks(e);
	closeSubMenus();
	if (e.currentTarget.nextElementSibling) {
		e.currentTarget.classList.toggle("active");
		e.currentTarget.nextElementSibling.classList.toggle("showSub");
	} else {
		e.currentTarget.classList.add("active");
	}
}

function removeActiveLinks() {
	sidebarDivs.map((div) => {
		div.classList.remove("active");
	});
}

function closeSubMenus() {
	const submenus = [...document.querySelectorAll(".sidebar__sublinks")];
	submenus.map((menu) => {
		if (menu.classList.contains("showSub")) {
			return;
		} else {
			menu.classList.remove("showSub");
		}
	});
}

export { addSidebarEvents };
