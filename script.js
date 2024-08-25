let currentSlide = 0;
let currentSlide2 = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}


function showSlide2(index) {
    const slides = document.querySelectorAll('.carousel-item-2');
    if (index >= slides.length) {
        currentSlide2 = 0;
    } else if (index < 0) {
        currentSlide2 = slides.length - 1;
    } else {
        currentSlide2 = index;
    }
    const offset = -currentSlide2 * 100;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function nextSlide2(){
    showSlide2(currentSlide2 + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function prevSlide2() {
    showSlide2(currentSlide2 - 1);
}

// Initialize the carousel
showSlide(currentSlide);
showSlide2(currentSlide2);

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});