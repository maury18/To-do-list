/* eslint-disable arrow-parens */
const editTasks/* editTodo */ = (taskContainer/* todoContainer */, task/* todo */) => {
  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.classList.add('editInput');
  editInput.value = task.textContent;
  taskContainer.replaceChild(editInput, task);
  editInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      const taskContainers/* todoContainers */ = document.querySelectorAll('.new-task--container'/* todoContainer */);
      const taskData/* localData */ = JSON.parse(localStorage.getItem('list'));
      for (let i = 0; i < taskContainers/* todoContainers */.length; i += 1) {
        if (taskContainers/* todoContainers */[i].classList.contains('checked-container'/* checkedContainer */)) {
          taskData/* locaData */[i].description = editInput.value;
          localStorage.setItem('list', JSON.stringify(taskData/* locaData */));
        }
      }
      editInput.parentElement.classList.remove('checked-container'/* checkedContainer */);
      taskContainer/* todoContainer */.replaceChild(task/* todo */, editInput);
      task.textContent = editInput.value;
    }
  });
};
export default editTasks;