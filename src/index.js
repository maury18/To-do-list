/* eslint-disable arrow-parens */
/* eslint-disable no-use-before-define */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */

/* All Functions */
import './style.css';
import editTasks from './js.modules/editFunction.js';
import removeTasks from './js.modules/removeFunction.js';
import removeAllTasks from './js.modules/removeALlfunction';

/* All HTML References */
const section = document.querySelector('section');
const taskInput/* textInput */ = document.querySelector('input');
const /* todosMainContainer */tasksContainer = document.querySelector('.tasks-container'/*.todos-container*/);
const completedTasks/* clearAllbtn */ = document.querySelector('button');

/* Class Object */
class MyList/* MyObject */ {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const listArray/* myArray */ = [];
const addTask/* addTodo */ = (taskValue) => {
  const newTaskContainer/* todoContainer */ = document.createElement('div');
  newTaskContainer.classList.add('new-task--container'/* todoContainer */);
  newTaskContainer.innerHTML += `
    <input type="checkbox" class="check-task">
    <span>${taskValue}</span>
    <i class="fa-solid fa-ellipsis-vertical"></i>
    <i class="fa-solid fa-trash-can"></i>
  `;
  tasksContainer/* todosMaincontainer */.appendChild(newTaskContainer/* todoContainer */);

  const checkbox = document.querySelectorAll('.check-task'/* .checkbox */);
  /* VAMOS AQUÍ */
  checkbox.forEach((i) => {
    i.addEventListener('click', () => {
      i.parentElement.classList.toggle('checked-container'/* checkedContainer */);
      i.nextElementSibling.classList.toggle('task-checked'/* checkTodo */);
      i.parentElement.lastElementChild.classList.toggle('trash-display'/* trash-active */);
      i.parentElement.lastElementChild.previousElementSibling.classList.toggle('dot-display'/* edit-disable */);
      updatingData();
    });
  });

  const storageObject/* object */ = new MyList/* MyObject */(taskValue, false, checkbox.length - 1);
  listArray/* myArray */.push(storageObject/* object */);
  localStorage.setItem('list', JSON.stringify(listArray/* myArray */));

  const editIcons = document.querySelectorAll('.fa-ellipsis-vertical');
  editIcons.forEach(i => {
    i.addEventListener('click', () => {
      i.parentElement.classList.add('checked-container');
      editTasks/* editTodo */(newTaskContainer, i.previousElementSibling);
    });
  });

  const removeTask/* removeIcons */ = document.querySelectorAll('.fa-trash-can');
  removeTask/*removeIcons */.forEach(i => {
    i.addEventListener('click', () => {
      removeTasks(i, parentElement);
    });
  });
};

/* Adding task Event */
taskInput/*textInput*/.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && taskInput.value) {
    addTask(taskInput.value);
    taskInput.value = null;
  }
});

const takeData/* getFromlocal */ = () => {
  const data = JSON.parse(localStorage.getItem('list'));
  data.map(i => {
    listArray/* myArray */.push(i);
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
    editIcons.forEach(i => {
      i.addEventListener('click', () => {
        editTasks(newTaskContainer, i.previousElementSibling);
        // i.parentElement.classList.add('checked-container');
      });
    });
  });

  const checkbox = document.querySelectorAll('.check-task');
  checkbox.forEach(i => {
    i.addEventListener('click', () => {
      i.parentElement.classList.toggle('checked-container');
      i.nextElementSibling.classList.toggle('task-checked');
      i.parentElement.lastElementChild.classList.toggle('trash-display');
      i.parentElement.lastElementChild.previousElementSibling.classList.toggle('dot-display');
      updatingData();
    });
  });

  const removeTask = document.querySelectorAll('.fa-trash-can');
  removeTask.forEach(i => {
    i.addEventListener('click', () => {
      removeTasks(i.parentElement);
    });
  });

  localStorage.setItem('list', JSON.stringify(listArray/* myArray */));
};

window.addEventListener('load', takeData/* getFromlocal */);

const updatingData/* updateLocal */ = () => {
  const taskData/* localData */ = JSON.parse(localStorage.getItem('list'));
  const tasks = document.querySelectorAll('span');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].classList.contains('task-checked')) {
      taskData[i].completed = true;
    } else {
      taskData[i].completed = false;
    }
  }
  localStorage.setItem('list', JSON.stringify(taskData));
};

completedTasks.addEventListener('click', removeAllTasks);