const dropValue = document.querySelector('.dropdown__value');
const dropdown = document.querySelector('.dropdown');
const dropList = document.querySelector('.dropdown__list');
const dropLink = document.querySelectorAll('.dropdown__link');
const arrLink = Array.from(dropLink);

dropdown.addEventListener('click', menuActive);

function menuActive() {
    dropList.classList.toggle('dropdown__list_active');
}
arrLink.forEach((el) => {
    el.addEventListener('click', (event) => {
        event.preventDefault();
        dropValue.textContent = el.textContent;
    })
});