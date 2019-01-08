import { connect } from 'react-redux';
import ProjectDetails from '../components/ProjectDetails';
import { bindActionCreators } from 'redux';
import { fetchProject, addNewBid } from '../actions';

const mapStateToProps = state => ({
    selectedProject: state.projects.selectedProject,
    bidsList: state.bids.bidsList
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            fetchProject,
            addNewBid
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectDetails);