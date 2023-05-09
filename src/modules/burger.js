const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.burger');
const close = document.querySelector('.burger__btn')

menuBtn.addEventListener('click', () => {
	menu.classList.add('active');
})

close.addEventListener('click', () => {
	menu.classList.remove('active');
})