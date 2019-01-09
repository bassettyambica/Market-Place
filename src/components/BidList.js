import React, { Component } from "react";
import "../sass/BidList.css";

export default class BidList extends Component {

    renderBidItem(bid) {
        return (
            <div>
              {bid.bidPosts.map(post => {
                return (
                  <li key={post.bidID} className="bid-item">
                    <div className="bid-item-info">
                      <div>
                        <label className="bid-item-label">Name : </label>
                        <span className="bid-item-name">{post.bidderDetails.bidderName}</span>
                      </div>
                      <div>
                        <label className="bid-item-contact"> Contact : </label>
                        {post.bidderDetails.bidderContact}
                      </div>
                      <div>
                        <label className="bid-item-price">Bid Price : </label>
                        {'$'+post.bidPrice}
                      </div>
                      <div>
                        <label className="bid-item-type"> Bid Price Type : </label>
                        {post.bidPriceType}
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
        <div className="bid-container">
        {bidsList &&
          bidsList.map(bid => {
            if (bid.projectID === selectedProject.projectInfo.projectID) {
              return (
                <ul key={bid.projectID} className="bid-list">
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