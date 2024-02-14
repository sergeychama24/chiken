import './pages/index.css';
import {showSlide, nextSlide, updatePagination, currentSlide} from './components/slider';

export const slides = document.querySelectorAll('.slider__slide');
export const slidesPagination = document.querySelector('.slider__pagination');

//Запуск слайдера

setInterval(nextSlide, 4000);

showSlide(currentSlide);
updatePagination();