import { projectList, bidsList } from './constants';

export function fetchProjectContent(projectList, projectID) {
    return projectList.filter(project => {
        return project.projectInfo.projectID === projectID;
    });
}

export function uuidv4() {
    return Math.random().toString(36).substring(2);
}

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
    projectList.push(newProject);
    return newProject;
}

export function addBidPostToList(bidDetails) {
    let newBid = {
        "bidID": uuidv4(),
        "bidderDetails": {
            "bidderName": bidDetails.bidderName,
            "bidderContact": bidDetails.bidderContact
        },
        "bidPriceType": bidDetails.bidPriceType,
        "bidPrice": bidDetails.bidPrice
    }
    bidsList.forEach(bid => {
        if (bid.projectID === bidDetails.projectID) {
            bid.bidPosts.push(newBid);
        }
    });

    return newBid;
}

export function validateBidEligibility(endDate, endTime) {
    let endDateArray = endDate.split('-');
    let endTimeArray = endTime.split(':');
    let currentDate = new Date();

    let calcDate = new Date(endDateArray[0], endDateArray[1] - 1, endDateArray[2], endTimeArray[0], endTimeArray[1]);

    return (currentDate <= calcDate) ? true : false;

}
// returns bid with lowest bid price (based on hourly and flat rate) from the list of bids for a project 
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