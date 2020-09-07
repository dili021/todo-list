const database = (function () {
    let storage = [];
    return {
        createProject(title) {
            let todos = [];
            return {
                title,
                createTodo(title, description, dueDate, priority) {
                    let todo = { title, description, dueDate, priority };
                    !todos.some(todo => todo.title === title)
                        ? todos.push(todo)
                        : console.log('Todo exists');
                },
                editTodo(e) {
                    let [todo] = todos.filter(todo => todo.title === e.currentTarget.id);
                    let idx = todos.findIndex(i => i.title === todo.title);
                    let { description, dueDate, priority } = e.currentTarget;
                    description = description.textContent;
                    dueDate = dueDate.value;
                    priority = priority.value;
                    let { title } = todo;
                    todos[idx] = { title, description, dueDate, priority };
                },
                deleteTodo(todoTitle) {
                    todos = todos.filter(item => item.title !== todoTitle);
                },
                get todos() {
                    return todos;
                },
            };
        },
        // end of createProject
        addProjectToStorage(project) {
            !storage.some(item => item.title === project.title)
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
})();
const defaultProject = database.createProject('Default Project');
database.addProjectToStorage(defaultProject);
const proj2 = database.createProject('Todo list');
database.addProjectToStorage(proj2);
const proj3 = database.createProject('Project #3');
database.addProjectToStorage(proj3);
defaultProject.createTodo('todo #1', 'test todo', '10.05.2021', 'high');
defaultProject.createTodo('todo2', 'test todo2', '10.05.2021', 'high');
proj2.createTodo('x', 'y', 'z', 'so high');
database.deleteProject(proj3);
// defaultProject.deleteTodo('todo2');
export { database, defaultProject };