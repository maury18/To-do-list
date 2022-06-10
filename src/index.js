/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import Data from './data.xml';
import Notes from './data.csv';

const section = document.querySelector('section');
const taskInput = document.querySelector('input');
const tasksContainer = document.querySelector('.tasks-container');
const completedTasks = document.querySelector('button');

class myList {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const listArray = [];
const addTask = (taskValue) => {
  const newTaskContainer = document.createElement('div');
  newTaskContainer.classList.add('new-task--container');
  newTaskContainer.innerHTML += `
   <div class="left-content">
      <input type="checkbox" class="check-task">
      <span>${taskValue}</span>
   </div>
   <div class="right-content">
      <i class="fa-solid fa-ellipsis-vertical"></i>
      <i class="fa-solid fa-trash-can"></i>
   </div>`;
  tasksContainer.appendChild(newTaskContainer);
};
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && taskInput.value) {
    e.preventDefault();
    addTask(taskInput.value);
    taskInput.value = null;
  }
});