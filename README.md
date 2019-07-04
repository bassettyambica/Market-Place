# Market-Place
 Market Place for Self Employed.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
node 
npm
```

### Installing

Clone the repo https://github.com/bassettyambica/Market-Place

```
cd into Market-Place
```

And run

```
npm install
```

To start the project run

```
npm start
```

-To run test

Test environment setup instructions followed from https://medium.com/@compatt84/how-to-setup-unit-tests-with-create-react-app-mocha-and-visual-studio-code-mocha-side-bar-eb4f75d8de5a

```
npm test
```

### Project overview 

- Seller can post a project with detail requirements. The post also includes the last day and time for accepting bids.  
- Bidders can bid on each project before the deadline.
- Bidder can either bid by fixed price or per hour basis.


###Notes 
- Still to work on:
- Disable Prev dates before selection.
- Input validations for date & time to be greater than current();
- If no bids , final price should be empty  for expired project.
- CSS fix for pagination bar.
- Logic for pagination to move to redux(FETCH_DISPLAY_PROJECTS)
- CSS and Responsiveness
- Test cases
- Selected project on home page is always first index.
- Data clean up after post new bid



Improvements:

Seller and Buyer access rights can be improved.(Currently, anyone can post and anyone can bid. Eg, seller can post and bid on his own post.)

Seller should have facility to edit his created projects.(Each post should include seller info to provide edit access based on that info).

Projects expired , deadline is crossed should be filtered out.

Post new job button/form can be accessed based on access rights.

Date selection Time selection (Time Zone can be considered)
