const deadCount = document.getElementById('dead');
const lostCount = document.getElementById('lost');

function hole(index) {
    return document.getElementById(`hole${index}`);
  }
  
for (let i = 1; i <= 9; i++) {
    hole(i).onclick = () => {
        if (hole(i).classList.contains('hole_has-mole')) {
            deadCount.textContent++;
        } else {
            lostCount.textContent++;
        }

        if (deadCount.textContent === '10') {
            alert('Вы выиграли!');
            deadCount.textContent = 0;
            lostCount.textContent = 0;
        } else if (lostCount.textContent === '5') {
            alert('Вы проиграли!');
            deadCount.textContent = 0;
            lostCount.textContent = 0;
        }
    }    
}