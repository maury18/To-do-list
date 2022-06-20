/* eslint-disable import/no-cycle */
/* eslint-disable no-return-assign */
/* eslint-disable no-multi-assign */
import listArray from '..';

const removeTasks = (task) => {
  const taskContainer = document.querySelector('.tasks-container');
  taskContainer.removeChild(task);
  listArray.splice(task, 1);
  localStorage.setItem('list', JSON.stringify(listArray));
};
export default removeTasks;
