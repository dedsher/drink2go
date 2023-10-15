const menu = document.querySelector('.nav__list');
const burger = document.querySelector('.nav__toggle');

const onBurgerClick = () => {
	burger.classList.toggle('nav__toggle--not-active');
	burger.classList.toggle('nav__toggle--active');
	menu.classList.toggle('nav__list--active')
	console.log('click');
}

burger.addEventListener('click', onBurgerClick);
