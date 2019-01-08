import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import '../sass/ProjectContent.css';
import ProjectContentInfo from './ProjectContentInfo';
import { validateBidEligibility } from '../utils/utils';

class ProjectContent extends Component {

    constructor(props) {
        super(props);
        console.log("contetn props", props )
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

        if (loading) { return <div> Loading... </div> };
        const checkDateValidity = validateBidEligibility(selectedProject.projectDeadline.endDate, selectedProject.projectDeadline.endTime);
        const disableAddBid = checkDateValidity ? '' : 'disabled-link';

        const projectLink = `/project/${selectedProject.projectInfo.projectID}`;
        return (
            <div className='project-content'>
                <div className='project-content-header'>
                    <div className='project-content-header-items project-title'>
                        <h5><Link to={projectLink}>{selectedProject.projectInfo.projectTitle}</Link></h5>
                    </div>


                    {/* Work on this logic to route to progect page and show bid form */}
                    {/* <div className='project-content-header-items'>
                        <Link to={projectLink} className='waves-effect waves-light btn right' className={disableAddBid}>Bid Project</Link>
                    </div> */}
                </div>


                <ProjectContentInfo selectedProject={selectedProject} bidsList={this.props.bidsList} checkDateValidity={checkDateValidity}/>
            </div>
        )
    }

    

}

ProjectContent.defaultProps = {
    selectedProject: {
        projectInfo: {
            projectID: '',
            projectTitle: ''
        }
    }
}

ProjectContent.propTypes = { selectedProject: PropTypes.object };

export default ProjectContent;