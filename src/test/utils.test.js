import chai, { expect } from 'chai';
import { addProjectToList } from '../utils/utils';

describe('Add a new project testing', function(){

    let projectDetails = {
        projectTitle : "Marketing Specialist",
        projectDesc :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non consectetur a erat. Nunc faucibus a pellentesque sit. In aliquam sem fringilla ut. Sagittis orci a scelerisque purus semper eget duis at. Mattis nunc sed blandit libero. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Aliquet bibendum enim facilisis gravida. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Magna ac placerat vestibulum lectus. Sit amet aliquam id diam maecenas ultricies mi eget. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Sollicitudin tempor id eu nisl nunc mi ipsum. Donec ac odio tempor orci dapibus ultrices in iaculis. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Eget nunc scelerisque viverra mauris in aliquam. Enim tortor at auctor urna nunc id cursus metus. Feugiat vivamus at augue eget arcu dictum varius duis. Morbi tristique senectus et netus.",
        endDate : "2019-10-19",
        endTime : "23:00",
        projectHours : "25"
    }

    let newProject = {
        "projectInfo": {
            "projectID": "3",
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
    };


    it('-should add a new object', function() {
        let newProjectAdded = addProjectToList(projectDetails);

        expect(newProjectAdded).to.be.an('object');
        expect(newProjectAdded.projectInfo.projectTitle).to.equal(projectDetails.projectTitle);
    });
});