import React from 'react';
import NavBar from './components/NavBar';
import SplashPage from './components/SplashPage';

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
      <SplashPage
        activeView={activeView}
        setActiveView={setActiveView}
        pageViewArray= {pageViewArray}
        reportArray={reportArray}
      />
    </React.Fragment>
  );
}

export default App;