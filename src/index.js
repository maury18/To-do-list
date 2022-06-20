/* eslint-disable import/no-cycle */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* All Functions */
import './style.css';
import editTasks from './js.modules/editFunction.js';
import removeTasks from './js.modules/removeFunction.js';
import updatingData from './js.modules/updatingData';
import removeAllTasks from './js.modules/removeALlfunction';

/* All HTML References */
const taskInput = document.querySelector('input');
const tasksContainer = document.querySelector('.tasks-container');
const completedTasks = document.querySelector('button');

/* Class Object */
class MyList {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const listArray = [];
export default listArray;
const addTask = (taskValue) => {
  const newTaskContainer = document.createElement('div');
  newTaskContainer.classList.add('new-task--container');
  newTaskContainer.innerHTML += `
    <input type="checkbox" class="check-task">
    <span>${taskValue}</span>
    <i class="fa-solid fa-ellipsis-vertical"></i>
    <i class="fa-solid fa-trash-can"></i>
  `;
  tasksContainer.appendChild(newTaskContainer);

  const checkbox = document.querySelectorAll('.check-task');

  checkbox.forEach((i) => {
    i.addEventListener('click', () => {
      i.parentElement.classList.toggle('checked-container');
      i.nextElementSibling.classList.toggle('task-checked');
      updatingData();
    });
  });

  const storageObject = new MyList(taskValue, false, checkbox.length - 1);
  listArray.push(storageObject);
  localStorage.setItem('list', JSON.stringify(listArray));
};
/* Adding task Event */
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && taskInput.value) {
    addTask(taskInput.value);
    taskInput.value = null;
  }
});

const takeData = () => {
  const data = JSON.parse(localStorage.getItem('list'));
  data.map((i) => {
    listArray.push(i);
    const newTaskContainer = document.createElement('div');
    newTaskContainer.classList.add('new-task--container');
    newTaskContainer.innerHTML += `
    <input type="checkbox" class="check-task">
    <span>${i.description}</span>
    <i class="fa-solid fa-ellipsis-vertical"></i>
    <i class="fa-solid fa-trash-can"></i>
    `;
    tasksContainer.appendChild(newTaskContainer);

    const editIcons = document.querySelectorAll('.fa-ellipsis-vertical');
    editIcons.forEach((i) => {
      i.addEventListener('click', () => {
        editTasks(newTaskContainer, i.previousElementSibling);
        i.parentElement.classList.add('checked-container');
        i.parentElement.lastElementChild.classList.toggle('trash-display');
        updatingData();
      });
    });
  });

  const checkbox = document.querySelectorAll('.check-task');
  checkbox.forEach((i) => {
    i.addEventListener('click', () => {
      i.parentElement.classList.toggle('checked-container');
      i.nextElementSibling.classList.toggle('task-checked');
      updatingData();
    });
  });

  const removeTask = document.querySelectorAll('.fa-trash-can');
  removeTask.forEach((i) => {
    i.addEventListener('click', () => {
      removeTasks(i.parentElement);
    });
  });

  localStorage.setItem('list', JSON.stringify(listArray));
};
window.addEventListener('load', takeData);
completedTasks.addEventListener('click', removeAllTasks);
