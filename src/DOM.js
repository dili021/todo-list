const projectsEl = document.querySelector('#projects');
const form = document.querySelector('form');
const todosEl = document.querySelector('#todos');
const createProjectEl = project => {
    const node = document.createElement('div');
    node.innerHTML = `
  <h1 id="project">${project.title}</h1>
  `;
    return node;
};
const createListEl = project => {
    const listEl = document.createElement('div');
    const { todos } = project;
    todos.forEach(i => {
        const node = document.createElement('form');
        node.className = 'todo';
        node.id = `${i.title}`;
        node.innerHTML = `
      <h3>${i.title}</h3>
      <textarea type="text" rows="10" placeholder="description" id="description"/>${i.description}</textarea>
      <input type="text" placeholder="dueDate" value="${i.dueDate}" id="dueDate"/>
      <input type="text" placeholder="priority" value="${i.priority}" id="priority"/>
    `;
        listEl.appendChild(node);
    });
    return listEl;
};
const renderProjects = database => {
    database.storage.forEach(project => {
        projectsEl.appendChild(createProjectEl(project));
    });
};
const renderProjectTodos = project => {
    todosEl.textContent = '';
    todosEl.appendChild(createListEl(project));
    [...document.querySelectorAll('.todo')].forEach(todo => {
        todo.addEventListener('change', project.editTodo);
    });
};
form.addEventListener('submit', e => {
    e.preventDefault();
    const title = e.currentTarget.title.value;
    const desc = e.currentTarget.desc.value;
    const priority = e.currentTarget.priority.value;
    createTodo({ title, desc, priority });
});
export { renderProjects, renderProjectTodos, projectsEl };