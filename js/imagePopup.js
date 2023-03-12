(function() {
    function showImagePopup(src) {
        const popup = document.querySelector("#image-popup");
        const popupImage = popup.querySelector("img");

        document.body.style.overflow = "hidden";

        popup.style.display = "block";
        popupImage.src = src;
    }

    function hideImagePopup() {
        const popup = document.querySelector("#image-popup");
        const popupImage = popup.querySelector("img");

        document.body.style.overflow = "scroll";

        popup.style.display = "none";
        popupImage.src = "";

        document.removeEventListener('click', hideImagePopupOnNotImageClick);
    }

    function hideImagePopupOnNotImageClick(event) {
        if (event.target.tagName !== "IMG") {
            hideImagePopup();
        }
    }

    let images = document.querySelectorAll(".image-popup");

    images.forEach(image => {
        image.addEventListener('click', () => {
            showImagePopup(image.src);
            document.addEventListener('click', hideImagePopupOnNotImageClick)
        });
    });
})();
