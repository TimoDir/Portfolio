var SlideIndex = 1;
showSlides(SlideIndex);

//Button control
function plusSlides(n){
    showSlides(SlideIndex += n)
};

// Thumbnail image controls
function currentSlide(n){
    showSlides(SlideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("SlideProject");
    if (n > slides.length) {SlideIndex = 1};
    if (n < 1) {SlideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[SlideIndex-1].style.display = "flex";
};