import './style.scss';
import { database, defaultProject } from './db';
import {
  projectForm,
  renderProjects,
  renderProject,
} from './DOM';


projectForm.addEventListener('submit', e => {
  e.preventDefault();
  const {
    currentTarget: {
      name: { value: name },
    },
  } = e;
  const project = database.createProject(name);
  database.addProjectToStorage(project);
  renderProjects(database);
});


renderProjects(database);
renderProject(defaultProject);