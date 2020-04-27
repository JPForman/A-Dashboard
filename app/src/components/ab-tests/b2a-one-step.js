import React from 'react';
import {Pie, Doughnut, Line } from 'react-chartjs-2'

const state = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }
    ]
};

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };



function B2AOneStep({report, setSidebarNavDisplay}) {
    
    const title = report.title
    const description = report.description
    const startDate = report.startDate
    const endDate = report.endDate
    const cvr = report.cvr
    const statSig = report.statSig
    const dateOfStatSig = report.dateOfStatSig

    return (
    <React.Fragment>
        {setSidebarNavDisplay('block')}
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>Start Date</h3>
        <p>{startDate}</p>
        <h3>End Date</h3>
        <p>{endDate}</p>
        <h3>CVR</h3>
        <p>{cvr}</p>
        <h3>Statistical Significance of Test and Date</h3>
        <p>{statSig} | {dateOfStatSig}</p>

        <Pie 
            data={state}
            optionst={{
                title:{
                    display:true,
                    text:'Average engagement',
                    fontSize: 20
                },
                legend:{
                    display:true,
                    poition: 'right'
                }
            }}
        />

        <Doughnut 
            data={state}
            options={{
                title:{
                    display:true,
                    text:'Average engagement 2',
                    fontSize: 20
                },
                legend:{
                    display: true,
                    position: 'right'
                }
            }}
        />
        <h3>Traffic per Day</h3>
        <Line data={data} />
        
    </React.Fragment> 
)};


export default B2AOneStep;