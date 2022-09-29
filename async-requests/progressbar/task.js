const progress = document.getElementById( 'progress' );
let form = document.getElementById('form');
let input = form.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let file = input.files[0]; 
    let formData = new FormData();
    let xhr = new XMLHttpRequest();
    progress.value = 0;
    progress.max = file.size;
    formData.append('file', file);
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
    xhr.upload.onprogress = (e) => progress.value = e.loaded; 
    xhr.send(formData);
});