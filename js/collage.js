const bigImage = document.getElementById("big-image")
const smallImages = document.querySelectorAll(".small")
const imageInfoText = document.querySelector(".collage-img-info");

//swipe vairables
let startTouchX = 0;
let endTouchX = 0;

function collageHandler () {
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

	//swipe fucntionality
	bigImage.addEventListener("touchstart", function(e) {
        startTouchX = e.changedTouches[0].screenX; // Store the starting point of the touch
    });

	bigImage.addEventListener("touchend", function(e) {
        endTouchX = e.changedTouches[0].screenX; 

        // If the touch movement is significant enough, swap images
        if (endTouchX - startTouchX > 50) {
            nextImage(); // Swipe right (next image)
        } else if (startTouchX - endTouchX > 50) {
            prevImage(); // Swipe left (previous image)
        }
    });

	//go to next image
	function nextImage() {
        let currentIndex = Array.from(smallImages).findIndex(img => img.src === bigImage.src);
        currentIndex = (currentIndex + 1) % smallImages.length;
        swapImage(smallImages[currentIndex]);
    }
	
	//go to previus image
	function prevImage() {
        let currentIndex = Array.from(smallImages).findIndex(img => img.src === bigImage.src);
        currentIndex = (currentIndex - 1 + smallImages.length) % smallImages.length;
        swapImage(smallImages[currentIndex]);
	}

	//swapping images
	function swapImage(image) {
        bigImage.src = image.src;
        bigImage.alt = image.alt;
        imageInfoText.innerText = image.alt;
    }

};

collageHandler()