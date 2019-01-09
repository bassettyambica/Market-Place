import React, { Component } from 'react';
import '../sass/ProjectCreate.css';
import { Link } from 'react-router-dom';

class ProjectCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectDetails: {},
            errors: {}
        };
    }

    handleEntryDetails = (e) => {
        e.stopPropagation();
        const { projectDetails } = this.state;
        switch (e.target.name) {
            case 'projecttitle': projectDetails.projectTitle = e.target.value;
                break;
            case 'projectdesc': projectDetails.projectDesc = e.target.value;
                break;
            case 'projectenddate': projectDetails.endDate = e.target.value;
                break;
            case 'projectendtime': projectDetails.endTime = e.target.value;
                break;
            case 'projecthours': projectDetails.projectHours = e.target.value;
                break;    
            default: return;
        }
    }

    handlePostProject = () => {
        const { projectDetails } = this.state;
        if (this.handleValidation()) {
            this.props.addNewProject(projectDetails);
            this.setState({ projectDetails: {} });
            this.props.history.push('/');
        }
    }

    handleValidation() {
        let { projectDetails } = this.state;
        let errors = {};
        let formIsValid = true;

        if (!projectDetails.projectTitle || !projectDetails.endDate || !projectDetails.endTime || !projectDetails.projectDesc || !projectDetails.projectHours) {
            formIsValid = false;
            errors.fieldsError = "Please fill required details";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }


    render() {
        const { errors } = this.state;
        const validateField = errors.fieldsError ? 'error-fields' : '';

        return (
            <div>
                <Link className='link-button' to="/">Back</Link>

                <div className='fields-error'>{errors.fieldsError}</div>

                <div className='post-new-project-container'>
                    <div className='post-new-project'>

                        <div>
                            <label>Project Title</label>
                            <input type="text" name='projecttitle' onChange={e => this.handleEntryDetails(e)} className={validateField} />
                        </div>

                        <div>
                            <label>Project Desc</label>
                            <textarea name='projectdesc' onChange={e => this.handleEntryDetails(e)} className={validateField} />
                        </div>

                        <div>
                            <label>Project End Date</label>
                            <input type="date" name='projectenddate' onChange={e => this.handleEntryDetails(e)} className={validateField} />
                        </div>

                        <div>
                            <label>Project End Time</label>
                            <input type="time" name='projectendtime' onChange={e => this.handleEntryDetails(e)} className={validateField} />
                        </div>

                        <div>
                            <label>Est Project Hours </label>
                            <input type="text" name='projecthours' onChange={e => this.handleEntryDetails(e)} className={validateField} />
                        </div>


                    </div>
                </div>
                <button className="waves-effect waves-light btn" onClick={() => this.handlePostProject()}>Submit</button>
            </div>

        );
    }
}

export default ProjectCreate;