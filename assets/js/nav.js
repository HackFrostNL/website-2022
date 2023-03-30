const hamburger = () => {
	const nav = document.getElementById("nav-main");
	const logo = document.querySelector(".div-nav-logo");
	if (nav.classList.contains("responsive")) {
		nav.classList.remove("responsive");
		logo.classList.remove("hidden");
	} else {
		nav.classList.add("responsive");
		logo.classList.add("hidden");
	}
}