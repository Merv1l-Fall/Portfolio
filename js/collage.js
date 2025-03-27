document.addEventListener("DOMContentLoaded", () => {
    const bigImage = document.getElementById("big-image");
    const smallImages = document.querySelectorAll(".small");
    const imageInfoText = document.querySelector(".collage-img-info");

	
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
			console.log(smallImage.alt)
			
            // make sure the correct src and alt is put back in the small picture
			smallImage.src = tempSrc;
            smallImage.alt = tempAlt;  
        });
    });
});