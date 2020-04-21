import React from 'react';
import NavBar from './components/NavBar';
import SplashPage from './components/SplashPage';
import {Switch, Route, Link } from 'react-router-dom';
import B2AOneStep from './components/ab-tests/b2a-one-step';

function App() {
  const [activeView, setActiveView] = React.useState('Default');
  const pageViewArray = ['B2C Performance', 'Twilio', 'Coordinated Auction Insights', 'Get a Quote', 'Click to Call Sticky Footer', 'One Step Form - Retest', 'Submit to Request a Quote', 'B2A One Step']
  const reportArray = ['Bi testing']

  return (    
    <React.Fragment>
      <NavBar       
        activeView = {activeView}
        setActiveView = {setActiveView}
        pageViewArray= {pageViewArray}
      />

      <Switch>
        <Route exact path="/feedback" render={()=><FeedbackSubmit onFeedbackSubmission={this.handleAddingNewFeedback}/>}/>

        <Route exact path='/b2aOneStep' render={()=><B2AOneStep />}/>
        <Route exact path='/getAQuote' render={()=><GetAQuote />}/>
        <Route exact path='/oneStepForm' render={()=><OneStepForm />}/>
        <Route exact path='/agentReport' render={()=><AgentReport />}/>
        <Route exact path='/twilioReport' render={()=><TwilioReport />}/>
        <Route exact path='/b2cReport' render={()=><B2CReport />}/>
        <Route exact path='/splashPage' render={()=><SplashPage 
          activeView={activeView}
          setActiveView={setActiveView}
          pageViewArray= {pageViewArray}
          reportArray={reportArray}/>}/>
        />

      </Switch>

    </React.Fragment>
  );
}

export default App;