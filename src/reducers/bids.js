import { TOGGLE_BID_FORM, ADD_BID } from '../actions/index';
import { bidsList } from '../utils/constants';
import { addBidPostToList } from '../utils/utils';

const INITIAL_STATE = {
    showBidForm: false,
    bidsList
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_BID_FORM:
            return Object.assign({}, state, { showBidForm: !state.showBidForm });
        case ADD_BID:
            return Object.assign({}, state,  { bidsList: [...bidsList, addBidPostToList(action.bidDetails)] }); 
        default:
            return state;
    }
}
