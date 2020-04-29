# _Aflac Dashboard_


## Description

(picture of dashboard goes here)

#### _This is an application for viewing analysis reports._

## Setup/Installation for a local environment

$ git clone

_(change directory into app of project )_

$ npm install

$ npm run start (browser will open to localhost:3000)  




## Adding a new business report

1. Open project in your ide.

2. Open app/src/constants/masterBusinessReportsList.js

3. Add new report to the array using the commented out template at the bottom of the file.

Note: this will automate the creation of the splash page button, the sideNav link, the route



## Setup/Installation Requirements

* _$ git clone https://github.com/wymerkd/theorem-hr-portal.git_

* _$ cd theorem-hr-portal_

* _$ npm install_

* _$ npm run start (browser will open to localhost:3000)_  

* _$ npm run scss (if editing, needed to translate scss)_  

### Test User Account

* email: jim@theorem.com  
password: test1  


## Specs

* _The application allows the user to view personal employee information and create anonymous feedback for hr._
* _This application also allows admin users the additional ability to view and delete anonymous feedback._

## Folder Structure

```
/Theorem-HR-Portal/
|-- /node_modules/                      # Node Modules
|
|-- /public/                            # Public Files
|   |-- favicon.icon
|   |-- index.html
|   |-- manifest.json
|   |-- robots.txt
|
|-- /src/                               # Source files
|   |-- /components/
|       |-- AdminView.jsx               #
|       |-- EmployeeDetail.jsx          #
|       |-- EmployeeHome.jsx            #
|       |-- FeedbackSubmit.jsx          # View allowing an employee to submit anonymous feedback          
|       |-- Header.jsx                  # Renders LoggedInHeader/LoggedOutHeader conditionally
|       |-- LoggedInHeader.jsx          # Header if the user is logged in
|       |-- LoggedOutHeader.jsx         # Header if the user is logged out
|       |-- LoginPage.jsx               # View where an employee can login
|       |-- QuickLinks.jsx              #
|       |-- TimeOffRequest.jsx          #

|   |-- /css/            
||      -- style.css                    # Compiled styles for production              
|   |-- /scss/
|       |-- _adminView.scss             #
|       |-- _employeeDetail.scss        #  
|       |-- _employeeHome.scss          #  
|       |-- _feedbackSubmit.scss        #                  
|       |-- _header.scss                #
|       |-- _loggedInHeader.scss        #  
|       |-- _loggedOutHeader.scss       #
|       |-- _loginPage.scss             #
|       |-- _quickLinks.scss            #
|       |-- _timeOffRequest.scss        #
|       |-- _variables.scss             # Theorem color pallette and fonts
|       |-- style.scss                  # Compiled scss files for css conversion
|   App.js                              # Core Functions + Routing + State
|   App.scss                            #
|   App.test.js                         #
|   index.js                            #
|   index.scss                          #
|   logo.svg                            #
|   serviceWorker.js                    #
|   setupTests.js                       #
|   test_json_object.js                 #
|   .gitignore                          #
|   package.json                        #
|   package-lock.json                   #
|   README.md                           #
|   yarn.lock                           #
```


## Support and contact details

_For any questions, comments or contributions please contact Josh Forman (cyborgforman@gmail.com), Kyle Wymer (wymerkd@gmail.com), or Marcus Jensen (marcusjensen1515@gmail.com)_

## Technologies Used

_React, emailJS, SCSS, CSS_

#### By _**Joshua Forman, Marcus Jensen, and Kyle Wymer**_

### License

*The MIT License


Copyright (c) 2020 **_Joshua Forman, Kyle Wymer, Marcus Jensen_**


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
