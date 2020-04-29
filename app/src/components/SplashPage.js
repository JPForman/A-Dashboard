import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import GridHeading from './GridHeading';

// Reports List
import masterABTestList from '../constants/masterABTestList';
import masterBusinessReportsList from '../constants/masterBusinessReportsList';

// Styles
// import '../scss/_card.scss'

function SplashPage({ setSidebarNavDisplay }) {

  return (
  <div>
    {setSidebarNavDisplay('None')}
    <GridHeading />
    <div className="businessReports">
      
      <h1 id="businessReportHead">Business Reports</h1>
      <div className="reports">
      {masterBusinessReportsList.map((test, index) => (
          <Link to={test.lowerCamelCaseRouteTitle} className='link'>
            <Card
              title={test.title}
              image={test.splashImgUrl}
            />
          </Link>
        ))}
      </div>

      <h1 id="aBTestHeader">A/B Test Reports</h1>
      <div className="reports">
        {masterABTestList.map((test, index) => (
          <Link to={test.lowerCamelCaseRouteTitle} className='link'>
            <Card
              title={test.title}
              image={test.splashImgUrl}
            />
          </Link>
        ))}

      </div>
    </div>
  </div>
  );
}
export default SplashPage;
