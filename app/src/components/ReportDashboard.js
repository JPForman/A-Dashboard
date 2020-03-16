import React from 'react';
import { groupVariables } from '../constants/reportVariables';
import $ from 'jquery';
import ReportsAPI from './Posts'

function Reporting({ report, activeView, pageViewArray}) {
  // configure the reportIds and report name in constants/reportVariables.js

  // B2B Report Token JSON
  let tokenData;

  // function Token() {
  //   $.getJSON(`/api/token/${groupVariables.Aflac.reportIds.b2b}`, function(tokenData) {
  //     //data is the JSON string
  //     console.log(tokenData);
  //   });
  // };

  // Proof of concept for /api/token/<report ID>
  // function ReportFeed() {
  //   $.getJSON({
  //     url: '/api/report',
  //     success: function (report) {
  //         var table = $("<table><tr><th>Report Name</th><th>Embed URL</th><th>Report ID</th></tr>");
  //         var tr;
  //         for (var i = 0; i < report.length; i++) {
  //             tr = $("<tr>");
  //             tr.append("<td>" + report[i].name + "</td>");
  //             tr.append("<td>" + report[i].embedUrl + "</td>");
  //             tr.append("<td>" + report[i].id + "</td>");
  //             tr.append("</tr>");
  //             table.append(tr);
  //         }
  //         table.append("</table>");
  //         $("#jsonData").html(table);
  //     }
  //   });
  // };

  switch(activeView){
    case 'Business to Consumer':
      tokenData = <ReportsAPI params={report}/>
      break;
    case 'Business to Business': 
      tokenData = "http://www.youtube.com/embed/ZvQEHLA1o8M";
      break;
    case 'Agent':
      // urlString = <Report 
      //   embedType="report" // or "dashboard"
      //   tokenType="Embed" // or "Aad"
      //   accessToken="" // accessToken goes here
      //   embedUrl="" // embedUrl goes here
      //   embedId="" // Report or Dashboard ID goes here
      //   permissions="All" // or "View"
      //   style={myStyleObject}
      // />;
      break;
    case 'A/B Testing':
      tokenData = "http://www.youtube.com/embed/ZvQEHLA1o8M";
      break;
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
        `}
      </style>

        {tokenData}
  
    </div>
  ); 
}
export default Reporting;