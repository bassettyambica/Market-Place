import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../sass/ProjectDetails.css';
import ProjectContentInfo from './ProjectContentInfo';
import { validateBidEligibility } from '../utils/utils';

class ProjectDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showBidForm: false,
            priceType : 'hourly',
            bidDetails : {
                'bidderName' : '',
                'bidderContact' : '',
                'bidPriceType' : '',
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
                return;
            case 'biddercontact': bidDetails.bidderContact = e.target.value;
                return;
            case 'bidprice': bidDetails.bidPrice = e.target.value + '$';
                return;
            default: return;    
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //Bid Price Type validation ? revisit this logic
        const { bidDetails, priceType } = this.state;
        bidDetails.bidPriceType = priceType
        bidDetails.projectID = this.props.match.params.id;
        this.props.addNewBid(bidDetails);
        //Reset values to empty
    }

    handlePriceTypeChange = e => {
        console.log('handlePriceTypeChange', e.target.value)
        this.setState({ priceType : e.target.value})
    }

    render () {
        const { selectedProject } = this.props || {};
        const showPostBidForm = this.state.showBidForm ? `show-bid-form` : `hide-bid-form`;
        if(!selectedProject) { return null}

        const checkDateValidity = validateBidEligibility(selectedProject.projectDeadline.endDate, selectedProject.projectDeadline.endTime);

        return (
            <div className='project-details-page'>
                <Link className='link-button' to='/'>Back</Link>
                {/* CSS : Convert show bid button to slider */}
                <button className='waves-effect waves-light btn right' disabled={!checkDateValidity} onClick={() => this.toggleBidPost()}>Bid</button>

                <div className={showPostBidForm}>
                {/* <form > */}
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
                    {/* </form> */}
                </div>
                <ProjectContentInfo selectedProject={selectedProject} bidsList={this.props.bidsList} checkDateValidity={checkDateValidity}/>
            </div>
        )
    }
}

export default ProjectDetails;