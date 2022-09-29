const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.getElementById('tasks__add');

tasksAdd.addEventListener('click', (event) => {
    event.preventDefault();
    if (taskInput.value.trim().length > 0) {
        const task = document.createElement('div');
        task.classList.add('task');

        task.insertAdjacentHTML('beforeEnd', 
        	`<div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>`
            );
        taskInput.value = '';
        tasksList.appendChild(task);
        const removeButtom = task.querySelector('.task__remove');
        removeButtom.addEventListener('click', (event) => {
        event.currentTarget.closest('.task').remove();
        })
    }
})