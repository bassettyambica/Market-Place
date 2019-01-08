import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from './components/App';
import ProjectCreate from './containers/ProjectCreate';
import ProjectDetails from './containers/ProjectDetails';
import reducers from './reducers/index';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className='container'>
                <Route exact path='/' component={App} />
                <Route path='/project/new' component={ProjectCreate} />
                <Route path='/project/:id' component={ProjectDetails} />
            </div>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);