import React, { Component } from 'react';
import '../sass/ProjectCreate.css';
import { Link } from 'react-router-dom';

class ProjectCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectDetails : {
                'projectTitle' : '',
                'projectDesc' : '',
                'endDate' : '',
                'endTime' : ''
            }
        };
    }

    handleEntryDetails = (e) => {
        e.stopPropagation();
        const { projectDetails } = this.state;
        switch (e.target.name) {
            case 'projecttitle': projectDetails.projectTitle = e.target.value;
                return;
            case 'projectdesc': projectDetails.projectDesc = e.target.value;
                return;
            case 'projectenddate': projectDetails.endDate = e.target.value;
                return;
            case 'projectendtime': projectDetails.endTime = e.target.value;
                return;
            default: return;    
        }
    }

    handlePostProject = () => {
        const { projectDetails } = this.state;
        this.props.addNewProject(projectDetails);
        this.setState({projectDetails : {}});
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h5>Post new project</h5>
                <div className='post-new-project-container'>
                    <div className='post-new-project'>

                        <div className="row">
                            <div className="input-field col s3">
                                <input type="text" className="validate" name='projecttitle' onChange={e => this.handleEntryDetails(e)} />
                                <label className="active">Project Title</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                                <textarea type="text" className="validate" name='projectdesc' onChange={e => this.handleEntryDetails(e)} />
                                <label className="active">Project Desc</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s3">
                                <input type="date" className="validate" name='projectenddate' onChange={e => this.handleEntryDetails(e)} />
                                <label className="active">Project End Date</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s3">
                                <input type="time" className="validate" name='projectendtime' onChange={e => this.handleEntryDetails(e)} />
                                <label className="active">Project End Time</label>
                            </div>
                        </div>


                    </div>
                </div>
                <button className="waves-effect waves-light btn" onClick={() => this.handlePostProject()}>Submit</button>
            </div>

        );
    }
}

export default ProjectCreate;