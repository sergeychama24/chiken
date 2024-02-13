import './pages/index.css';

const slides = document.querySelectorAll('.slider__slide');
const slidesPagination = document.querySelector('.slider__pagination');

let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide) => {
        slide.classList.remove('slider__slide--active');
    })
    slides[n].classList.add('slider__slide--active');
}

function updatePagination() {
    slidesPagination.innerHTML = '';
    slides.forEach((slide, index) => {
        const dot = document.createElement("span");
        dot.classList.add('slider__pagination-item');
        if (index === currentSlide) {
            dot.classList.add('slider__pagination-item--is-active');
        }

        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            updatePagination();
        });
        slidesPagination.appendChild(dot);
    })
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    updatePagination();
}

setInterval(nextSlide, 4000);

showSlide(currentSlide);
updatePagination();