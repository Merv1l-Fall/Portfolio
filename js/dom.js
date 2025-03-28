const aboutMeButton = document.querySelector(".about-button");
const contactButton = document.querySelector(".contact-button");
const headerName = document.querySelector(".header-name-container");
const aboutMeLink = document.getElementById("about-link");

const startPage = document.getElementById("start-page");
const aboutPage = document.getElementById("about-page");




function showAboutPage() {
	hidePages()
	aboutPage.classList.remove("display-none")
	aboutPage.classList.add("display-flex")
	
};

function showStartPage() {
	hidePages()
	startPage.classList.remove("display-none")
	startPage.classList.add("display-flex")
};

function hidePages() {
	startPage.classList.add("display-none")
	startPage.classList.remove(".display-flex")
	aboutPage.classList.add("display-none")
	aboutPage.classList.remove(".display-flex")
	window.scrollTo(0,0); 
};



//Navigation buttons
aboutMeButton.addEventListener("click", () => {
	showAboutPage()
	// console.log("about button pressed")
} );

headerName.addEventListener("click", () => {
	showStartPage()
});

aboutMeLink.addEventListener("click", () => {
	showAboutPage()
})