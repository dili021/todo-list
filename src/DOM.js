/* eslint-disable no-use-before-define */
import { defaultProject, database } from './db';

const projectsEl = document.querySelector('#projects');
const todosEl = document.querySelector('#todos');
const projectForm = document.querySelector('#project-form');
const projects = document.querySelectorAll('#project');
let currentProject = defaultProject;

const createProjectEl = project => {
  const node = document.createElement('div');
  node.innerHTML = `
  <h1 id="project">${project.name}</h1>
  `;
  return node;
};
const createTodoEl = project => {
  const listEl = document.createElement('div');
  listEl.className = 'todo-container';
  listEl.innerHTML = '';
  const form = document.createElement('form');
  form.id = 'todo-form';
  form.innerHTML = `
  <input type="text" required placeholder="title" id="title"/>
    <textarea id="description" cols="30" rows="10">description</textarea>
    <label for="dueDate">due date</label>
    <input type="date" id="dueDate"/>
    <select id="priority">
        <option value="" disabled selected>Priority</option>
        <option value="high">high</option>
        <option value="medium">medium</option>
        <option value="low">low</option>
    </select>
    <button type="submit">Add Todo</button>
  `;
  listEl.appendChild(form);
  const { todos } = project;
  todos.forEach(i => {
    const node = document.createElement('form');
    node.className = 'todo';
    node.id = `${i.title}`;
    node.innerHTML = `
      <h3>${i.title}</h3>
      <textarea type="text" rows="10" placeholder="description" id="description"/>${i.description}</textarea>
      <label for="priority">priority:</label>
      <label for="dueDate">due date:</label>
      <input type="date" placeholder="dueDate" value="${i.dueDate}" id="dueDate"/>
      <select id="priority">
        <option value="${i.priority}" selected>${i.priority}</option>
        <option value="high">high</option>
        <option value="medium">medium</option>
        <option value="low">low</option>
      </select>
      <button type="submit">X</button>
    `;
    listEl.appendChild(node);
  });
  return listEl;
};

const renderProjects = database => {
  projectsEl.innerHTML = '';
  database.storage.forEach(project => {
    projectsEl.appendChild(createProjectEl(project));
  });
  projectsEl.addEventListener('click', e => {
    if (e.target.id === 'project') {
      const {
        target: { textContent: project },
      } = e;
      setProject(project);
      renderProject(currentProject);
    }
  });
};

const renderProject = project => {
  todosEl.textContent = '';
  todosEl.appendChild(createTodoEl(project));
  // edit/delete todo listener
  createTodoListener(project);
  [...document.querySelectorAll('.todo')].forEach(todo => {
    todo.addEventListener('change', e => {
      const {
        currentTarget: {
          title: { value: title },
          description: { textContent: description },
          dueDate: { value: dueDate },
          priority: { value: priority },
        },
      } = e;
      const updatedTodo = {
        title, description, dueDate, priority,
      };
      project.editTodo(updatedTodo);
    });
    todo.addEventListener('submit', e => {
      e.preventDefault();
      project.deleteTodo(e.currentTarget.id);
      renderProject(currentProject);
    });
  });
};

function setProject(project) {
  const { storage } = database;
  [currentProject] = storage.filter(item => item.name === project);
}

function createTodoListener(project) {
  const todoForm = document.querySelector('#todo-form');
  todoForm.addEventListener('submit', e => {
    e.preventDefault();
    const {
      currentTarget: {
        title: { value: title },
        description: { textContent: description },
        dueDate: { value: dueDate },
        priority: { value: priority },
      },
    } = e;
    const todo = {
      title, description, dueDate, priority,
    };
    project.createTodo(todo);
    renderProject(project);
  });
}

// function addProjectListeners() {
//   [...document.querySelectorAll('#project')].forEach(el => el.addEventListener('click', e => {
//     setProject(e);
//     renderProject(currentProject);
//     createTodoListener(currentProject);
//   }));
// }


export {
  renderProjects,
  renderProject,
  projectsEl,
  projectForm,
  projects,
};
