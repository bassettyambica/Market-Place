import React, { Component } from "react";

export default class BidList extends Component {
    
    renderBidItem(bid) {
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
    }

    render() {
        const {bidsList, selectedProject} = this.props;

    return (
        <div>
        {bidsList &&
          bidsList.map(bid => {
            if (bid.projectID === selectedProject.projectInfo.projectID) {
              return (
                <ul key={bid.projectID} className="bidList collection">
                    {this.renderBidItem(bid)}
                </ul>
              );
            }
            return null;
          })}
      </div>
        )
    }
}