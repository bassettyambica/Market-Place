/**
 * 
 * @param {*} projectList 
 * @param {*} projectID 
 * Fn : To return project from list based on ID.
 */
export function fetchProjectContent(projectList, projectID) {
    return projectList.filter(project => {
        return project.projectInfo.projectID === projectID;
    });
}

export function uuidv4() {
    return Math.random().toString(36).substring(2);
}

/**
 * 
 * @param {*} projectDetails 
 * Fn: To add new project to state.
 */
export function addProjectToList(projectDetails) {
    let newProject = {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": projectDetails.projectTitle,
            "projectDesc": projectDetails.projectDesc,
            'projectHours': projectDetails.projectHours
        },
        "projectDeadline": {
            "endDate": projectDetails.endDate,
            "endTime": projectDetails.endTime
        },
        "projectBids": {
            "bidsCount": "0"
        }
    };
    return newProject;
}

/**
 * 
 * @param {*} bidsList 
 * @param {*} bidDetails 
 * Fn : To add a new bidpost to associated project if found. Else create a New bid in bidlist
 */
export function addBidPostToList(bidsList, bidDetails) {
    let newBid = {
        "bidID": uuidv4(),
        "bidderDetails": {
            "bidderName": bidDetails.bidderName,
            "bidderContact": bidDetails.bidderContact
        },
        "bidPriceType": bidDetails.bidPriceType,
        "bidPrice": bidDetails.bidPrice
    }

    let matchedProject = bidsList.filter(item => {
        return (item.projectID === bidDetails.projectID);
    });

    if (matchedProject.length > 0) {
        matchedProject[0].bidPosts.push(newBid);
        const newBidList = Object.assign([], bidsList, matchedProject[0]);
        return newBidList;
    }
    else {
        const newFinalBid = {
            "projectID": bidDetails.projectID,
            "bidPosts": [newBid]
        }

        bidsList.push(newFinalBid)
        return bidsList
    }
}

/**
 * 
 * @param {*} endDate 
 * @param {*} endTime 
 * Fn : To return if the input date is valid and greater than current date and time.
 */
export function validateBidEligibility(endDate, endTime) {
    let endDateArray = endDate.split('-');
    let endTimeArray = endTime.split(':');
    let currentDate = new Date();

    let calcDate = new Date(endDateArray[0], endDateArray[1] - 1, endDateArray[2], endTimeArray[0], endTimeArray[1]);

    return (currentDate <= calcDate) ? true : false;

}

/**
 * 
 * @param {*} bidsList 
 * @param {*} selectedProject 
 * Fn : To return a final bid price:
 * If bid type = hourly => price * hours from selected project
 * If bid type = fixed => return price.
 */
export function getFinalBidPrice(bidsList, selectedProject) {
    let minPrice = 0;
    let bidderName = '';

    if (selectedProject && bidsList) {
        bidsList &&
            bidsList.forEach(bid => {
                if (bid.projectID === selectedProject.projectInfo.projectID) {
                    bid.bidPosts.forEach((post, index) => {
                        let price = (post.bidPriceType === 'hourly') ? parseInt(selectedProject.projectInfo.projectHours) * parseInt(post.bidPrice) : parseInt(post.bidPrice);
                        minPrice = index === 0 ? price : minPrice;
                        //   minPrice = price <= minPrice ? price : minPrice;
                        if (price <= minPrice) {
                            minPrice = price;
                            bidderName = post.bidderDetails.bidderName;
                        }
                    });
                }
            });
    }
    return {
        minPrice,
        bidderName
    };
};


/**
 * 
 * @param {*} type 
 * @param {*} val 
 * Fn : To validate input fields.
 */
export function validateInputFields(type, val) {
    let error = '', reGex;
    switch (type) {
        case 'numeric':
            reGex = new RegExp(/^\d+$/);
            error = !reGex.test(val) ? `should be a number` : '';
            break;
        case 'string':
            reGex = new RegExp(/^[a-z][a-z.\s-]$/i);
            error = !reGex.test(val) ? `should be only letters` : '';
            break;
        case 'date':
            reGex = new RegExp(/^\d{4}[./-]\d{2}[./-]\d{2}$/);
            error = !reGex.test(val) ? `should be in format xxxx/xx/xx` : '';
            break;

        case 'phone':
            reGex = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
            error = !reGex.test(val) ? `should be in fomrat XXX-XXX-XXXX` : '';
            break;

        default: return error;
    }

    return error;
}