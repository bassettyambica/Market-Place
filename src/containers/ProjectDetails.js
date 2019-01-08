import { connect } from 'react-redux';
import ProjectDetails from '../components/ProjectDetails';
import { bindActionCreators } from 'redux';
import { fetchProject, toggleBidForm, addNewBid } from '../actions';

const mapStateToProps = state => ({
    selectedProject: state.projects.selectedProject,
    showBidForm: state.bids.showBidForm,
    bidsList: state.bids.bidsList
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            fetchProject,
            toggleBidForm,
            addNewBid
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectDetails);