const images = document.getElementsByClassName("slider__item");
let cur_image = 0;
function sliderMove (direction) {
    if (direction === 1) {
        images[cur_image].className = 'slider__item';
        cur_image++;
        if(cur_image===images.length) {cur_image = 0}
        images[cur_image].className += ' slider__item_active';
    }
    if (direction === 0) {
        images[cur_image].className = 'slider__item';
        cur_image--;
        if(cur_image<0) {cur_image = (images.length-1)}
        images[cur_image].className += ' slider__item_active';
    }
}

const arrowClickNext = document.getElementsByClassName("slider__arrow_next");
const arrowClickPrev = document.getElementsByClassName("slider__arrow_prev");
arrowClickNext[0].onclick = function () {
    sliderMove(1);
}

arrowClickPrev[0].onclick = function () {
    sliderMove(0);
}