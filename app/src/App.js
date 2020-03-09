import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SplashPage from './components/SplashPage';

function App() {
  const [loginStatus, setLoginStatus] = React.useState(false);
  const [activeView, setActiveView] = React.useState('Default');
  const pageViewArray = ['Business to Consumer', 'Business to Business', 'Agent', 'A/B Testing']
  const reportArray = ['Bi testing']

  let contentMargin = (activeView==='Default') ? '150': '50';

  return (
    <div>
      <style>{`
        .display-space{
        margin-top: ${contentMargin}px;
        }
      `}</style>
      <NavBar       
        loginStatus = {loginStatus}
        setLoginStatus = {setLoginStatus}
        activeView = {activeView}
        setActiveView = {setActiveView}
        pageViewArray= {pageViewArray}

      />
      <div className='display-space'>
        <SplashPage 
          loginStatus = {loginStatus}
          setLoginStatus = {setLoginStatus}
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