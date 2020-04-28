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



{/* <style>
{` 
  .reports {
    max-width: 900px;
    margin: 0px auto;
  }
  .reports h1 {
    width: 100%;
    font-family: sans-serif;
  }
  .reports-business {
    display:flex;
  }
  .reports-business .link, .reports-abTests .link {
    width: 20%;
    border: 1px solid #00A5E6;
    // font-family: 'Montserrat', sans-serif;
    overflow: hidden;
    transition: all .2s ease-in-out;
    height: 200px;
    // background: #00A5E6;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // margin: 15px 10px;
    // float:left;
  }
  .reports-business .link .card, .reports-abTests .link .card{
    // width: 30%;
    border: 1px solid #00A5E6;
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
    // transition: all .2s ease-in-out;
    height: 100%;
    background: #00A5E6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 15px 10px;
    float:left;
  }
  .card-icon {
      height: 75px;
      margin: 0px auto;}
  .card-title {
    font-size: 24px;
    text-align: center;
    color: #fff; }
  .link:hover {
    box-shadow: 0 5px 10px #0068A7;
    transform: scale(1.05); }
`}
</style> */}