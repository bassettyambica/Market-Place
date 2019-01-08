export const FETCH_PROJECT = 'FETCH_PROJECT';
export const ADD_PROJECT = 'ADD_PROJECT';
export const TOGGLE_BID_FORM = 'TOGGLE_BID_FORM';
export const ADD_BID = 'ADD_BID';

export const fetchProject = projectID => {
    return {
        type : FETCH_PROJECT,
        projectID
    };
}

export const addNewProject = projectDetails => {
    return {
        type : ADD_PROJECT,
        projectDetails
    };
}

export const toggleBidForm = () => {
    return {
        type : TOGGLE_BID_FORM
    }
}

export const addNewBid = bidDetails => {
    return {
        type : ADD_BID,
        bidDetails
    }
}