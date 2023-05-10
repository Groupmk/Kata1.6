import { menu, menuBtn, close, body } from "./elements";


function menuBtnOpen(){
	menu.classList.add('active')
	body.classList.add('body-overflow')
	elem.setAttribute('inert', 'inert')
	atr.setAttribute('inert', 'inert')
}

function closeOf(){
	menu.classList.remove('active');
	body.classList.toggle('body-overflow')
	elem.removeAttribute('inert')
	atr.removeAttribute('inert')
}

function keydownFunction(e){
	if (e.key === 'Escape' && e.keyCode === 27) {
		menu.classList.remove('active') 
		body.classList.remove('body-overflow')
		elem.removeAttribute('inert')
		atr.removeAttribute('inert')
	}
}

function targetCloseBt(ev){ 
	const target = ev.target 
	if (target.closest('.burger__menu')) { 
		if(!target.closest('.burger__overlay')){
			menu.classList.toggle('active') 
			body.classList.toggle('body-overflow')
			elem.removeAttribute('inert')
	atr.removeAttribute('inert')
		}
	}
  }

  menuBtn.addEventListener('click', menuBtnOpen)
  close.addEventListener('click', closeOf)
  document.addEventListener('keydown', keydownFunction)
  window.addEventListener('click', targetCloseBt)