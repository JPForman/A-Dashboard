import React from 'react';
import { Link } from 'react-router-dom';
import BackArrowImage from '../media/navigation_arrow_left.png';
import masterBusinessReportsList from '../constants/masterBusinessReportsList';
import masterABTestList from '../constants/masterABTestList';

function SidebarNav(){

  return (
    <div className='sidenav'>
       <div className='sidenav-links'>
        <Link to='/' className='nav-button' className='nav-button'><img src={BackArrowImage} alt="Back Arrow" className="left-arrow"></img>Dashboard</Link>
        
        <h3>Reports</h3>
        {masterBusinessReportsList.map((test, index) => (
          <Link to={test.lowerCamelCaseRouteTitle} className='nav-button'>{test.title}</Link>
        ))}

        <h3>A/B Tests</h3>
        {masterABTestList.map((test, index) => (
          <Link to={test.lowerCamelCaseRouteTitle} className='nav-button'>{test.title}</Link>
        ))}

      </div>

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
    </div>
   
  );
}

export default SidebarNav;