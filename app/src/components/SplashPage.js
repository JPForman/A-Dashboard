import React from 'react';
import Card from './Card';
import SideNav from './SidebarNav';
import Report from './ReportDashboard';
import GridHeader from './GridHeading';

// Images
import B2B from '../media/B2B.png';
import Agent from '../media/Agent.png';
import B2C from '../media/B2C.png';
import ABTest from '../media/AB-Tests.png';

function SplashPage({ activeView, setActiveView, pageViewArray, reportArray }) {
  let pageHeading;
  let cardJSX;
  let iframeJSX;

  const dataList = [
    {
      header: pageViewArray[0],
      imageURL: {B2C},
      info: 'Business to Consumer Data'
    },
    {
      header: pageViewArray[1],
      imageURL: {B2B},
      info: 'Business to Business Data'
    },
    {
      header: pageViewArray[2],
      imageURL: {Agent},
      info: 'Agent Data'
    },
    {
      header: pageViewArray[3],
      imageURL: {ABTest},
      info: 'A/B Testing Data'
    }
  ];

  const reportList = [
    {
      screen: reportArray[0]  
    }
  ];

  if (activeView=== 'Default'){
    pageHeading =
    <GridHeader
      setActiveView={setActiveView}
    />
    cardJSX =
    <div className='card-holder'>  
      <Card
        data={dataList[0]}
        image={dataList[0].imageURL}
        setActiveView={setActiveView}
      />
      <Card
        data={dataList[1]}
        image={dataList[1].imageURL}
        setActiveView={setActiveView}
      />
      <Card
        data={dataList[2]}
        image={dataList[2].imageURL}
        setActiveView={setActiveView}
      />
      <Card
        data={dataList[3]}
        image={dataList[3].imageURL}
        setActiveView={setActiveView}
      />
      <style>
        {` 
          .card-holder {
            display: flex;
            flex-wrap: wrap;
            max-width: 700px;
            margin: 0px auto;
          }
      `}
      </style>
    </div>
  } else if (activeView !== 'Default'){
    iframeJSX = <div className='frame-holder'>
      <SideNav
        activeView= {activeView}
        setActiveView = {setActiveView}
        pageViewArray = {pageViewArray}
      />
      <Report
        report={reportList[0]}
        activeView={activeView}
      />
      <style>
        {`
        .frame-holder {
          
        }
        `}
      </style>
      </div>
  }
  return (
    <div>
      {pageHeading}
      {cardJSX}
      {iframeJSX}
    </div>
  );
}
export default SplashPage;