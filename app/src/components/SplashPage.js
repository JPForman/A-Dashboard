import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Report from './ReportDashboard';
import GridHeader from './GridHeading';
import SidebarNav from './SidebarNav';
// Images
import Twilio from '../media/AB-Tests.png';
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
      imageURL: B2C,
      info: 'Business to Consumer Data'
    },
    {
      header: pageViewArray[1],
      imageURL: Twilio,
      info: 'Twilio Data'
    },
    {
      header: pageViewArray[2],
      imageURL: Agent,
      info: 'Agent Data'
    },
    {
      header: pageViewArray[3],
      imageURL: ABTest,
      info: 'Get a Quote Data'
    },
    {
      header: pageViewArray[4],
      imageURL: ABTest,
      info: 'Click to Call Sticky Footer'
    },
    {
      header: pageViewArray[5],
      imageURL: ABTest,
      info: 'One Step Form - Retest'
    },
    {
      header: pageViewArray[6],
      imageURL: ABTest,
      info: 'Submit to Request a Quote'
    },
    {
      header: pageViewArray[7],
      imageURL: ABTest,
      info: 'B2A One Step'
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
    <div className='reports'>
      <h1>Business Reports</h1>
      <div className="reports-business">
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
      </div>
      <h1>A/B Test Reports</h1>
      <div className="reports-abTests">
        <Card
          data={dataList[3]}
          image={dataList[3].imageURL}
          setActiveView={setActiveView}
        />
        <Card
          data={dataList[4]}
          image={dataList[4].imageURL}
          setActiveView={setActiveView}
        />
        <Card
          data={dataList[5]}
          image={dataList[5].imageURL}
          setActiveView={setActiveView}
        />
        <Card
          data={dataList[6]}
          image={dataList[6].imageURL}
          setActiveView={setActiveView}
        />
        <Card
          data={dataList[7]}
          image={dataList[7].imageURL}
          setActiveView={setActiveView}
        />
      </div>
      <style>
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
          .reports-business .card, .reports-abTests .card {
            width: 30%;
            border: 1px solid #00A5E6;
            font-family: 'Montserrat', sans-serif;
            overflow: hidden;
            transition: all .2s ease-in-out;
            height: 200px;
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
          .card:hover {
            box-shadow: 0 5px 10px #0068A7;
            transform: scale(1.05); }
      `}
      </style>
    </div>
  } else if (activeView !== 'Default'){
    iframeJSX = <div className='frame-holder'>
      <SidebarNav
        activeView={activeView}
        setActiveView={setActiveView}
        pageViewArray={pageViewArray}
      />
      <Report
        report={reportList[0]}
        activeView={activeView}
      />
      <style>
        {`
        #root {
          height: 100vh;
          width: 100vw;
        }
        `}
      </style>
      </div>
  }

  return (
  <div>
    <div className='reports'>
      <h1>Business Reports</h1>
      <div className="reports-business">
        <Link to='/b2cReport'>
          <Card
            data={dataList[0]}
            image={dataList[0].imageURL}
          />
        </Link>
        <Link to='/twilioReport'>
          <Card
            data={dataList[1]}
            image={dataList[1].imageURL}
          />
        </Link>
        <Link to='/agentReport'>
          <Card
            data={dataList[2]}
            image={dataList[2].imageURL}
            setActiveView={setActiveView}
          />
        </Link>
      </div>
      <h1>A/B Test Reports</h1>
      <div className="reports-abTests">
        <Link to='/getAQuote'>
          <Card
            data={dataList[3]}
            image={dataList[3].imageURL}
            setActiveView={setActiveView}
          />
        </Link>
        <Link to='/clickToCall'>
          <Card
            data={dataList[4]}
            image={dataList[4].imageURL}
            setActiveView={setActiveView}
          />
        </Link>
        <Link to='/oneStepForm'>
          <Card
            data={dataList[5]}
            image={dataList[5].imageURL}
            setActiveView={setActiveView}
          />
        </Link>
        <Link to='/b2aOneStep'>
          <Card
            data={dataList[6]}
            image={dataList[6].imageURL}
            setActiveView={setActiveView}
          />
        </Link>
        <Link to='/b2aOneStep'>
            <Card
              data={dataList[7]}
              image={dataList[7].imageURL}
              setActiveView={setActiveView}
            />
        </Link>
      </div>
      <style>
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
          .reports-business .card, .reports-abTests .card {
            width: 30%;
            border: 1px solid #00A5E6;
            font-family: 'Montserrat', sans-serif;
            overflow: hidden;
            transition: all .2s ease-in-out;
            height: 200px;
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
          .card:hover {
            box-shadow: 0 5px 10px #0068A7;
            transform: scale(1.05); }
      `}
      </style>
    </div>

  </div>
  );
}
export default SplashPage;







