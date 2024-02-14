import {slides, slidesPagination} from '../index'

export let currentSlide = 0;

export function showSlide(n) {
    slides.forEach((slide) => {
        slide.classList.remove('slider__slide--active');
    })
    slides[n].classList.add('slider__slide--active');
}

export function updatePagination() {
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

export function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    updatePagination();
}