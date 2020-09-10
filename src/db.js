/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */

const database = (function () {
  let storage = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : [];

  return {
    createProject(name) {
      const todos = [];
      return {
        name,
        todos,
        createTodo(data) {
          const { title } = data;
          if (!this.todos.some(todo => todo.title === title)) {
            this.todos.push(data);
          } else {
            console.log('Todo exists');
          }
        },

        editTodo(newTodo) {
          const {
            title, description, priority, dueDate,
          } = newTodo;
          const idx = this.todos.indexOf(newTodo);
          this.todos[idx] = {
            title,
            description,
            dueDate,
            priority,
          };
          console.log(123);
        },

        deleteTodo(todoTitle) {
          this.todos = this.todos.filter(item => item.title !== todoTitle);
        },
      };
    },
    // end of createProject
    addProjectToStorage(project) {
      !storage.some(item => item.name === project.name)
        ? storage.push(project)
        : console.log('Project already exists');
    },
    deleteProject(project) {
      storage = storage.filter(item => item.title !== project.title);
    },
    get storage() {
      return storage;
    },
  };
}());

const defaultProject = database.createProject('Default Project');
database.addProjectToStorage(defaultProject);
export { defaultProject, database };