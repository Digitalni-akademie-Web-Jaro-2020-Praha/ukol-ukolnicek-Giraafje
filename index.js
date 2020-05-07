'use strict';

console.log('funguju!');

let tasks = [];

const updateTasks = () => {
  const toDoElm = document.querySelector(".todo__tasks");
  toDoElm.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    toDoElm.innerHTML +=
      `<div class="task">${tasks[i]}</div>`
  }
}

const addNewTask = () => {
  const inputElm = document.querySelector(".new-task");
  if (inputElm.value) {
    tasks.push(inputElm.value);
    updateTasks();
  }
}

document.querySelector("button").addEventListener('click', addNewTask)




