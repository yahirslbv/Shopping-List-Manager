
document.addEventListener('DOMContentLoaded', function() {
	const taskInput = document.getElementById('taskInput');
	const addTaskBtn = document.getElementById('addTaskBtn');
	const taskList = document.getElementById('taskList');

	function createTaskItem(text) {
		const li = document.createElement('li');
	li.className = 'task-item list-group-item d-flex align-items-center';

		const span = document.createElement('span');
		span.textContent = text;
		span.className = 'task-text';

	const editBtn = document.createElement('button');
	editBtn.textContent = 'Edit';
	editBtn.className = 'btn btn-warning btn-sm edit-btn';

	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = 'Delete';
	deleteBtn.className = 'btn btn-danger btn-sm delete-btn';

		editBtn.onclick = function() {
			const newText = prompt('Edit task:', span.textContent);
			if (newText !== null && newText.trim() !== '') {
				span.textContent = newText.trim();
			}
		};

		deleteBtn.onclick = function() {
			li.remove();
		};

		li.appendChild(span);
		li.appendChild(editBtn);
		li.appendChild(deleteBtn);
		return li;
	}

	addTaskBtn.addEventListener('click', function() {
		const text = taskInput.value.trim();
		if (text !== '') {
			const taskItem = createTaskItem(text);
			taskList.appendChild(taskItem);
			taskInput.value = '';
			taskInput.focus();
		}
	});

	taskInput.addEventListener('keydown', function(e) {
		if (e.key === 'Enter') {
			addTaskBtn.click();
		}
	});
});
