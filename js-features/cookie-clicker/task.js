const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');
let counterStart = 0;
let lastClick = 0;

function changeCookie() {
    let timeNow = Date.now();
    cookie.width = cookie.width === 200 ? 150 : 200;
    counterStart += 1;
    counter.textContent = counterStart;
    speed.textContent = +(1 / ((timeNow - lastClick) / 1000)).toFixed(2);
    lastClick = timeNow;
}

cookie.onclick = changeCookie;