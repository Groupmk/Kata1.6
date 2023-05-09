import { btnCall , callerMenu, callerClose, btnCallServices, body, burgerBtnTel } from "./elements";

btnCall.addEventListener('click', () => {
	callerMenu.classList.add('active')
	body.classList.add('body-overflow')
	elem.setAttribute('inert', 'inert')
})

burgerBtnTel.addEventListener('click', () => {
	callerMenu.classList.add('active')
	body.classList.add('body-overflow')
	elem.setAttribute('inert', 'inert')
})

btnCallServices.addEventListener('click', () => {
	callerMenu.classList.add('active')
	body.classList.add('body-overflow')
	elem.setAttribute('inert', 'inert')
})

callerClose.addEventListener('click', () => {
	callerMenu.classList.remove('active');
	body.classList.remove('body-overflow')
	elem.removeAttribute('inert')
})

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		callerMenu.classList.remove('active') 
		body.classList.remove('body-overflow')
		elem.removeAttribute('inert')
	}
})

window.addEventListener('click', targetCloseCaller => { 
	const targetCaller = targetCloseCaller.target 
	if (targetCaller.closest('.modal-caller__menu')) { 
		if(!targetCaller.closest('.modal-caller__inner')){
			callerMenu.classList.remove('active') 
			body.classList.remove('body-overflow')
			elem.removeAttribute('inert')
		}
	}
  })

  function setModalFocus() {
	modalCall.setAttribute('tabindex', '1');
	modalCall.focus();
  }
  setModalFocus()