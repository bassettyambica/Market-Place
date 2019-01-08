import React, { Component } from "react";
import "../sass/ProjectContentInfo.css";

class ProjectContentInfo extends Component {
  constructor(props) {
    super(props);
  }
  getFinalBidPrice = (bidsList, selectedProject) => {
    let minPrice;
    if (selectedProject && bidsList) {
      bidsList &&
        bidsList.forEach(bid => {
          if (bid.projectID === selectedProject.projectInfo.projectID) {
            bid.bidPosts.forEach((post, index) => {
              let price = parseInt(post.bidPrice.split("$")[0]);
              minPrice = index === 0 ? price : minPrice;
              minPrice = price <= minPrice ? price : minPrice;
            });
          }
        });
    }

    return minPrice;
  };

  render() {
    const selectedProject = this.props ? this.props.selectedProject : {};
    const bidsList = this.props ? this.props.bidsList : [];
    // const checkDateValidity = this.props ? this.props.checkDateValidity : null;
    const showFinalBidPrice =
      this.props && this.props.checkDateValidity
        ? "hide-final-price"
        : "show-final-price";

    return (
      <div className="project-info-display">
        <p>{selectedProject.projectInfo.projectDesc}</p>
        <div>
          <lable className="bid-item-label"> Bid End Date : </lable>
          {selectedProject.projectDeadline.endDate}
        </div>
        <div>
          <lable className="bid-item-label"> Bid End Time Type : </lable>
          {selectedProject.projectDeadline.endTime}
        </div>
        <div className={showFinalBidPrice}>
          <div>
            <lable className="bid-item-label"> Final bid price : $</lable>
            {this.getFinalBidPrice(bidsList, selectedProject)}
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
                <lable className="bid-item-label">Bid Price : </lable>
                {post.bidPrice}
              </div>
              <div>
                <lable className="bid-item-label"> Bid Price Type : </lable>
                {post.bidPriceType}
              </div>
              <div>
                <lable className="bid-item-label">Name : </lable>
                {post.bidderDetails.bidderName}
              </div>
              <div>
                <lable className="bid-item-label"> Contact : </lable>
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
