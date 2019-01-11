import { ADD_BID } from '../actions/index';
import { bidsList } from '../utils/constants';
import { addBidPostToList } from '../utils/utils';

const INITIAL_STATE = {
    bidsList
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_BID:
            return Object.assign({}, state,  { bidsList: addBidPostToList(state.bidsList, action.bidDetails) }); 
        default:
            return state;
    }
}
