/* eslint-disable no-return-assign */
/* eslint-disable no-multi-assign */
const removeTasks = (task) => {
  const taskContainer = document.querySelector('.tasks-container');
  taskContainer.removeChild(task);
  let count = 0;
  const taskData = JSON.parse(localStorage.getItem('list'));
  const data = Array.from(taskData).filter((i) => i.completed === false);
  data.map((i) => i.index = count += 1);
  localStorage.setItem('list', JSON.stringify(data));
  window.location.reload();
};
export default removeTasks;
