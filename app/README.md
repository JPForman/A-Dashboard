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

3. Add the new report to the array using the commented out template at the bottom of the file, then save.

4. Make a cup of coffee, or perhaps some tea.  

Note: this will automate the creation of the splash page button, the sideNav link, the route, and the report page for the new report. also, you will enjoy a tasty beverage.






## Specs

* _The application allows the user to view reports within a dashboard setting._


## Folder Structure

```
/App/
|-- /node_modules/                          # Node Modules
|
|-- /public/                                # Public Files
|   |-- index.html                          #
|   |-- manifest.json                       #  (extemporanious?)
|   |-- robots.txt                          #  (extemporanious?)
|   
|-- /src/                                   # Source files
|   |-- /components/
|       |-- /ab-tests/                      #
|           |-- b2a-one-step.js             #
|           |-- click-to-call.js            #
|           |-- get-a-quote.js              #
|           |-- one-step-form-retest.js     #           
|           |-- submit-to-request-quote.js  # 
|       |-- /reports/                       # 
|           |-- ReportTemplate.js           # Report Template Component
|       |-- _RequestAccessToken.js          # 
|       |-- Card.js                         #
|       |-- Error404.js                     #
|       |-- GridHeading.js                  #
|       |-- NavBar.js                       #
|       |-- ReportDashboard.js              #
|       |-- SidebarNav.js                   #
|       |-- SplashPage.js                   #
|   |-- /constants/                         #
|       |-- masterABTestList.js             # The array of AB tests with details
|       |-- masterBusinessReportList.js     # The array of Business Reports with details
|       |-- reportVariables.js              # (extemporanious?)
|   |-- /css/            
|       |-- style.css                       # 
|   |-- /data/            
|       |-- exampleToken.json               # (extemporanious?)
|       |-- reportsList.json                # (extemporanious?)
|   |-- /media/            
|       |-- AB-Tests.png                    # 
|       |-- aflaclogo.png                   # 
|       |-- Agent.png                       # 
|       |-- B2B.png                         # 
|       |-- B2C.png                         # 
|       |-- bc_duck_search.png              # 
|       |-- navigation_arrow_left.png       # 
|       |-- navigation_arrow_left.svg       # 
|       |-- theoremlogo.png                 # 
|   |-- /scss/  
|       |-- _card.scss                      #  
|       |-- _error404.scss                  #  
|       |-- _global.scss                    #  
|       |-- _gridHeading.scss               #                  
|       |-- _navbar.scss                    #  
|       |-- _reportDashboard.scss           #  
|       |-- _sidenav.scss                   #  
|       |-- _variables.scss                 #
|       |-- style.scss                      # Compiled scss files for css conversion
|   |-- App.js                              # 
|   |-- index.js                            #
|   |-- logo.svg                            #
|   |-- serviceWorker.js                    #
|   |-- setupTests.js                       #
|-- .gitignore                              #
|-- package-lock.json                       #
|-- package.json                            #
|-- README.md                               #
|-- server.js                               #
|-- yarn.lock                               #
```


## Support and contact details

_For any questions, comments or contributions please contact Josh Forman (cyborgforman@gmail.com), Kyle Wymer (wymerkd@gmail.com), or Marcus Jensen (marcusjensen1515@gmail.com)_

## Technologies Used

_React_

#### Contributors include: _**Joshua Forman, Marcus Jensen, Alysia Pretti**_

### License

*The MIT License


Copyright (c) 2020 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
