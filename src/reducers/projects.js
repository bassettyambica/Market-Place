import { FETCH_PROJECT, ADD_PROJECT } from '../actions/index';
import { projectList } from '../utils/constants';
import { fetchProjectContent, addProjectToList } from '../utils/utils';

const INITIAL_STATE = {
    projectList
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PROJECT:
            if (action.projectID) {
                const selectedProject = fetchProjectContent(projectList, action.projectID);
                return Object.assign({}, state, { selectedProject: selectedProject[0] });
            }
            break;
        case ADD_PROJECT:
             return Object.assign({}, state,  { projectList: [...projectList, addProjectToList(action.projectDetails)] }); 
        default:
            return state;
    }
}
