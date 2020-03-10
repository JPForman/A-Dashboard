// Dependencies for component
import React from 'react';
import AflacBrandImage from '../media/bc_duck_search.png'
import BackArrowImage from '../media/navigation_arrow_left.png'


function NavBar({loginStatus, setLoginStatus, activeView, setActiveView, pageViewArray}){
  let signedInJSX= null;
  let buttonArray = [];
  let hideLogoSpan = (activeView !== 'Default') ? 'hide-logo-span' : '';

  if (activeView !=='Default'){
    pageViewArray.forEach((viewName)=>{
      let button;
      if (viewName===activeView) {
        button = <button className='nav-button active-view-button' >{viewName}</button>;
      } else {
        button = <button className='nav-button' onClick={() =>{changeView(viewName)}} className='nav-button' >{viewName}</button>;
      }
      buttonArray.push(button)
    });
    let backButton = <button className='nav-button' onClick={() => { changeView('Default') }} className='nav-button'><img src={BackArrowImage} alt="Back Arrow" class="left-arrow"></img>Back</button>
    buttonArray.push(backButton);
  } else {
    buttonArray.push(null);
  }
  function changeView(entry){
    setActiveView(entry);
  }

  const signOut = () => {
    setLoginStatus(false);
    setActiveView('Default');
  }
  if (loginStatus===true){
    signedInJSX = <div className='sign-out-cluster'><button className='sign-out' onClick={signOut}>Sign Out</button></div>
  }
  return (
    <div className='navigation-bar'>
      <style>{`
        .navigation-bar {
          position: fixed;
          top: 0px;
          left: 0px;
          width: 100%;
          overflow: hidden;
          z-index: 1;
          font-family: 'Montserrat', sans-serif;
          background-color: #ffffff;
          transition: height 1s;
        }
        .navigation-buttons-span {
          color: #00A5E6;
          background-color: #fffffff;
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: space-between;
          overflow: hidden;
        }
        .navigation-bar-logo-span{
          background-color: #00A5E6;
          height: 100px;
          width: 100%;
          overflow:hidden;
        }
        .hide-logo-span {
          height: 1px;
        }
        .nav-cluster {
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-end;
          margin-right:20px;
        }

        .nav-button {
          color: #00A5E6;
          border: solid 0px rgba(0,0,0,0);
          background-color: rgba(255,255,255,1);
          transition: background-color .2s;
        }
        .nav-button:hover {
          background-color: #00A5E6;
          color: #fff;
        }
        .nav-button:first-child {
          width: 50px;
          display: block;
          background: #F89728;
          color: #fff
        }

        .nav-button .left-arrow {
          display: block;
          width: 30px;
          height: 30px;
          background: url(/static/media/navigation_arrow_left.png) no-repeat contain;
        }

        .active-view-button{
          background-color: #00A5E6;
          color: white;
        }

        .sign-out-cluster{
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-end;
          width: 200px;
        }
        .login-status{
          color: #F89728;
          margin-top:auto;
          margin-bottom:auto;
        }
        .sign-out {
          background-color: #00A5E6;
          color: rgba(255,255,255,1);
          border: solid 0px rgba(0,0,0,0);
          transition: background-color .2s;
        }
        .sign-out:hover{
          background-color: rgba(250,250,250,1);
          color: #00A5E6;
        }
        #aflac-brand-image{
          display: block;
          height: 200px;
          width: auto;
          margin: 10px -60px 0px;
          float: right;
        } 
      `}</style>
      <div className='navigation-buttons-span'>
        <div className='nav-cluster'>
          {buttonArray[4]}
          {buttonArray[0]}
          {buttonArray[1]}
          {buttonArray[2]}
          {buttonArray[3]}
        </div>
        {signedInJSX}
      </div>
      <div className={`navigation-bar-logo-span ${hideLogoSpan}`}>
        <img src={AflacBrandImage} alt="Aflac Duck" id='aflac-brand-image'/>
      </div>
    </div>
  );
}

export default NavBar;