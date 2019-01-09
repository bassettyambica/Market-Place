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
            },
            errors : {}
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
        const { bidDetails, showBidForm } = this.state;
        bidDetails.projectID = this.props.match.params.id;
        //Todo Bid Form Validation
        if (this.handleValidation()) {
            this.props.addNewBid(bidDetails);
            this.setState({
                showBidForm: !showBidForm,
                bidDetails: {
                    'bidderName': '',
                    'bidderContact': '',
                    'bidPriceType': 'hourly',
                    'bidPrice': ''
                }
            });
        }
    }

    handleValidation() {
        let { bidDetails } = this.state;
        let errors = {};
        let formIsValid = true;

        if (!bidDetails.bidderName) {
            formIsValid = false;
            errors.bidderName = "Name is required";
        }

        if (!bidDetails.bidderContact || !bidDetails.bidderContact.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
            formIsValid = false;
            errors.bidderContact = "Please fill a valid phone number";
        }

        if (!bidDetails.bidPrice) {
            formIsValid = false;
            errors.bidPrice = "Please fill a valid price";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    handleFormClose = () => {
        this.setState({ showBidForm: !this.state.showBidForm });
    }

    handlePriceTypeChange = e => {
        const { bidDetails } = this.state;
        bidDetails.bidPriceType = e.target.value;
        this.setState({ bidDetails });
    }

    render () {
        const { selectedProject } = this.props || {};
        const { errors, showBidForm } = this.state;
        const showPostBidForm = showBidForm ? `show-bid-form` : `hide-bid-form`;
        if(!selectedProject) { return null}

        const checkDateValidity = validateBidEligibility(selectedProject.projectDeadline.endDate, selectedProject.projectDeadline.endTime);
        const disableButtonCSS = checkDateValidity ?  '' : 'disabled-bid-button';

        return (
            <div className='project-details-page'>
            <div className='project-content'>
                <Link className='link-button' to='/'>Back</Link>
                {/* CSS : Convert show bid button to slider */}
                <button className={disableButtonCSS} disabled={!checkDateValidity} onClick={() => this.toggleBidPost()}>Bid</button>

                <div className={`${showPostBidForm} bid-form-modal`}>
                <div className='bid-modal-content'>

                    <div className='fields-error'>
                        {Object.keys(errors).map((error, ind) => {
                            return (
                                <p key={ind}>{errors[error]}</p>
                            )
                        })}
                    </div>
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
                     <button className="close" onClick={() => this.handleFormClose()}>Close</button> 
                     </div>
                </div>

                     <ProjectContentInfo selectedProject={selectedProject} bidsList={this.props.bidsList} checkDateValidity={checkDateValidity}/>
                     <BidList selectedProject={selectedProject} bidsList={this.props.bidsList}/>
                </div>

            </div>
        )
    }
}

export default ProjectDetails;