import React from 'react';
// Use React-Router-DOM for routing back button in browser as needed - check functionality with Brandon once in Q/A Phase
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import NavBar from './components/Navbar';
import SplashPage from './components/SplashPage';

function App() {
  const [activeView, setActiveView] = React.useState('Default');
  const pageViewArray = ['Business to Consumer', 'Business to Business', 'Agent', 'A/B Testing']
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