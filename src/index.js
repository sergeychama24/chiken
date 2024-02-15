import './pages/index.css';
import {showSlide, nextSlide, updatePagination, currentSlide} from './components/slider';
import {changePoster} from './components/card'

export const slides = document.querySelectorAll('.slider__slide');
export const slidesPagination = document.querySelector('.slider__pagination');

//Запуск слайдера

setInterval(nextSlide, 5000);

showSlide(currentSlide);
updatePagination();


const dayButtons = document.querySelectorAll('.day-button');

dayButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.target;

        const targetList = document.getElementById(targetId);

        const isOpen = targetList.classList.contains('active');

        const allLists = document.querySelectorAll('.releases__list');
        allLists.forEach(list => list.classList.remove('active'));

        if(!isOpen){
            targetList.classList.add('active');
        }
    })
})
