import { connect } from 'react-redux';
import ProjectCreate from '../components/ProjectCreate';
import { bindActionCreators } from 'redux';
import { addNewProject } from '../actions';

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            addNewProject
        },
        dispatch
    );
};

export default connect(
    null,
    mapDispatchToProps
)(ProjectCreate);