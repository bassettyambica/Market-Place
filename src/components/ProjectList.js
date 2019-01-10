import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../sass/ProjectList.css';
import ProjectContent from './ProjectContent';

class ProjectList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            paginationArray : [],
            displayProjectsCount : 20,
            slicedProjects : []
        }
    }

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
        let numberOfPagesToShow = Math.ceil(this.props.projects.length / this.state.displayProjectsCount); 
        let paginationArray = Array.from(Array(numberOfPagesToShow).keys());
        let slicedProjects = this.props.projects.slice(0, this.state.displayProjectsCount)
        this.setState({ paginationArray , slicedProjects });
        
    }

    handlePageChange = pageIndex => {
        const { displayProjectsCount, paginationArray } = this.state;
        let newIndex = Math.abs(pageIndex - 1) * displayProjectsCount;
        let slicedProjects = this.props.projects.slice(newIndex, newIndex + displayProjectsCount)
        this.setState({ slicedProjects });
    }

    renderProjectsForDisplay = (slicedProjects, selectProjectID) => {

        return slicedProjects.length && slicedProjects.map(project => {
            let selectedProjectClassName = (project.projectInfo.projectID === selectProjectID) ? 'project-list-item selected-project' : 'project-list-item';
            return (
                <li key={project.projectInfo.projectID}
                    className={selectedProjectClassName}
                    onClick={() => this.handleFetchProject(project.projectInfo.projectID)}
                >
                    {project.projectInfo.projectTitle}
                </li>
            );
        });
        
    }

    handleFetchProject = (projectID) => {
        this.props.fetchProject(projectID);
    }

    render() {
        const selectProjectID = this.props.selectedProject.projectInfo.projectID;
        const { paginationArray } = this.state;

        return (
            <div className='project-list-container'>
            <div className='project-list-block'>
                <Link className='add-new-button link-button' to='/project/new'>Add New Project</Link>
                <div className='project-list'>
                <div className='project-list-item-left'>
                    <ul className="project-list-items">
                        {this.renderProjectsForDisplay(this.state.slicedProjects, selectProjectID)}
                    </ul>

                    <div className="pagination-list">
                        {paginationArray.map(page => {
                            return (
                                <span className='pagination-items' key={page} onClick={() => this.handlePageChange(page + 1) }>{page + 1}</span>
                            )
                        })}
                    </div>
                </div>

                <div className='project-list-item-right'>
                    <ProjectContent selectedProject={this.props.selectedProject} bidsList={this.props.bidsList}/>
                </div>

            </div>
            </div>
            </div>
            
        );
    }
}

export default ProjectList;