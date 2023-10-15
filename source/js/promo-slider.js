const slider = document.querySelector('.promo-slider');
const prevButton = slider.querySelector('.promo-slider__arrow--prev');
const nextButton = slider.querySelector('.promo-slider__arrow--next');
const pagination = document.querySelector('.promo-slider__pagination');
const paginationPoints = Array.from(pagination.querySelectorAll('.promo-slider__point'));
const slides = Array.from(slider.querySelectorAll('.promo-card'));
const slideCount = slides.length;
let slideIndex = 0;
let prevPaginationPoint = paginationPoints[0];


// Функция для отслеживания кликов на пагинации
const onPaginationClick = ({target}) => {
	console.log('click');
	const clickedSlideNumber = Number(target.getAttribute('data-slide-num'));

	if (slideIndex !== clickedSlideNumber) {
		slideIndex = clickedSlideNumber;
		updateSlider();
	}
}

pagination.addEventListener('click', onPaginationClick);


// Функция для показа предыдущего слайда
const showPreviousSlide = () => {
	console.log('click');
	if ((slideIndex - 1) < 0) {
		return;
	}

  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
const showNextSlide = () => {
	console.log('click');
	if ((slideIndex + 1) > (slideCount - 1)) {
		return;
	}
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);


// Функция для обновления отображения слайдера
function updateSlider() {
	prevPaginationPoint.classList.remove('promo-slider__point--active');
	paginationPoints[slideIndex].classList.add('promo-slider__point--active');
	prevPaginationPoint = paginationPoints[slideIndex];
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });

}

export default updateSlider;
