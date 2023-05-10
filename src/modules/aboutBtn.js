import { btnOn, spanTab, spanDesctop,  aboutBtnClose, aboutBtnOn } from "./elements"

function btnClick(){
    spanTab.classList.toggle('btn-close')
    spanDesctop.classList.toggle('btn-close')
    aboutBtnOn.classList.toggle('btn-close')
    aboutBtnClose.classList.toggle('btn-close')
}
btnOn.addEventListener('click',btnClick)


  