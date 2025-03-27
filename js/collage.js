const bigImage = document.getElementById("big-image")
const smallImages = document.querySelectorAll(".small")
const imageInfoText = document.querySelector(".collage-img-info");

function collageHandler () {
    // const bigImage = document.getElementById("big-image");
    // const smallImages = document.querySelectorAll(".small");

	const imageSources = [
        "./assets/images/band-1.jpg",
        "./assets/images/fishing-1.jpg",
        "./assets/images/studio-1.jpg",
        "./assets/images/SRF-2.jpg",
        "./assets/images/Slotte-1.jpg",
        "./assets/images/SRF-1.jpg"
    ];

    // Preload images
    imageSources.forEach(src => {
        const img = new Image();
        img.src = src;
    });

	
    // Set initial text for the big image
    imageInfoText.innerText = bigImage.alt;

    smallImages.forEach(smallImage => {
        smallImage.addEventListener("click", () => {
           
            let tempSrc = bigImage.src;
            let tempAlt = bigImage.alt;  

			//updating src and alt for images when swapping
            bigImage.src = smallImage.src;
            bigImage.alt = smallImage.alt; 
            imageInfoText.innerText = smallImage.alt;
			// console.log(smallImage.alt)
			
            // make sure the correct src and alt is put back in the small picture
			smallImage.src = tempSrc;
            smallImage.alt = tempAlt;  
        });
    });
};

collageHandler()