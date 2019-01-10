import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducers/index';

class TestProvider extends Component {
    static get defaultProps() {
        return {
            store: createStore(reducers)
        }
    }

    render() {
        return (
            <Provider store={this.props.store}>
                {this.props.children}
            </Provider>
        )
    }
}

export default TestProvider;