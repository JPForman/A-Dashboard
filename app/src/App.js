import React from 'react';
import NavBar from './components/Navbar';
import SplashPage from './components/SplashPage';
import {reportVariables} from './constants/reportVariables'

function App() {
  const [activeView, setActiveView] = React.useState('Default');
  const pageViewArray = ['B2C Performance', 'Twilio', 'Coordinated Auction Insights', 'A/B Testing']
  const reportArray = ['Bi testing']

  return (    
    <div>
      <NavBar       
        activeView = {activeView}
        setActiveView = {setActiveView}
        pageViewArray= {pageViewArray}
      />
      <div className='display-space'>
        <SplashPage
          activeView={activeView}
          setActiveView={setActiveView}
          pageViewArray= {pageViewArray}
          reportArray={reportArray}
        />
      </div>
    </div>
  );
}

export default App;