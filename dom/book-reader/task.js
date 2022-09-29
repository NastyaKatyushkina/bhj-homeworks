
const fontSize = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');
arrSize = Array.from(fontSize);

arrSize.forEach(element => {
    element.addEventListener('click', func);
    function func(event) {
        event.preventDefault();
        arrSize.forEach(element => {
            element.classList.remove('font-size_active');
            if (book.classList.contains('book_fs-small')) {
                book.classList.remove('book_fs-small');
            }
            if (book.classList.contains('book_fs-big')) {
                book.classList.remove('book_fs-big');
            }
            })
            element.classList.add('font-size_active');
            if (arrSize[0].classList.contains('font-size_active')) {
                book.classList.add('book_fs-small');
            }
            if (arrSize[2].classList.contains('font-size_active')) {
                book.classList.add('book_fs-big');
            }
    }
});