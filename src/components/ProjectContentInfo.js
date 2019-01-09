import React, { Component } from "react";
import "../sass/ProjectContentInfo.css";
import { getFinalBidPrice } from '../utils/utils';

class ProjectContentInfo extends Component {

  render() {
    const selectedProject = this.props ? this.props.selectedProject : {};
    // const checkDateValidity = this.props ? this.props.checkDateValidity : null;
    const showFinalBidPrice =
      this.props && this.props.checkDateValidity
        ? "hide-final-price"
        : "show-final-price";   
    const finalBidDetails = getFinalBidPrice(this.props.bidsList, selectedProject);

    return (
      <div className="project-info-display">
        <h1 className='project-title'>{selectedProject.projectInfo.projectTitle} </h1>
        <p>{selectedProject.projectInfo.projectDesc}</p>
        <div>
          <label className="bid-item-label"> Project Estimated Hours : </label>
          {selectedProject.projectInfo.projectHours + ' Hrs'}
        </div>
        <div>
          <label className="bid-item-label"> Bid End Date : </label>
          {selectedProject.projectDeadline.endDate}
        </div>
        <div>
          <label className="bid-item-label"> Bid End Time : </label>
          {selectedProject.projectDeadline.endTime}
        </div>
        <div className={showFinalBidPrice}>
          <div>
            <label className="bid-item-label"> Final bid price : $</label>
            {`${finalBidDetails.minPrice} by ${finalBidDetails.bidderName}`}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectContentInfo;
