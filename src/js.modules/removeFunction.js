/* eslint-disable arrow-parens */
/* eslint-disable no-multi-assign */
/* eslint-disable no-return-assign */
const removeTasks/* removeTodo */ = (task) => {
  const taskContainer/* todosMaincontainer */ = document.querySelector('.tasks-container');
  taskContainer.removeChild(task);
  let count = 0;
  const taskData/* localData */ = JSON.parse(localStorage.getItem('list'));
  const data = Array.from(taskData).filter(i => i.completed === false);
  data.map(i => i.index = count += 1);
  localStorage.setItem('list', JSON.stringify(data));
};
export default removeTasks;