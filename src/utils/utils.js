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