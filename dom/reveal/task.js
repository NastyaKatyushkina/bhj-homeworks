function reveal() {
    for (let i =0; i<reveals.length; i++)
    {
        if (window.innerHeight>reveals[i].getBoundingClientRect().top)
            {
                reveals[i].classList.add('reveal_active');
            }
    }
}
let reveals = document.getElementsByClassName('reveal');
document.addEventListener('scroll',reveal);