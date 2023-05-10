import { btnChat, formMenu, formClose, btnChatServices, body, burgerBtnChat, modalForm } from "./elements";

function btnChatOpen(){
	formMenu.classList.add('active')
	body.classList.add('body-overflow')
	elem.setAttribute('inert', 'inert')
	atr.setAttribute('inert', 'inert')
}

function burgerBtnChatOpen(){
	formMenu.classList.add('active')
	body.classList.add('body-overflow')
	elem.setAttribute('inert', 'inert')
	atr.setAttribute('inert', 'inert')
}

function btnChatServicesOpen(){
	formMenu.classList.add('active')
	body.classList.add('body-overflow')
	elem.setAttribute('inert', 'inert')
	atr.setAttribute('inert', 'inert')
}
function formCloseOf(){
	formMenu.classList.remove('active');
	body.classList.remove('body-overflow')
	elem.removeAttribute('inert')
	atr.removeAttribute('inert')
}

function keydownFunc(e){
	if (e.key === 'Escape' && e.keyCode === 27) {
		formMenu.classList.remove('active') 
			body.classList.remove('body-overflow')
			elem.removeAttribute('inert')
			atr.removeAttribute('inert')
	}
}

function targetCloseForm(target){ 
	const targetForm = target.target 
	if (targetForm.closest('.modal-form__menu')) { 
		if(!targetForm.closest('.modal-form__inner')){
			formMenu.classList.remove('active') 
			body.classList.remove('body-overflow')
			elem.removeAttribute('inert')
			atr.removeAttribute('inert')
		}
	}
  }

  function setFocus() {
	modalForm.setAttribute('tabindex', '1');
	modalForm.focus();
  }

  btnChat.addEventListener('click', btnChatOpen)
  burgerBtnChat.addEventListener('click', burgerBtnChatOpen)
  btnChatServices.addEventListener('click', btnChatServicesOpen)
  formClose.addEventListener('click', formCloseOf)
  document.addEventListener('keydown', keydownFunc)
  window.addEventListener('click', targetCloseForm)
  setFocus()