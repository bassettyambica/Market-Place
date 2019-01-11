import { uuidv4 } from './utils';

export const projectList = [
    {
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
    },
    {
        "projectInfo": {
            "projectID": "2",
            "projectTitle": "Social Media Assistant",
            "projectDesc": `Eget egestas purus viverra accumsan in nisl. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Ut tristique et egestas quis ipsum suspendisse. Ac auctor augue mauris augue. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Cursus metus aliquam eleifend mi in. Leo vel fringilla est ullamcorper eget nulla. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. At consectetur lorem donec massa sapien faucibus et molestie. Ipsum suspendisse ultrices gravida dictum fusce ut. Gravida in fermentum et sollicitudin ac orci phasellus. Duis ultricies lacus sed turpis. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Ut etiam sit amet nisl purus in mollis.`,
            "projectHours": "70" 
        },
        "projectDeadline": {
            "endDate": "2019-03-15",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    },
    {
        "projectInfo": {
            "projectID": "3",
            "projectTitle": "Media Buyer",
            "projectDesc": `In nisl nisi scelerisque eu ultrices vitae auctor eu. Aliquam sem fringilla ut morbi tincidunt augue. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Velit ut tortor pretium viverra suspendisse. Sit amet commodo nulla facilisi nullam vehicula ipsum. Vel pharetra vel turpis nunc eget lorem dolor sed. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Diam quis enim lobortis scelerisque fermentum dui faucibus. Convallis aenean et tortor at risus viverra adipiscing. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vitae purus faucibus ornare suspendisse sed. Cras adipiscing enim eu turpis egestas. In fermentum posuere urna nec. Massa tempor nec feugiat nisl pretium fusce. Neque convallis a cras semper auctor neque vitae tempus quam. Convallis posuere morbi leo urna molestie.
                            Sollicitudin aliquam ultrices sagittis orci a scelerisque. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Sagittis vitae et leo duis ut diam quam nulla. Est velit egestas dui id ornare arcu odio ut sem. Condimentum lacinia quis vel eros donec ac odio. Magna eget est lorem ipsum. Ullamcorper morbi tincidunt ornare massa. Enim nunc faucibus a pellentesque sit. Orci ac auctor augue mauris augue. Odio euismod lacinia at quis risus sed vulputate odio ut.`,
            "projectHours": "30"
        },
        "projectDeadline": {
            "endDate": "2018-06-12",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    }
];

export const bidsList = [
    {
        "projectID" : "1",
        "bidPosts" : [
            {
                "bidID" : uuidv4(),
                "bidderDetails" : {
                    "bidderName" : "Leanne Graham",
                    "bidderContact" :  "1-770-736-8031"
                },
                "bidPriceType" : "hourly",
                "bidPrice" : "100"
            },
            {
                "bidID" : uuidv4(),
                "bidderDetails" : {
                    "bidderName" : "Patricia Lebsack",
                    "bidderContact" :  "493-170-9623 x156"
                },
                "bidPriceType" : "fixed",
                "bidPrice" : "1500"
            },
            {
                "bidID" : uuidv4(),
                "bidderDetails" : {
                    "bidderName" : "Chelsey Dietrich",
                    "bidderContact" :  "254-954-1289"
                },
                "bidPriceType" : "hourly",
                "bidPrice" : "55"
            }
        ]
    },
    {
        "projectID" : "2",
        "bidPosts" : [
            {
                "bidID" : uuidv4(),
                "bidderDetails" : {
                    "bidderName" : "rvin Howell",
                    "bidderContact" : "010-692-6593 x09125"
                },
                "bidPriceType" : "fixed",
                "bidPrice" : "100000"
            }
        ]
    },
    {
        "projectID" : "3",
        "bidPosts" : [
            {
                "bidID" : uuidv4(),
                "bidderDetails" : {
                    "bidderName" : "Clementine Bauch",
                    "bidderContact" : "1-463-123-4447"
                },
                "bidPriceType" : "hourly",
                "bidPrice" : "100"
            },
            {
                "bidID" : uuidv4(),
                "bidderDetails" : {
                    "bidderName" : "Henry Patrik",
                    "bidderContact" : "1-463-123-4447"
                },
                "bidPriceType" : "fixed",
                "bidPrice" : "1000"
            },
            {
                "bidID" : uuidv4(),
                "bidderDetails" : {
                    "bidderName" : "Tom Tom",
                    "bidderContact" : "1-463-123-4447"
                },
                "bidPriceType" : "hourly",
                "bidPrice" : "70"
            },
            {
                "bidID" : uuidv4(),
                "bidderDetails" : {
                    "bidderName" : "Sara Howell",
                    "bidderContact" : "1-463-123-4447"
                },
                "bidPriceType" : "fixed",
                "bidPrice" : "2500"
            }
        ]
    }
]

export const projectList_bkp = [
    {
        "projectInfo": {
            "projectID": "1",
            "projectTitle": "Marketing Specialist 1",
            "projectDesc": `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non consectetur a erat. Nunc faucibus a pellentesque sit. In aliquam sem fringilla ut. Sagittis orci a scelerisque purus semper eget duis at. Mattis nunc sed blandit libero. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Aliquet bibendum enim facilisis gravida. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Magna ac placerat vestibulum lectus. Sit amet aliquam id diam maecenas ultricies mi eget. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Sollicitudin tempor id eu nisl nunc mi ipsum. Donec ac odio tempor orci dapibus ultrices in iaculis. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Eget nunc scelerisque viverra mauris in aliquam. Enim tortor at auctor urna nunc id cursus metus. Feugiat vivamus at augue eget arcu dictum varius duis. Morbi tristique senectus et netus.`,
            "projectHours": "50"
        },
        "projectDeadline": {
            "endDate": "2018-10-19",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    },
    {
        "projectInfo": {
            "projectID": "2",
            "projectTitle": "Social Media Assistant 2",
            "projectDesc": `Eget egestas purus viverra accumsan in nisl. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Ut tristique et egestas quis ipsum suspendisse. Ac auctor augue mauris augue. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Cursus metus aliquam eleifend mi in. Leo vel fringilla est ullamcorper eget nulla. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. At consectetur lorem donec massa sapien faucibus et molestie. Ipsum suspendisse ultrices gravida dictum fusce ut. Gravida in fermentum et sollicitudin ac orci phasellus. Duis ultricies lacus sed turpis. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Ut etiam sit amet nisl purus in mollis.`,
            "projectHours": "70" 
        },
        "projectDeadline": {
            "endDate": "2019-03-15",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    },
    {
        "projectInfo": {
            "projectID": "3",
            "projectTitle": "Media Buyer 3",
            "projectDesc": `In nisl nisi scelerisque eu ultrices vitae auctor eu. Aliquam sem fringilla ut morbi tincidunt augue. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Velit ut tortor pretium viverra suspendisse. Sit amet commodo nulla facilisi nullam vehicula ipsum. Vel pharetra vel turpis nunc eget lorem dolor sed. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Diam quis enim lobortis scelerisque fermentum dui faucibus. Convallis aenean et tortor at risus viverra adipiscing. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vitae purus faucibus ornare suspendisse sed. Cras adipiscing enim eu turpis egestas. In fermentum posuere urna nec. Massa tempor nec feugiat nisl pretium fusce. Neque convallis a cras semper auctor neque vitae tempus quam. Convallis posuere morbi leo urna molestie.
                            Sollicitudin aliquam ultrices sagittis orci a scelerisque. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Sagittis vitae et leo duis ut diam quam nulla. Est velit egestas dui id ornare arcu odio ut sem. Condimentum lacinia quis vel eros donec ac odio. Magna eget est lorem ipsum. Ullamcorper morbi tincidunt ornare massa. Enim nunc faucibus a pellentesque sit. Orci ac auctor augue mauris augue. Odio euismod lacinia at quis risus sed vulputate odio ut.`,
            "projectHours": "30"
        },
        "projectDeadline": {
            "endDate": "2018-06-12",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "Brand Strategist 4",
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
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "Media Relations Coordinator 5",
            "projectDesc": `Eget egestas purus viverra accumsan in nisl. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Ut tristique et egestas quis ipsum suspendisse. Ac auctor augue mauris augue. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Cursus metus aliquam eleifend mi in. Leo vel fringilla est ullamcorper eget nulla. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. At consectetur lorem donec massa sapien faucibus et molestie. Ipsum suspendisse ultrices gravida dictum fusce ut. Gravida in fermentum et sollicitudin ac orci phasellus. Duis ultricies lacus sed turpis. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Ut etiam sit amet nisl purus in mollis.`,
            "projectHours": "70" 
        },
        "projectDeadline": {
            "endDate": "2019-03-15",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "SEO Manage 6",
            "projectDesc": `In nisl nisi scelerisque eu ultrices vitae auctor eu. Aliquam sem fringilla ut morbi tincidunt augue. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Velit ut tortor pretium viverra suspendisse. Sit amet commodo nulla facilisi nullam vehicula ipsum. Vel pharetra vel turpis nunc eget lorem dolor sed. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Diam quis enim lobortis scelerisque fermentum dui faucibus. Convallis aenean et tortor at risus viverra adipiscing. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vitae purus faucibus ornare suspendisse sed. Cras adipiscing enim eu turpis egestas. In fermentum posuere urna nec. Massa tempor nec feugiat nisl pretium fusce. Neque convallis a cras semper auctor neque vitae tempus quam. Convallis posuere morbi leo urna molestie.
                            Sollicitudin aliquam ultrices sagittis orci a scelerisque. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Sagittis vitae et leo duis ut diam quam nulla. Est velit egestas dui id ornare arcu odio ut sem. Condimentum lacinia quis vel eros donec ac odio. Magna eget est lorem ipsum. Ullamcorper morbi tincidunt ornare massa. Enim nunc faucibus a pellentesque sit. Orci ac auctor augue mauris augue. Odio euismod lacinia at quis risus sed vulputate odio ut.`,
            "projectHours": "30"
        },
        "projectDeadline": {
            "endDate": "2018-06-12",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "Travel Agent 7",
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
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "Front Desk Manager 8",
            "projectDesc": `Eget egestas purus viverra accumsan in nisl. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Ut tristique et egestas quis ipsum suspendisse. Ac auctor augue mauris augue. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Cursus metus aliquam eleifend mi in. Leo vel fringilla est ullamcorper eget nulla. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. At consectetur lorem donec massa sapien faucibus et molestie. Ipsum suspendisse ultrices gravida dictum fusce ut. Gravida in fermentum et sollicitudin ac orci phasellus. Duis ultricies lacus sed turpis. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Ut etiam sit amet nisl purus in mollis.`,
            "projectHours": "70" 
        },
        "projectDeadline": {
            "endDate": "2019-03-15",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "Group Sales 9",
            "projectDesc": `In nisl nisi scelerisque eu ultrices vitae auctor eu. Aliquam sem fringilla ut morbi tincidunt augue. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Velit ut tortor pretium viverra suspendisse. Sit amet commodo nulla facilisi nullam vehicula ipsum. Vel pharetra vel turpis nunc eget lorem dolor sed. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Diam quis enim lobortis scelerisque fermentum dui faucibus. Convallis aenean et tortor at risus viverra adipiscing. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vitae purus faucibus ornare suspendisse sed. Cras adipiscing enim eu turpis egestas. In fermentum posuere urna nec. Massa tempor nec feugiat nisl pretium fusce. Neque convallis a cras semper auctor neque vitae tempus quam. Convallis posuere morbi leo urna molestie.
                            Sollicitudin aliquam ultrices sagittis orci a scelerisque. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Sagittis vitae et leo duis ut diam quam nulla. Est velit egestas dui id ornare arcu odio ut sem. Condimentum lacinia quis vel eros donec ac odio. Magna eget est lorem ipsum. Ullamcorper morbi tincidunt ornare massa. Enim nunc faucibus a pellentesque sit. Orci ac auctor augue mauris augue. Odio euismod lacinia at quis risus sed vulputate odio ut.`,
            "projectHours": "30"
        },
        "projectDeadline": {
            "endDate": "2018-06-12",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "Event Planner 10",
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
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "Social Media Assistant 11",
            "projectDesc": `Eget egestas purus viverra accumsan in nisl. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Ut tristique et egestas quis ipsum suspendisse. Ac auctor augue mauris augue. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Cursus metus aliquam eleifend mi in. Leo vel fringilla est ullamcorper eget nulla. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. At consectetur lorem donec massa sapien faucibus et molestie. Ipsum suspendisse ultrices gravida dictum fusce ut. Gravida in fermentum et sollicitudin ac orci phasellus. Duis ultricies lacus sed turpis. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Ut etiam sit amet nisl purus in mollis.`,
            "projectHours": "70" 
        },
        "projectDeadline": {
            "endDate": "2019-03-15",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "Hotel Receptionist 12",
            "projectDesc": `In nisl nisi scelerisque eu ultrices vitae auctor eu. Aliquam sem fringilla ut morbi tincidunt augue. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Velit ut tortor pretium viverra suspendisse. Sit amet commodo nulla facilisi nullam vehicula ipsum. Vel pharetra vel turpis nunc eget lorem dolor sed. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Diam quis enim lobortis scelerisque fermentum dui faucibus. Convallis aenean et tortor at risus viverra adipiscing. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vitae purus faucibus ornare suspendisse sed. Cras adipiscing enim eu turpis egestas. In fermentum posuere urna nec. Massa tempor nec feugiat nisl pretium fusce. Neque convallis a cras semper auctor neque vitae tempus quam. Convallis posuere morbi leo urna molestie.
                            Sollicitudin aliquam ultrices sagittis orci a scelerisque. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Sagittis vitae et leo duis ut diam quam nulla. Est velit egestas dui id ornare arcu odio ut sem. Condimentum lacinia quis vel eros donec ac odio. Magna eget est lorem ipsum. Ullamcorper morbi tincidunt ornare massa. Enim nunc faucibus a pellentesque sit. Orci ac auctor augue mauris augue. Odio euismod lacinia at quis risus sed vulputate odio ut.`,
            "projectHours": "30"
        },
        "projectDeadline": {
            "endDate": "2018-06-12",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "Technical Writer 13",
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
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "Public Relations Specialist 14",
            "projectDesc": `Eget egestas purus viverra accumsan in nisl. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Ut tristique et egestas quis ipsum suspendisse. Ac auctor augue mauris augue. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Cursus metus aliquam eleifend mi in. Leo vel fringilla est ullamcorper eget nulla. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. At consectetur lorem donec massa sapien faucibus et molestie. Ipsum suspendisse ultrices gravida dictum fusce ut. Gravida in fermentum et sollicitudin ac orci phasellus. Duis ultricies lacus sed turpis. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Ut etiam sit amet nisl purus in mollis.`,
            "projectHours": "70" 
        },
        "projectDeadline": {
            "endDate": "2019-03-15",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "Proposal Writer 15",
            "projectDesc": `In nisl nisi scelerisque eu ultrices vitae auctor eu. Aliquam sem fringilla ut morbi tincidunt augue. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Velit ut tortor pretium viverra suspendisse. Sit amet commodo nulla facilisi nullam vehicula ipsum. Vel pharetra vel turpis nunc eget lorem dolor sed. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Diam quis enim lobortis scelerisque fermentum dui faucibus. Convallis aenean et tortor at risus viverra adipiscing. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vitae purus faucibus ornare suspendisse sed. Cras adipiscing enim eu turpis egestas. In fermentum posuere urna nec. Massa tempor nec feugiat nisl pretium fusce. Neque convallis a cras semper auctor neque vitae tempus quam. Convallis posuere morbi leo urna molestie.
                            Sollicitudin aliquam ultrices sagittis orci a scelerisque. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Sagittis vitae et leo duis ut diam quam nulla. Est velit egestas dui id ornare arcu odio ut sem. Condimentum lacinia quis vel eros donec ac odio. Magna eget est lorem ipsum. Ullamcorper morbi tincidunt ornare massa. Enim nunc faucibus a pellentesque sit. Orci ac auctor augue mauris augue. Odio euismod lacinia at quis risus sed vulputate odio ut.`,
            "projectHours": "30"
        },
        "projectDeadline": {
            "endDate": "2018-06-12",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "Video Game Writer 16",
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
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "Social Media Assistant 17",
            "projectDesc": `Eget egestas purus viverra accumsan in nisl. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Ut tristique et egestas quis ipsum suspendisse. Ac auctor augue mauris augue. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Cursus metus aliquam eleifend mi in. Leo vel fringilla est ullamcorper eget nulla. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. At consectetur lorem donec massa sapien faucibus et molestie. Ipsum suspendisse ultrices gravida dictum fusce ut. Gravida in fermentum et sollicitudin ac orci phasellus. Duis ultricies lacus sed turpis. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Ut etiam sit amet nisl purus in mollis.`,
            "projectHours": "70" 
        },
        "projectDeadline": {
            "endDate": "2019-03-15",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "Copywriter 18",
            "projectDesc": `In nisl nisi scelerisque eu ultrices vitae auctor eu. Aliquam sem fringilla ut morbi tincidunt augue. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Velit ut tortor pretium viverra suspendisse. Sit amet commodo nulla facilisi nullam vehicula ipsum. Vel pharetra vel turpis nunc eget lorem dolor sed. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Diam quis enim lobortis scelerisque fermentum dui faucibus. Convallis aenean et tortor at risus viverra adipiscing. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vitae purus faucibus ornare suspendisse sed. Cras adipiscing enim eu turpis egestas. In fermentum posuere urna nec. Massa tempor nec feugiat nisl pretium fusce. Neque convallis a cras semper auctor neque vitae tempus quam. Convallis posuere morbi leo urna molestie.
                            Sollicitudin aliquam ultrices sagittis orci a scelerisque. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Sagittis vitae et leo duis ut diam quam nulla. Est velit egestas dui id ornare arcu odio ut sem. Condimentum lacinia quis vel eros donec ac odio. Magna eget est lorem ipsum. Ullamcorper morbi tincidunt ornare massa. Enim nunc faucibus a pellentesque sit. Orci ac auctor augue mauris augue. Odio euismod lacinia at quis risus sed vulputate odio ut.`,
            "projectHours": "30"
        },
        "projectDeadline": {
            "endDate": "2018-06-12",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "Travel Writer 19",
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
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "Social Media Assistant 20",
            "projectDesc": `Eget egestas purus viverra accumsan in nisl. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Ut tristique et egestas quis ipsum suspendisse. Ac auctor augue mauris augue. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Cursus metus aliquam eleifend mi in. Leo vel fringilla est ullamcorper eget nulla. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. At consectetur lorem donec massa sapien faucibus et molestie. Ipsum suspendisse ultrices gravida dictum fusce ut. Gravida in fermentum et sollicitudin ac orci phasellus. Duis ultricies lacus sed turpis. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Ut etiam sit amet nisl purus in mollis.`,
            "projectHours": "70" 
        },
        "projectDeadline": {
            "endDate": "2019-03-15",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    },
    {
        "projectInfo": {
            "projectID": uuidv4(),
            "projectTitle": "Ghostwriter 21",
            "projectDesc": `In nisl nisi scelerisque eu ultrices vitae auctor eu. Aliquam sem fringilla ut morbi tincidunt augue. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Velit ut tortor pretium viverra suspendisse. Sit amet commodo nulla facilisi nullam vehicula ipsum. Vel pharetra vel turpis nunc eget lorem dolor sed. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Diam quis enim lobortis scelerisque fermentum dui faucibus. Convallis aenean et tortor at risus viverra adipiscing. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vitae purus faucibus ornare suspendisse sed. Cras adipiscing enim eu turpis egestas. In fermentum posuere urna nec. Massa tempor nec feugiat nisl pretium fusce. Neque convallis a cras semper auctor neque vitae tempus quam. Convallis posuere morbi leo urna molestie.
                            Sollicitudin aliquam ultrices sagittis orci a scelerisque. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Sagittis vitae et leo duis ut diam quam nulla. Est velit egestas dui id ornare arcu odio ut sem. Condimentum lacinia quis vel eros donec ac odio. Magna eget est lorem ipsum. Ullamcorper morbi tincidunt ornare massa. Enim nunc faucibus a pellentesque sit. Orci ac auctor augue mauris augue. Odio euismod lacinia at quis risus sed vulputate odio ut.`,
            "projectHours": "30"
        },
        "projectDeadline": {
            "endDate": "2018-06-12",
            "endTime": "23:00"
        },
        "projectBids": {
            "bidsCount": "0"
        }
    }
];