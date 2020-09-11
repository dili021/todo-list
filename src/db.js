// eslint-disable-next-line func-names
const database = (function () {
  return {
    storage: JSON.parse(localStorage.getItem('todos'))
      ? JSON.parse(localStorage.getItem('todos'))
      : [],
    createProject(name) {
      const todos = [];
      return {
        name,
        todos,
        createTodo(data) {
          const { title } = data;
          if (!this.todos.some(todo => todo.title === title)) {
            this.todos.push(data);
            const idx = database.storage.indexOf(this);
            database.storage[idx] = this;
            database.updateStorage();
            return true;
          }
          return false;
        },

        editTodo(newTodo) {
          const {
            title, description, priority, dueDate,
          } = newTodo;
          let idx = this.todos.indexOf(newTodo);
          this.todos[idx] = {
            title,
            description,
            dueDate,
            priority,
          };
          idx = database.storage.indexOf(this);
          database.storage[idx] = this;
          database.updateStorage();
        },

        deleteTodo(todoTitle) {
          this.todos = this.todos.filter(item => item.title !== todoTitle);
          const idx = database.storage.indexOf(this);
          database.storage[idx] = this;
          database.updateStorage();
        },
      };
    },
    // end of createProject
    updateStorage() {
      localStorage.setItem('todos', JSON.stringify(this.storage));
    },

    addProjectToStorage(project) {
      if (!this.storage.some(item => item.name === project.name)) {
        this.storage.push(project);
        this.updateStorage();
        return true;
      }
      return false;
    },

    deleteProject(project) {
      this.storage = this.storage.filter(item => item.title !== project.title);
    },

  };
}());

const defaultProject = database.createProject('Default Project');
database.addProjectToStorage(defaultProject);
export { defaultProject, database };