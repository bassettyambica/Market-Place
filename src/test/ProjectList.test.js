import 'jsdom-global/register';
import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import chai, { expect } from 'chai';
import ProjectList from '../containers/ProjectList';

import Adapter from 'enzyme-adapter-react-16';
import TestProvider from './util/TestProvider.js';
import reducers from '../reducers/index';
import { projectList, bidsList } from '../utils/constants';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';

configure({ adapter: new Adapter() });

describe('ProjectList testing', function(){

    it('ProjectList renders', () => {
        const intialState = {
            'projects' : projectList
        }
        const store = createStore(reducers, intialState);

        const context = {};
        const wrapper = mount(
            <TestProvider>
                <StaticRouter location="url" context={context}>
                    <ProjectList />
                </StaticRouter>
            </TestProvider>
        );

        console.log("wrapper", wrapper.debug());
        expect(wrapper.find('.project-list-item').length).to.equal(10);
        expect(wrapper.find('Link').getElements()[0].props.to).to.equal('/project/new');
        expect(wrapper.find('Link').getElements()[1].props.to).to.equal('/project/1');
    });

    it('Should return selected project details', () => {
        const intialState = {
            'projects' : projectList
        }
        const store = createStore(reducers, intialState);

        const context = {};
        const wrapper = mount(
            <TestProvider>
                <StaticRouter location="url" context={context}>
                    <ProjectList />
                </StaticRouter>
            </TestProvider>
        );
        
        expect(wrapper.find('.project-list-item-right h2.project-title').text()).to.contain('Marketing Specialist 1')
        wrapper.find('.project-list-item').at(2).simulate('click')
        expect(wrapper.find('.project-list-item-right h2.project-title').text()).to.contain('Media Buyer 3');
        
    });
})
