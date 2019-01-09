import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../sass/ProjectDetails.css';
import ProjectContentInfo from './ProjectContentInfo';
import BidList from './BidList';
import { validateBidEligibility } from '../utils/utils';

class ProjectDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showBidForm: false,
           
            bidDetails : {
                'bidderName' : '',
                'bidderContact' : '',
                'bidPriceType' : 'hourly',
                'bidPrice' : ''
            }
        };
    }

    componentDidMount = () => {
        this.props.fetchProject(this.props.match.params.id)
    }

    toggleBidPost = () => {
        this.setState({ showBidForm : !this.state.showBidForm });
    }

    handleBidEntryDetails = e => {
        e.stopPropagation();
        const { bidDetails } = this.state;
        switch (e.target.name) {
            case 'biddername': bidDetails.bidderName = e.target.value;
                break;
            case 'biddercontact': bidDetails.bidderContact = e.target.value;
                break;
            case 'bidprice': bidDetails.bidPrice = e.target.value;
                break;
            default: return;    
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { bidDetails } = this.state;
        bidDetails.projectID = this.props.match.params.id;
        //Todo Bid Form Validation
        this.props.addNewBid(bidDetails);
    }

    handlePriceTypeChange = e => {
        const { bidDetails } = this.state;
        bidDetails.bidPriceType = e.target.value;
        this.setState({ bidDetails });
    }

    render () {
        const { selectedProject } = this.props || {};
        const showPostBidForm = this.state.showBidForm ? `show-bid-form` : `hide-bid-form`;
        //const flatHourlyText = (this.state.bidDetails.bidPriceType === 'hourly') ? 'price-rate' : 'flat-rate';
        if(!selectedProject) { return null}

        const checkDateValidity = validateBidEligibility(selectedProject.projectDeadline.endDate, selectedProject.projectDeadline.endTime);
        const disableButtonCSS = checkDateValidity ?  '' : 'disabled-bid-button';

        return (
            <div className='project-details-page'>
                <Link className='link-button' to='/'>Back</Link>
                {/* CSS : Convert show bid button to slider */}
                <button className={disableButtonCSS} disabled={!checkDateValidity} onClick={() => this.toggleBidPost()}>Bid</button>

                <div className={showPostBidForm}>
                    <div>
                        <label>Name</label>
                        <input type='text' name='biddername' onChange={e => this.handleBidEntryDetails(e)}/>
                    </div>

                    <div>
                        <label>Contact</label>
                        <input type='text' name='biddercontact' onChange={e => this.handleBidEntryDetails(e)}/>
                    </div>

                    <div>
                        <label>Price type</label>
                        <select onChange={e => this.handlePriceTypeChange(e)} value={this.state.priceType} name='bidpricetype'>
                            <option value="hourly" >Hourly</option>
                            <option value="fixed" >Fixed</option>
                        </select>
                    </div>

                    <div>
                        <label>Bid Amout in $</label>
                        <input type='text' name='bidprice' onChange={e => this.handleBidEntryDetails(e)}/>
                    </div>

                     <button onClick={(e) => this.handleSubmit(e)}>Post Bid</button>   
                </div>
                <div className='project-content'>
                     <ProjectContentInfo selectedProject={selectedProject} bidsList={this.props.bidsList} checkDateValidity={checkDateValidity}/>
                     <BidList selectedProject={selectedProject} bidsList={this.props.bidsList}/>
                </div>

            </div>
        )
    }
}

export default ProjectDetails;