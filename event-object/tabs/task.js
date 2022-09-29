const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((el, i) => {    
    el.addEventListener('click', () => {
        document.querySelector('.tab_active').classList.remove('tab_active');
        document.querySelector('.tab__content_active').classList.remove('tab__content_active');
        tabs[i].classList.add('tab_active');
        tabsContent[i].classList.add('tab__content_active');
    })
});