import React from 'react';
import { reportVariables } from '../constants/reportVariables.js'
import B2CReport from './reports/B2CReport'
import TwilioReport from './reports/TwilioReport'
import AgentReport from './reports/AgentReport'

function Reporting({ activeView }) {
  // configure the reportIds and report name in constants/reportVariables.js
  let reportData;

  switch(activeView){
    case 'B2C Performance':
      reportData = <div>
        <B2CReport
          reportID = {reportVariables.reportIds.b2c}
        />
      </div>
      break
    case 'Twilio': 
    reportData = <div>
      <TwilioReport
        reportID = {reportVariables.reportIds.twilio}
      />
    </div>
      break
    case 'Coordinated Auction Insights':
      reportData = <div>
        <AgentReport
          reportID = {reportVariables.reportIds.agent}
        />
      </div>
      break
    case 'A/B Testing':
      reportData = <div>

      </div>
    default: 
      break;
  }

  return(
    <div className='frameDiv'>
      <style>{`
        .frameDiv{
          justify-content: center;
          display: flex;
          align-items: center;
          width: 85vw;
          height: calc(100vh - 39px);
          background: #ccc;
        }
        .frameDiv div {
          width: 85vw;
          height: calc(100vh - 50px);
        }
        .powerbi-frame {
          height: 93.5vh;
          position: fixed;
          bottom: 0;
        }
        `}
      </style>
        {reportData}
    </div>
  ); 
}
export default Reporting