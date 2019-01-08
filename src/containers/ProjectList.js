import { connect } from 'react-redux';
import ProjectList from '../components/ProjectList';
import { bindActionCreators } from 'redux';
import { fetchProject } from '../actions';

const mapStateToProps = state => ({
    projects: state.projects.projectList,
    selectedProject: state.projects.selectedProject,
    bidsList: state.bids.bidsList
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            fetchProject,
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectList);