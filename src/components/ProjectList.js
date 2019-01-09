import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../sass/ProjectList.css';
import ProjectContent from './ProjectContent';

class ProjectList extends Component {

    static get defaultProps() {
        return {
            selectedProject: {
                projectInfo : {
                    projectID: ''
                }
            }
        }
    }

    componentDidMount = () => {
        this.props.fetchProject(this.props.projects[0].projectInfo.projectID);
    }

    handleFetchProject = (projectID) => {
        this.props.fetchProject(projectID);
    }

    render() {
        const selectProjectID = this.props.selectedProject.projectInfo.projectID;

        return (
            <div>
                <Link className='add-new-button link-button' to='/project/new'>Add New Project</Link>
                <div className='project-list'>
                <div className='project-list-item-left'>
                    <ul className="project-list-items">
                        {this.props.projects && this.props.projects.map((project) => {
                            let selectedProjectClassName = (project.projectInfo.projectID === selectProjectID) ? 'project-list-item selected-project' : 'project-list-item';
                            return (
                                <li key={project.projectInfo.projectID}
                                    className={selectedProjectClassName}
                                    onClick={() => this.handleFetchProject(project.projectInfo.projectID)}
                                >
                                    {project.projectInfo.projectTitle}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className='project-list-item-right'>
                    <ProjectContent selectedProject={this.props.selectedProject} bidsList={this.props.bidsList}/>
                </div>

            </div>
            </div>
            
        );
    }
}

export default ProjectList;