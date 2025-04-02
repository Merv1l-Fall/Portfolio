const aboutMeButton = document.querySelector(".about-button");
const contactButton = document.querySelector(".contact-button");
const headerName = document.querySelector(".header-name-container");
const aboutMeLink = document.getElementById("about-link");
const popupContainer = document.querySelector(".popup-container")
const closePopupButton = document.querySelector(".close-popup")
const coursePlanButton = document.getElementById("course-plan")
const popup = document.querySelector(".popup")

const startPage = document.getElementById("start-page");
const aboutPage = document.getElementById("about-page");
const body = document.querySelector("body")




function showPage(sectionId) {
    hidePages();

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove("display-none");
        section.classList.add("display-flex");

        // Update URL
        history.pushState({ section: sectionId }, "", `#${sectionId}`);
    }
};

function hidePages() {
    document.querySelectorAll("section").forEach(sec => {
        sec.classList.add("display-none");
        sec.classList.remove("display-flex");
    });
    window.scrollTo(0, 0);
};


function showPopup(){
	popupContainer.classList.add("display-flex")
	popupContainer.classList.remove("display-none")
	body.classList.add("no-scroll")
	popup.show()
};

function hidePopup(){
	popupContainer.classList.remove("display-flex")
	popupContainer.classList.add("display-none")
	body.classList.remove("no-scroll")
	popup.close()
	console.log("hide func")
};



//Navigation buttons
coursePlanButton.addEventListener("click", () => {
	showPopup();
})

popupContainer.addEventListener("click", (event) => {
	event.stopPropagation();
	hidePopup();
});

closePopupButton.addEventListener("click", () => {
	hidePopup();
});

popup.addEventListener("click", (event) => {
	event.stopPropagation();
})

aboutMeButton.addEventListener("click", () => {
	showPage("about-page");
} );

headerName.addEventListener("click", () => {
	showPage("start-page");
});

aboutMeLink.addEventListener("click", () => {
	showPage("about-page");
});





//routing

//make back and forward buttons
window.onpopstate = function (event) {
    if (event.state && event.state.section) {
        showPage(event.state.section);
    } else {
        showPage("startPage"); // First Page
    }
};

//check url to make sure correct section is shown
window.onload = function () {
    const sectionFromURL = location.hash.substring(1);
    if (document.getElementById(sectionFromURL)) {
        showPage(sectionFromURL);
    } else {
        showPage("startPage"); //First page
		history.replaceState({ section: "startPage" }, "", "#startPage");
    }
};