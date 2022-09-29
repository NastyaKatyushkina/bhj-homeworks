let interest = document.querySelectorAll('div.interests_main > ul > li > label > input');
interest.forEach(elem => {
    elem.addEventListener('change', () => {
        interestUp = elem.parentElement.parentElement.querySelectorAll('input');
        interestUp.forEach(el => {
            el.checked = elem.checked;
        })
    })
})