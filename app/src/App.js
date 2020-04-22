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

function App() {
  const [activeView, setActiveView] = React.useState('Default');
  const pageViewArray = ['B2C Performance', 'Twilio', 'Coordinated Auction Insights', 'Get a Quote', 'Click to Call Sticky Footer', 'One Step Form - Retest', 'Submit to Request a Quote', 'B2A One Step']
  const reportArray = ['Bi testing']

  return (    
    <div>
      <NavBar       
        activeView = {activeView}
        setActiveView = {setActiveView}
        pageViewArray= {pageViewArray}
      />

      <SidebarNav
        activeView={activeView}
        setActiveView={setActiveView}
        pageViewArray={pageViewArray}
      />

      <Switch>
        <Route exact path='/' render={()=><SplashPage 
          activeView={activeView}
          setActiveView={setActiveView}
          pageViewArray= {pageViewArray}
          reportArray={reportArray}/>}/>

        <Route exact path='/b2cReport' render={()=><B2CReport />}/>
        <Route exact path='/twilioReport' render={()=><TwilioReport />}/>
        <Route exact path='/agentReport' render={()=><AgentReport />}/>
        <Route exact path='/getAQuote' render={()=><GetAQuote />}/>
        <Route exact path='/clickToCall' render={()=><ClickToCall />}/>
        <Route exact path='/oneStepForm' render={()=><OneStepForm />}/>
        <Route exact path='/submitToRequestAQuote' render={()=><RequestAQuote />}/>
        <Route exact path='/b2aOneStep' render={()=><B2AOneStep />}/>

      </Switch>

    </div>
  );
}

export default App;