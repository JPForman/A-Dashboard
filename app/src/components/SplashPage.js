import React from 'react';
import Card from './Card';
import Bireport from './Bireport';

function SplashPage({ activeView, setActiveView, pageViewArray, reportArray }) {
  let cardJSX;
  let iframeJSX;

  const dataList = [
    {
      header: pageViewArray[0],
      info: 'Business to Consumer Data'
    },
    {
      header: pageViewArray[1],
      info: 'Business to Business Data'
    },
    {
      header: pageViewArray[2],
      info: 'Agent Data'
    },
    {
      header: pageViewArray[3],
      info: 'A/B Testing Data'
    }
  ];

  const reportList = [
    {
      screen: reportArray[0]  
    }
  ];

  if (activeView=== 'Default'){
    cardJSX = <div className='card-holder'>

      <Card
        data={dataList[0]}
        setActiveView={setActiveView}
      />
      <Card
        data={dataList[1]}
        setActiveView={setActiveView}
      />
      <Card
        data={dataList[2]}
        setActiveView={setActiveView}
      />
      <Card
        data={dataList[3]}
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
      <Bireport
        report={reportList[0]}
        activeView={activeView}
      />
      <style>
        {`
        .frame-holder {
        display: flex;
       flex-wrap: wrap;
       justify-content: center;
        }
        `}
      </style>
      </div>
  }
  return (
    <div>
      {cardJSX}
      {iframeJSX}
    </div>
  );
}
export default SplashPage;