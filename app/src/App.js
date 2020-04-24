// Imported Dependancies
import React from 'react';
import {Switch, Route, Link } from 'react-router-dom';

// Imported Components
import NavBar from './components/NavBar';
import SplashPage from './components/SplashPage';
import B2AOneStep from './components/ab-tests/b2a-one-step';
import GetAQuote from './components/ab-tests/get-a-quote';
import OneStepForm from './components/ab-tests/one-step-form-retest';
import AgentReport from './components/reports/AgentReport';
import TwilioReport from './components/reports/TwilioReport';
import B2CReport from './components/reports/B2CReport';
import ClickToCall from './components/ab-tests/click-to-call';
import RequestAQuote from './components/ab-tests/submit-to-request-quote';
import SidebarNav from './components/SidebarNav';
import Error404 from './components/Error404';

// Test and Report Data
import { reportVariables } from './constants/reportVariables.js'
import { testVariables } from './constants/abTestVariables'

function App() {
  const [activeView, setActiveView] = React.useState('Default');
  const pageViewArray = ['B2C Performance', 'Twilio', 'Coordinated Auction Insights', 'Get a Quote', 'Click to Call Sticky Footer', 'One Step Form - Retest', 'Submit to Request a Quote', 'B2A One Step'];
  const reportArray = ['Bi testing'];


  // Hook to set display of Sidebar Nav 
  const [sidebarNavDisplay, setSidebarNavDisplay] = React.useState('block');

  return (    
    <div>
      <NavBar />

      <div style={{display: `${sidebarNavDisplay}`}}>
        <SidebarNav
          activeView={activeView}
          setActiveView={setActiveView}
          pageViewArray={pageViewArray}
        />
      </div>
      
      <Switch >
        <Route exact path='/' render={()=><SplashPage 
          activeView={activeView}
          setActiveView={setActiveView}
          pageViewArray= {pageViewArray}
          setSidebarNavDisplay= {setSidebarNavDisplay}
          reportArray={reportArray}/>}/>

        <Route exact path='/b2cReport' render={()=><B2CReport 
          setSidebarNavDisplay= {setSidebarNavDisplay}
          reportID = {reportVariables.reportIds.b2c}
          activeView = {activeView}/>}/>

        <Route exact path='/twilioReport' render={()=><TwilioReport 
          reportID = {reportVariables.reportIds.twilio}
          setSidebarNavDisplay= {setSidebarNavDisplay}/>}/>

        <Route exact path='/agentReport' render={()=><AgentReport 
          reportID = {reportVariables.reportIds.agent}
          setSidebarNavDisplay= {setSidebarNavDisplay}/>}/>

        <Route exact path='/getAQuote' render={()=><GetAQuote 
          title = {testVariables.report1.title}
          description = {testVariables.report1.description}
          startDate = {testVariables.report1.startDate}
          endDate = {testVariables.report1.endDate}
          cvr = {testVariables.report1.cvr}
          statSig = {testVariables.report1.statSig}
          dateOfStatSig = {testVariables.report1.dateOfStatSig}
          setSidebarNavDisplay= {setSidebarNavDisplay}/>}/>

        <Route exact path='/clickToCall' render={()=><ClickToCall 
          title = {testVariables.report2.title}
          description = {testVariables.report2.description}
          startDate = {testVariables.report2.startDate}
          endDate = {testVariables.report2.endDate}
          cvr = {testVariables.report2.cvr}
          statSig = {testVariables.report2.statSig}
          dateOfStatSig = {testVariables.report2.dateOfStatSig}
          setSidebarNavDisplay= {setSidebarNavDisplay}/>}/>

        <Route exact path='/oneStepForm' render={()=><OneStepForm 
          title = {testVariables.report3.title}
          description = {testVariables.report3.description}
          startDate = {testVariables.report3.startDate}
          endDate = {testVariables.report3.endDate}
          cvr = {testVariables.report3.cvr}
          statSig = {testVariables.report3.statSig}
          dateOfStatSig = {testVariables.report3.dateOfStatSig}
          setSidebarNavDisplay= {setSidebarNavDisplay}/>}/>

        <Route exact path='/submitToRequestAQuote' render={()=><RequestAQuote 
          title = {testVariables.report4.title}
          description = {testVariables.report4.description}
          startDate = {testVariables.report4.startDate}
          endDate = {testVariables.report4.endDate}
          cvr = {testVariables.report4.cvr}
          statSig = {testVariables.report4.statSig}
          dateOfStatSig = {testVariables.report4.dateOfStatSig}
          setSidebarNavDisplay= {setSidebarNavDisplay}/>}/>

        <Route exact path='/b2aOneStep' render={()=><B2AOneStep 
          title = {testVariables.report5.title}
          description = {testVariables.report5.description}
          startDate = {testVariables.report5.startDate}
          endDate = {testVariables.report5.endDate}
          cvr = {testVariables.report5.cvr}
          statSig = {testVariables.report5.statSig}
          dateOfStatSig = {testVariables.report5.dateOfStatSig}
          setSidebarNavDisplay= {setSidebarNavDisplay}/>}/>

        <Route render={()=> <Error404 
          setSidebarNavDisplay= {setSidebarNavDisplay} />}/>
      </Switch>

    </div>
  );
}

export default App;