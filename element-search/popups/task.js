const modalMain = document.getElementById('modal_main');
const closed = document.querySelectorAll('.modal__close');
modalMain.classList.add('modal_active');
for (let i of closed) {
    i.onclick = function () {
        modal = this.closest('.modal');
        modal.classList.remove('modal_active');
    }
}
const modalSuccess = document.getElementById('modal_success');
const showSuccess = modalMain.querySelector('.show-success');

showSuccess.onclick = function () {
    modal = this.closest('.modal');
    modal.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}