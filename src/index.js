import './style.scss';
import { database, defaultProject } from './db';
import { renderProjects, renderProject } from './DOM';


renderProjects(database);
renderProject(defaultProject);