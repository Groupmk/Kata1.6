import { btnChat, formMenu, formClose, btnChatServices, body, burgerBtnChat, modalForm } from "./elements";

btnChat.addEventListener('click', () => {
	formMenu.classList.add('active')
	body.classList.add('body-overflow')
	elem.setAttribute('inert', 'inert')
	atr.setAttribute('inert', 'inert')
})

burgerBtnChat.addEventListener('click', () => {
	formMenu.classList.add('active')
	body.classList.add('body-overflow')
	elem.setAttribute('inert', 'inert')
	atr.setAttribute('inert', 'inert')
})

btnChatServices.addEventListener('click', () => {
	formMenu.classList.add('active')
	body.classList.add('body-overflow')
	elem.setAttribute('inert', 'inert')
	atr.setAttribute('inert', 'inert')
})


formClose.addEventListener('click', () => {
	formMenu.classList.remove('active');
	body.classList.remove('body-overflow')
	elem.removeAttribute('inert')
	atr.removeAttribute('inert')
})

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		formMenu.classList.remove('active') 
			body.classList.remove('body-overflow')
			elem.removeAttribute('inert')
			atr.removeAttribute('inert')
	}
})

window.addEventListener('click', targetCloseForm => { 
	const targetForm = targetCloseForm.target 
	if (targetForm.closest('.modal-form__menu')) { 
		if(!targetForm.closest('.modal-form__inner')){
			formMenu.classList.remove('active') 
			body.classList.remove('body-overflow')
			elem.removeAttribute('inert')
			atr.removeAttribute('inert')
		}
	}
  })

  function setFocus() {
	modalForm.setAttribute('tabindex', '1');
	modalForm.focus();
  }
  setFocus()