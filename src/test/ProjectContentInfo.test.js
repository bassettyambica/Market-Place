import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import chai, { expect } from 'chai';
import ProjectContentInfo from '../components/ProjectContentInfo';
import { bidsList } from '../utils/constants';

describe('ProjectContentInfo testing', function () {
    let selectedProject = {
        "projectInfo": {
            "projectID": "1",
            "projectTitle": "Marketing Specialist",
            "projectDesc": `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non consectetur a erat. Nunc faucibus a pellentesque sit. In aliquam sem fringilla ut. Sagittis orci a scelerisque purus semper eget duis at. Mattis nunc sed blandit libero. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Aliquet bibendum enim facilisis gravida. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Magna ac placerat vestibulum lectus. Sit amet aliquam id diam maecenas ultricies mi eget. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Sollicitudin tempor id eu nisl nunc mi ipsum. Donec ac odio tempor orci dapibus ultrices in iaculis. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Eget nunc scelerisque viverra mauris in aliquam. Enim tortor at auctor urna nunc id cursus metus. Feugiat vivamus at augue eget arcu dictum varius duis. Morbi tristique senectus et netus.`,
            "projectHours": "50"
        },
        "projectDeadline": {
            "endDate": "2019-10-19",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    }
    it('-Should render ProjectContentInfo component', function () {
        const wrapper = mount(
            <ProjectContentInfo selectedProject={selectedProject} bidsList={bidsList} checkDateValidity={true}/>
        );

        expect(wrapper.find('.project-title').text()).to.contain('Marketing Specialist');
        expect(wrapper.find('.bid-item-label').length).to.equal(4);
    });
});