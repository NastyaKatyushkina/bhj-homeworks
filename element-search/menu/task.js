const menuItem = Array.from(document.querySelectorAll(".menu__link"));
const menu = Array.from(document.querySelectorAll(".menu"));

menuItem.forEach((element) => {
	element.onclick = function () {
		if (element.parentElement.querySelector(".menu")) {
			element.parentElement.querySelector(".menu").classList.toggle("menu_active");
			return false;
		};

		menu.forEach((element) => {
			if (element.classList.contains("menu_active")) {
				element.classList.remove("menu_active");
			}
		});
	};
});