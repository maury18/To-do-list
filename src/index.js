/* eslint-disable no-unused-vars */
import './style.css';

const section = document.querySelector('section');
const taskInput = document.querySelector('input');
const tasksContainer = document.querySelector('.tasks-container');
const allTasksContainer = document.getElementById('tasks-container');
const completedTasks = document.querySelector('button');

/* class myList{
    constructor(description, completed, index){
        this.description = description;
        this.completed = completed;
        this.index = index;
    }
  }
  */
const list = [
  {
    description: 'wash dishes',
    completed: true,
    index: 1,
  },
  {
    description: 'make the bed',
    completed: true,
    index: 2,
  },
];
  /* const listArray = []; */
list.forEach((Element) => {
  const newTaskContainer = document.createElement('div');
  newTaskContainer.classList.add('new-task--container');
  newTaskContainer.innerHTML += `
   <div class="left-content">
      <input type="checkbox" ${Element.completed} class="check-task">
      <span>${Element.description}</span>
   </div>
   <div class="right-content">
      <i class="fa-solid fa-ellipsis-vertical"></i>
      <i class="fa-solid fa-trash-can"></i>
   </div>`;
  allTasksContainer.appendChild(newTaskContainer);
});