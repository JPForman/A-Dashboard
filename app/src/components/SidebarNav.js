import React from 'react';
import BackArrowImage from '../media/navigation_arrow_left.png';

function SideNav({activeView, setActiveView, pageViewArray}){
  let signedInJSX= true;
  let buttonArray = [];

  if (activeView !=='Default'){
    pageViewArray.forEach((viewName)=>{
      let button;
      if (viewName===activeView) {
        button = <a className='nav-button active-view-button' >{viewName}</a>;
      } else {
        button = <a className='nav-button' onClick={() =>{changeView(viewName)}} className='nav-button' >{viewName}</a>;
      }
      buttonArray.push(button)
    });
    let backButton = <a className='nav-button' onClick={() => { changeView('Default') }} className='nav-button'><img src={BackArrowImage} alt="Back Arrow" className="left-arrow"></img>Dashboard</a>
    buttonArray.push(backButton);
  } else {
    buttonArray.push(null);
  }
  function changeView(entry){
    setActiveView(entry);
  }
  if (signedInJSX===true){
    signedInJSX = <div className='sign-out-cluster'><a href="/user/sign-out" className='sign-out'>Sign Out</a></div>
  }
  return (
    <div className='sidenav'>
      <style>
      {`
        .sidenav {
          color: #fff;
          width: 15vw;
          float: left;
          padding-top: 15px;}
          .sidenav-links {
            display: flex;
            flex-direction: column; }
            .sidenav-links .nav-button {
              font-size: 15px;
              color: black;
              text-align: left;
              font-family: sans-serif;
              padding: 10px 10px 10px 30px; }
              .sidenav-links .nav-button img.left-arrow {
                height: 20px;
                float: left;
                margin: -2px 15px 0px -10px; }
              .sidenav-links .nav-button.active-view-button {
                color: #F88C00;
                font-weight: bold; }
              .sidenav-links .nav-button:hover {
                text-decoration: underline; }
        .sidenav-links h3 {
          color: #333;
          font-family: sans-serif;
          padding-left: 15px;
          border-bottom: 1px solid rgba(0,0,0,0.2);
        }
        .startDate, .endDate {
          width: 50%;
          float: left;
        }
         
      `}
      </style>
     
      <div className='sidenav-links'>
        {buttonArray[8]}
        <h3>Reports</h3>
        {buttonArray[0]}
        {buttonArray[1]}
        {buttonArray[2]}
        <h3>A/B Tests</h3>
        {buttonArray[3]}
        {buttonArray[4]}
        {buttonArray[5]}
        {buttonArray[6]}
        {buttonArray[7]}
      </div>
    </div>
   
  );
}

export default SideNav;