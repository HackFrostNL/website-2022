const openTab = (evt, tabGroup, tabName) =>  {
	const tabContent = document.getElementsByClassName("tab-content");
	for (let i = 0; i < tabContent.length; i++) {
		if (tabContent[i].dataset.tabGroup !== tabGroup) continue;
		tabContent[i].style.display = "none";
	}
  
	// Get all elements with class="tablinks" and remove the class "active"
	const tabLinks = document.getElementsByClassName("tab-link");
	for (i = 0; i < tabLinks.length; i++) {
		if (tabContent[i].dataset.tabGroup !== tabGroup) continue;
		tabLinks[i].classList.remove("active");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.querySelector(`[data-tab-group=${tabGroup}][data-tab-name=${tabName}]`).style.display = "flex";
	evt.currentTarget.classList.add("active");
}