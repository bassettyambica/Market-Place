import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import '../sass/ProjectContent.css';
import ProjectContentInfo from './ProjectContentInfo';
import { validateBidEligibility } from '../utils/utils';

class ProjectContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.setState({ loading: false });
    }

 
    render() {
        const { loading } = this.state;
        const { selectedProject } = this.props || {};

        if (loading) { return <div className='loading-indicator'> Loading... </div> };
        const checkDateValidity = validateBidEligibility(selectedProject.projectDeadline.endDate, selectedProject.projectDeadline.endTime);
        //const disableAddBid = checkDateValidity ? '' : 'disabled-link';

        const projectLink = `/project/${selectedProject.projectInfo.projectID}`;
        return (
            <div className='project-content'>
                <div className='project-content-header'>
                    <div className='project-content-header-items project-title'>
                        <h5><Link  className='link-button' to={projectLink}>{selectedProject.projectInfo.projectTitle}</Link></h5>
                    </div>


                    {/* Bid form Link on home page project description */}
                    {/* <div className='project-content-header-items'>
                        <Link to={projectLink} className='link-button' className={disableAddBid}>Bid Project</Link>
                    </div> */}
                </div>


                <ProjectContentInfo selectedProject={selectedProject} bidsList={this.props.bidsList} checkDateValidity={checkDateValidity}/>
            </div>
        )
    }
}

export default ProjectContent;