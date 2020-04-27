//imported icons for splash page buttons
import AgentIcon from '../media/Agent.png';
import B2CIcon from '../media/B2C.png';
import TwilioIcon from '../media/AB-Tests.png';

//Key Test Info - alphabetical by componentExport
const masterBusinessReportsList = [
  {
    title: 'Coordinated Auction Insights',
    lowerCamelCaseRouteTitle: 'agentReport',
    componentExport: 'AgentReport', //make sure this name matches the name of the default export of the component
    description: '',
    startDate:"April 6",
    endDate:"May 19",
    cvr:"",
    statSig:"",
    dateOfStatSig:"2020-03-04",
    reportID: '7f625067-0766-4027-9bd6-5464a7e8203a',
    splashImgUrl: AgentIcon, //import at top
  },
  {
    title: 'B2C Performance',
    lowerCamelCaseRouteTitle: 'b2cReport',
    componentExport: 'B2CReport', 
    description: '',
    startDate:"April 7",
    endDate:"May 27",
    cvr:"",
    statSig:"",
    dateOfStatSig:"2020-03-04",
    reportID: '7f625067-0766-4027-9bd6-5464a7e8203a',
    splashImgUrl: B2CIcon, 
  },
  {
    title: 'Twilio',
    lowerCamelCaseRouteTitle: 'twilioReport',
    componentExport: 'TwilioReport', 
    description: '',
    startDate:"April 11",
    endDate:"May 12",
    cvr:"",
    statSig:"",
    dateOfStatSig:"2020-03-04",
    reportID: '7f625067-0766-4027-9bd6-5464a7e8203a',
    splashImgUrl: TwilioIcon, 
  },
  
]

export default masterBusinessReportsList;