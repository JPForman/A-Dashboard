// Imported Dependancies
import React from 'react';
import {Switch, Route, Link } from 'react-router-dom';

// Imported Components
import NavBar from './components/NavBar';
import SplashPage from './components/SplashPage';
import B2AOneStep from './components/ab-tests/b2a-one-step';
import GetAQuote from './components/ab-tests/get-a-quote';
import OneStepForm from './components/ab-tests/one-step-form-retest';
import ClickToCall from './components/ab-tests/click-to-call';
import RequestAQuote from './components/ab-tests/submit-to-request-quote';
import SidebarNav from './components/SidebarNav';
import ReportTemplate from './components/reports/ReportTemplate';
import Error404 from './components/Error404';

// Reports List
import masterABTestList from './constants/masterABTestList';
import masterBusinessReportsList from './constants/masterBusinessReportsList';

// Styles
import './scss/_reportDash.scss'


function App() {

  // Hook to set display of Sidebar Nav 
  const [sidebarNavDisplay, setSidebarNavDisplay] = React.useState('block');


  return (    
    <div>
      <NavBar />

      <div style={{display: `${sidebarNavDisplay}`}}>
        <SidebarNav />
      </div>
      
      <Switch >
        <Route exact path='/' render={()=><SplashPage 
          setSidebarNavDisplay= {setSidebarNavDisplay}/>}/>

        {masterBusinessReportsList.map((test, index) => (
        <Route exact path={'/' + test.lowerCamelCaseRouteTitle}
          render={()=><ReportTemplate
          setSidebarNavDisplay= {setSidebarNavDisplay} 
          report = {masterBusinessReportsList.find(({ title }) => title === test.title )} 
          />}/>))}


        <Route exact path='/getAQuote' render={()=><GetAQuote 
          setSidebarNavDisplay= {setSidebarNavDisplay} 
          report = {masterABTestList.find(({ title }) => title === 'Get a Quote CTA')}
          />}/>

        <Route exact path='/clickToCall' render={()=><ClickToCall 
          setSidebarNavDisplay= {setSidebarNavDisplay} 
          report = {masterABTestList.find(({ title }) => title === 'Click to Call Sticky Footer')}
          />}/>

        <Route exact path='/oneStepForm' render={()=><OneStepForm 
          setSidebarNavDisplay= {setSidebarNavDisplay} 
          report = {masterABTestList.find(({ title }) => title === 'One Step Form - Retest')}
          />}/>

        <Route exact path='/submitToRequestAQuote' render={()=><RequestAQuote 
          setSidebarNavDisplay= {setSidebarNavDisplay} 
          report = {masterABTestList.find(({ title }) => title === 'Submit to Request a Quote')}
          />}/>

        <Route exact path='/b2aOneStep' render={()=><B2AOneStep 
          setSidebarNavDisplay= {setSidebarNavDisplay} 
          report = {masterABTestList.find(({ title }) => title === 'B2A One Step')}
          />}/>

        <Route render={()=> <Error404 
          setSidebarNavDisplay= {setSidebarNavDisplay} />}/>
      </Switch>

    </div>
  );
}

export default App;


// attempting loop for routes

// {masterBusinessReportsList.map((test, index) => (
//   <Route exact path={'/' + test.lowerCamelCaseRouteTitle}
//     render={()=><ReportTemplate
//     setSidebarNavDisplay= {setSidebarNavDisplay} 
//     report = {masterBusinessReportsList.find(({ title }) => title === test.title )} 
//     />}/>))}




// <Route exact path='/b2cReport' render={()=><ReportTemplate 
//   setSidebarNavDisplay= {setSidebarNavDisplay} 
//   report = {masterBusinessReportsList.find(({ title }) => title === 'B2C Performance')}
//   />}/>

// <Route exact path='/twilioReport' render={()=><ReportTemplate 
//   setSidebarNavDisplay= {setSidebarNavDisplay} 
//   report = {masterBusinessReportsList.find(({ title }) => title === 'Twilio')}
//   />}/>

// <Route exact path='/agentReport' render={()=><ReportTemplate 
//   setSidebarNavDisplay= {setSidebarNavDisplay} 
//   report = {masterBusinessReportsList.find(({ title }) => title === 'Coordinated Auction Insights')}
//   />}/>