import { combineReducers } from 'redux';
import projects from './projects';
import bids from './bids';

export default combineReducers({
    projects,
    bids
});
