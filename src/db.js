/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */

const database = (function () {
  let storage = JSON.parse(localStorage.getItem('todos'))
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
          (!this.todos.some(todo => todo.title === title))
            ? this.todos.push(data)
            : false;
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
        },

        deleteTodo(todoTitle) {
          this.todos = this.todos.filter(item => item.title !== todoTitle);
        },
      };
    },
    // end of createProject
    updateStorage() {
      localStorage.setItem('todos', JSON.stringify(storage));
    },

    addProjectToStorage(project) {
      if (!storage.some(item => item.name === project.name)) {
        storage.push(project);
        this.updateStorage();
        return true;
      }
      return false;
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