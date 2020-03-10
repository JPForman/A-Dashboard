import React from 'react';
import { groupVariables } from '../constants/reportVariables';
 
function Bireport({ report, activeView, pageViewArray}) {

  let urlString;

  // URL constants for Workspace in Power BI
  const groupId = groupVariables.Aflac.groupId;
  const autoAuth = groupVariables.Aflac.autoAuth;
  const ctid = groupVariables.Aflac.ctid;
  const config = groupVariables.Aflac.config;

  // configure the reportIds and report name in constants/reportVariables.js
  let report1 = groupVariables.Aflac.reportIds.b2b;
  let report2 = groupVariables.Aflac.reportIds.b2c;
  let report3 = groupVariables.Aflac.reportIds.agent;

  switch(activeView){
    case 'Business to Consumer':
      urlString = `https://app.powerbi.com/reportEmbed?reportId=${groupVariables.Aflac.reportIds.b2b}&groupId=${groupId}&autoAuth=${autoAuth}&ctid=${ctid}&config=${config}`;
      break;
    case 'Business to Business':
      urlString = `https://app.powerbi.com/reportEmbed?reportId=${groupVariables.Aflac.reportIds.b2c}&groupId=${groupId}&autoAuth=${autoAuth}&ctid=${ctid}&config=${config}`;
      break;
    case 'Agent':
      urlString = `https://app.powerbi.com/reportEmbed?reportId=${groupVariables.Aflac.reportIds.agent}&groupId=${groupId}&autoAuth=${autoAuth}&ctid=${ctid}&config=${config}`;
      break;
    case 'A/B Testing':
      urlString = "http://www.youtube.com/embed/ZvQEHLA1o8M";
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