import React, { Component } from "react";
import "../sass/ProjectContentInfo.css";
import { getFinalBidPrice } from '../utils/utils';

class ProjectContentInfo extends Component {

  render() {
    const selectedProject = this.props ? this.props.selectedProject : {};
    const bidsList = this.props ? this.props.bidsList : [];
    // const checkDateValidity = this.props ? this.props.checkDateValidity : null;
    const showFinalBidPrice =
      this.props && this.props.checkDateValidity
        ? "hide-final-price"
        : "show-final-price";   
    const finalBidDetails = getFinalBidPrice(this.props.bidsList, selectedProject);

    return (
      <div className="project-info-display">
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

        <div>
          {bidsList &&
            bidsList.map(bid => {
              if (bid.projectID === selectedProject.projectInfo.projectID) {
                return (
                  <ul key={bid.projectID} className="collection">
                    <BidList bid={bid} selectedProject={selectedProject} />
                  </ul>
                );
              }
              return null;
            })}
        </div>
      </div>
    );
  }
}

const BidList = ({ bid } = this.props) => {
  return (
    <div>
      {bid.bidPosts.map(post => {
        return (
          <li key={post.bidID} className="bid-item">
            <div className="bid-item-info">
              <div>
                <label className="bid-item-label">Bid Price : </label>
                {'$'+post.bidPrice}
              </div>
              <div>
                <label className="bid-item-label"> Bid Price Type : </label>
                {post.bidPriceType}
              </div>
              <div>
                <label className="bid-item-label">Name : </label>
                {post.bidderDetails.bidderName}
              </div>
              <div>
                <label className="bid-item-label"> Contact : </label>
                {post.bidderDetails.bidderContact}
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default ProjectContentInfo;
