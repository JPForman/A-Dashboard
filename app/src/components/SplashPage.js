import React from 'react';
import Card from './Card';
import GridHeading from './GridHeading';

// Reports List
import masterABTestList from '../constants/masterABTestList';
import masterBusinessReportsList from '../constants/masterBusinessReportsList';


function SplashPage({ setSidebarNavDisplay }) {

  return (
  <div>
    {setSidebarNavDisplay('None')}
    <GridHeading />
    <div className="businessReports">
      
      <h1 id="businessReportHead">Business Reports</h1>
      <div className="reports">
      {masterBusinessReportsList.map((test, index) => (
            <Card
              title={test.title}
              image={test.splashImgUrl}
              link={test.lowerCamelCaseRouteTitle}
            />
        ))}
      </div>

      <h1 id="aBTestHeader">A/B Test Reports</h1>
      <div className="reports">
        {masterABTestList.map((test, index) => (
            <Card
              title={test.title}
              image={test.splashImgUrl}
              link={test.lowerCamelCaseRouteTitle}
            />
        ))}
      </div>

    </div>
  </div>
  );
}
export default SplashPage;
