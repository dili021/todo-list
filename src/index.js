import './style.scss';

import { projectsEl, renderProjects, renderProjectTodos } from './DOM.js';
import { database, defaultProject } from './db.js';
renderProjects(database);
renderProjectTodos(defaultProject);
projectsEl.addEventListener('click', e => {
    if (e.target.id === 'project') {
        const projectName = e.target.textContent;
        const [project] = database.storage.filter(
            project => project.title === projectName
        );
        renderProjectTodos(project);
    }
});
// init();
