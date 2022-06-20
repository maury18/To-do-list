const editTasks = (taskContainer, task) => {
  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.classList.add('editInput');
  editInput.value = task.textContent;
  taskContainer.replaceChild(editInput, task);
  editInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const taskContainers = document.querySelectorAll('.new-task--container');
      const taskData = JSON.parse(localStorage.getItem('list'));
      for (let i = 0; i < taskContainers.length; i += 1) {
        if (taskContainers[i].classList.contains('checked-container')) {
          taskData[i].description = editInput.value;
          localStorage.setItem('list', JSON.stringify(taskData));
        }
      }
      editInput.parentElement.classList.remove('checked-container');
      taskContainer.replaceChild(task, editInput);
      task.textContent = editInput.value;
      window.location.reload();
    }
  });
};
export default editTasks;