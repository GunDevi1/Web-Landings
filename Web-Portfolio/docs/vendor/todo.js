const task_input = document.querySelector('.todo__new-task')
const task_checkbox = document.querySelector('.todo__input-checkbox')
const task_list = document.querySelector('.todo__task-list')

tasks = []

task_input.addEventListener('keypress', function (event) {
	const task = {
		done: false,
	}

	if (event.key === 'Enter' && task_input.value.trim() !== '') {
		task.title = task_input.value.trim()

		tasks.push(task)

		const newTaskElement = document.createElement('li')
		newTaskElement.classList.add('todo__list-item')
		newTaskElement.id = tasks.length - 1
		newTaskElement.innerHTML = `<input type='checkbox' onclick='checkTask(${
			tasks.length - 1
		})' class='todo__input-checkbox'><span class='todo__task-text'>${
			task.title
		}</span>
		<button onclick='deleteTask(${
			tasks.length - 1
		})' class='todo__delete-button'><i class="fa-solid fa-xmark"></i></button>
	`

		task_list.appendChild(newTaskElement)

		task_input.value = ''
	}
})

function checkTask(id) {
	const task = document.getElementById(id)

	if (tasks[id]) {
		tasks[id].done
			? (task.style.textDecoration = 'none')
			: (task.style.textDecoration = 'line-through')
	}

	tasks[id].done = !tasks[id].done
}

function deleteTask(id) {
	const task = document.getElementById(id)

	if (task) {
		task.remove()
		tasks.splice(id, 1)
	}
}
