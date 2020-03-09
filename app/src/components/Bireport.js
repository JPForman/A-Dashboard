import React from 'react';
import { groupVariables } from '../constants/Group&ReportVariables';
 
function Bireport({ report, activeView, pageViewArray}) {
  
  let urlString;
  let groupId = groupVariables.Aflac.groupId;
  let reportId = groupVariables.Aflac.reportId;

  switch(activeView){
    case 'Business to Consumer':
      urlString = "https://app.powerbi.com/reportEmbed?reportId=4e290b38-2f46-4095-a395-3e109108a768&groupId=e28872e3-b32a-4143-baa6-cd2eda51e440&autoAuth=true&ctid=fd9c8b21-1bba-4282-82b4-5f896cfccc0d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLXdlc3QyLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9";
      break;
    case 'Business to Business':
      urlString = "http://www.youtube.com/embed/2iKvsqOiLWc";
      reportId = groupVariables.Aflac.reportIds.b2b;
      break;
    case 'Agent':
      urlString = "http://www.youtube.com/embed/Tz24ATucSts";
      reportId = groupVariables.Aflac.reportIds.agent;
      break;
    case 'A/B Testing':
      urlString = "http://www.youtube.com/embed/ZvQEHLA1o8M";
      reportId = groupVariables.Aflac.reportIds.ABtest;
      break;
    default: 
      break;
  }

  return(
    <div className='frameDiv'>
      <iframe src={urlString} width='100%' height='100%' frameborder="0" allowfullscreen></iframe>
    <style>{`
      .frameDiv{
        justify-content: center;
        display: flex;
        align-items: center;
      
        width: ${window.innerWidth}px;
        height: ${(window.innerHeight-50)}px;
        overflow-y: scroll;
        overflow-x: hidden;
      }
      `}
    </style>
    </div>

  );
}
export default Bireport;