//old code for reference

// function SplashPage({ activeView, setActiveView, pageViewArray, reportArray }) {
//   let pageHeading;
//   let cardJSX;
//   let iframeJSX;

//   const dataList = [
//     {
//       header: pageViewArray[0],
//       imageURL: B2C,
//       info: 'Business to Consumer Data'
//     },
//     {
//       header: pageViewArray[1],
//       imageURL: Twilio,
//       info: 'Twilio Data'
//     },
//     {
//       header: pageViewArray[2],
//       imageURL: Agent,
//       info: 'Agent Data'
//     },
//     {
//       header: pageViewArray[3],
//       imageURL: ABTest,
//       info: 'Get a Quote Data'
//     },
//     {
//       header: pageViewArray[4],
//       imageURL: ABTest,
//       info: 'Click to Call Sticky Footer'
//     },
//     {
//       header: pageViewArray[5],
//       imageURL: ABTest,
//       info: 'One Step Form - Retest'
//     },
//     {
//       header: pageViewArray[6],
//       imageURL: ABTest,
//       info: 'Submit to Request a Quote'
//     },
//     {
//       header: pageViewArray[7],
//       imageURL: ABTest,
//       info: 'B2A One Step'
//     }
//   ];

//   const reportList = [
//     {
//       screen: reportArray[0]  
//     }
//   ];

//   if (activeView=== 'Default'){
//     pageHeading =
//     <GridHeader
//       setActiveView={setActiveView}
//     />
//     cardJSX =
//     <div className='reports'>
//       <h1>Business Reports</h1>
//       <div className="reports-business">
//         <Card
//           data={dataList[0]}
//           image={dataList[0].imageURL}
//           setActiveView={setActiveView}
//         />
//         <Card
//           data={dataList[1]}
//           image={dataList[1].imageURL}
//           setActiveView={setActiveView}
//         />
//         <Card
//           data={dataList[2]}
//           image={dataList[2].imageURL}
//           setActiveView={setActiveView}
//         />
//       </div>
//       <h1>A/B Test Reports</h1>
//       <div className="reports-abTests">
//         <Card
//           data={dataList[3]}
//           image={dataList[3].imageURL}
//           setActiveView={setActiveView}
//         />
//         <Card
//           data={dataList[4]}
//           image={dataList[4].imageURL}
//           setActiveView={setActiveView}
//         />
//         <Card
//           data={dataList[5]}
//           image={dataList[5].imageURL}
//           setActiveView={setActiveView}
//         />
//         <Card
//           data={dataList[6]}
//           image={dataList[6].imageURL}
//           setActiveView={setActiveView}
//         />
//         <Card
//           data={dataList[7]}
//           image={dataList[7].imageURL}
//           setActiveView={setActiveView}
//         />
//       </div>
//       <style>
//         {` 
//           .reports {
//             max-width: 900px;
//             margin: 0px auto;
//           }
//           .reports h1 {
//             width: 100%;
//             font-family: sans-serif;
//           }
//           .reports-business {
//             display:flex;
//           }
//           .reports-business .card, .reports-abTests .card {
//             width: 30%;
//             border: 1px solid #00A5E6;
//             font-family: 'Montserrat', sans-serif;
//             overflow: hidden;
//             transition: all .2s ease-in-out;
//             height: 200px;
//             background: #00A5E6;
//             display: flex;
//             flex-direction: column;
//             justify-content: center;
//             margin: 15px 10px;
//             float:left;
//           }
//           .card-icon {
//               height: 75px;
//               margin: 0px auto;}
//           .card-title {
//             font-size: 24px;
//             text-align: center;
//             color: #fff; }
//           .card:hover {
//             box-shadow: 0 5px 10px #0068A7;
//             transform: scale(1.05); }
//       `}
//       </style>
//     </div>
//   } else if (activeView !== 'Default'){
//     iframeJSX = <div className='frame-holder'>
//       <SidebarNav
//         activeView={activeView}
//         setActiveView={setActiveView}
//         pageViewArray={pageViewArray}
//       />
//       <Report
//         report={reportList[0]}
//         activeView={activeView}
//       />
//       <style>
//         {`
//         #root {
//           height: 100vh;
//           width: 100vw;
//         }
//         `}
//       </style>
//       </div>
//   }
//   return (
//   <React.Fragment>
//     {pageHeading}
//     {cardJSX}
//     {iframeJSX}
//   </React.Fragment>
//   );
// }
// export default SplashPage;