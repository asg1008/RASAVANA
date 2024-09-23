const slides = document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
)
const goprev = () => {
    counter--;
    slideImg()
}

const gonext = () => {
    counter++;
    slideImg()
}
const slideImg = () => {
    const totalSlides = document.querySelectorAll('.images img').length;
    if (counter < 0) counter = totalSlides - 1;
    if (counter >= totalSlides) counter = 0;
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
document.getElementById('hamburger').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('show'); // Toggle the 'show' class
});
