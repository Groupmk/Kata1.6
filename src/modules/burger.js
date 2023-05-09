import { menu, menuBtn, close, body } from "./elements";


menuBtn.addEventListener('click', () => {
	menu.classList.add('active')
	body.classList.add('body-overflow')
	elem.setAttribute('inert', 'inert')
	atr.setAttribute('inert', 'inert')
})

close.addEventListener('click', () => {
	menu.classList.remove('active');
	body.classList.toggle('body-overflow')
	elem.removeAttribute('inert')
	atr.removeAttribute('inert')
})

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		menu.classList.remove('active') 
			body.classList.remove('body-overflow')
			elem.removeAttribute('inert')
	atr.removeAttribute('inert')
	}
})

window.addEventListener('click', targetClose => { 
	const target = targetClose.target 
	if (target.closest('.burger__menu')) { 
		if(!target.closest('.burger__overlay')){
			menu.classList.toggle('active') 
			body.classList.toggle('body-overflow')
			elem.removeAttribute('inert')
	atr.removeAttribute('inert')
		}
	}
  })