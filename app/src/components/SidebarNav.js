// Dependencies for component
import React from 'react';
import TheoremLogo from '../media/theoremlogo.png';
import AflacLogo from '../media/aflaclogo.png';
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
          padding-top: 30px;}
          .sidenav-links {
            display: flex;
            flex-direction: column; }
            .sidenav-links .nav-button {
              height: 50px;
              font-size: 15px;
              color: black;
              text-align: center;
              font-family: sans-serif;
              line-height: 50px; }
              .sidenav-links .nav-button img.left-arrow {
                height: 25px;
                float: left;
                margin: 10px -40px 10px 25px; }
              .sidenav-links .nav-button.active-view-button {
                color: #F88C00;
                font-weight: bold; }
              .sidenav-links .nav-button:hover {
                text-decoration: underline; }
         
      `}
      </style>
     
      <div className='sidenav-links'>
        {buttonArray[4]}
        {buttonArray[0]}
        {buttonArray[1]}
        {buttonArray[2]}
        {buttonArray[3]}
      </div>
    </div>
   
  );
}

export default SideNav;