import { btnCall , callerMenu, callerClose, btnCallServices, body, burgerBtnTel } from "./elements";

function btnCallOn(){
	callerMenu.classList.add('active')
	body.classList.add('body-overflow')
	elem.setAttribute('inert', 'inert')
}

function burgerBtnTelOn(){
	callerMenu.classList.add('active')
	body.classList.add('body-overflow')
	elem.setAttribute('inert', 'inert')
}

function btnCallServicesOn(){
	callerMenu.classList.add('active')
	body.classList.add('body-overflow')
	elem.setAttribute('inert', 'inert')
}

function callerCloseOf(){
	callerMenu.classList.remove('active');
	body.classList.remove('body-overflow')
	elem.removeAttribute('inert')
}

function keydownEvent(e){
	if (e.key === 'Escape' && e.keyCode === 27) {
		callerMenu.classList.remove('active') 
		body.classList.remove('body-overflow')
		elem.removeAttribute('inert')
	}
}

function targetCloseCallerFunc(ev){ 
	const targetCaller = ev.target 
	if (targetCaller.closest('.modal-caller__menu')) { 
		if(!targetCaller.closest('.modal-caller__inner')){
			callerMenu.classList.remove('active') 
			body.classList.remove('body-overflow')
			elem.removeAttribute('inert')
		}
	}
  }

  function setModalFocus() {
	modalCall.setAttribute('tabindex', '1');
	modalCall.focus();
  }

  btnCall.addEventListener('click', btnCallOn)
  burgerBtnTel.addEventListener('click', burgerBtnTelOn)
  btnCallServices.addEventListener('click', btnCallServicesOn)
  callerClose.addEventListener('click', callerCloseOf)
  document.addEventListener('keydown', keydownEvent)
  window.addEventListener('click', targetCloseCallerFunc)
  setModalFocus()