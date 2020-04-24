//imported images for splash page buttons
import ABTestIcon from '../media/AB-Tests.png';

//Key Test Info - alphabetical by title
const masterABTestList = [
  {
    title: 'B2A One Step',
    lowerCamelCaseRouteTitle: 'b2aOneStep',
    componentExport: 'B2AOneStep', //make sure this name matches the name of the default export of the component
    description: '',
    startDate:"April 10",
    endDate:"May 8",
    cvr:"",
    statSig:"",
    dateOfStatSig:"2020-03-04",
    reportID: '',
    splashImgUrl: ABTestIcon, //import at top
  },
  {
    title: 'Click to Call Sticky Footer',
    lowerCamelCaseRouteTitle: 'clickToCall',
    componentExport: 'ClickToCall',
    description: '',
    startDate:"March 4",
    endDate:"April 30",
    cvr:"",
    statSig:"",
    dateOfStatSig:"2020-03-04",
    reportID: '',
    splashImgUrl: ABTestIcon,
  },
  {
    title: 'Get a Quote CTA',
    lowerCamelCaseRouteTitle: 'getAQuote',
    componentExport: 'GetAQuote', 
    description:'Changing the verbage used from "Request a Quote" to "Get a Quote" to help communicate the action the user is initiating more clearly.',
    startDate:"March 3",
    endDate:"March 13",
    cvr:"",
    statSig:"",
    dateOfStatSig:"2020-03-04",
    reportID: '',
    splashImgUrl: ABTestIcon, 
  },
  {
    title: 'One Step Form - Retest',
    lowerCamelCaseRouteTitle: 'oneStepForm',
    componentExport: 'OneStepForm', 
    description:"",
    startDate:"March 16",
    endDate:"March 30",
    cvr:"",
    statSig:"",
    dateOfStatSig:"2020-03-04",
    reportID: '',
    splashImgUrl: ABTestIcon, 
  },
  {
    title: 'Submit to Request a Quote',
    lowerCamelCaseRouteTitle: 'submitToRequestAQuote',
    componentExport: 'RequestAQuote', 
    description:"",
    startDate:"March 27",
    endDate:"April 9",
    cvr:"",
    statSig:"",
    dateOfStatSig:"2020-03-04",
    reportID: '',
    splashImgUrl: ABTestIcon, 
  }
]

export default masterABTestList;