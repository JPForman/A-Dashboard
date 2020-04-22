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

const options = {
    maintainAspectRatio: false	// Don't maintain w/h ratio
}

function RequestAQuote({title, description, startDate, endDate, cvr, statSig, dateOfStatSig, setSidebarNavDisplay}) {

    return (
        <React.Fragment>
        {setSidebarNavDisplay('block')}
        <div className="report-details">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="startDate">
                <h3>Start Date</h3>
                <p>{startDate}</p>
            </div>
            <div className="endDate">
                <h3>End Date</h3>
                <p>{endDate}</p>
            </div>
        </div>

        <div className="thumbnails">
            <div>
                <p>Control</p>
                <img className="Control" src="https://aflac.sfo2.digitaloceanspaces.com/request-a-quote.png" alt="VWO Control - Request a Quote"/>
            </div>

            <div>
                <p>Test Variant</p>
                <img className="Variant" src="https://aflac.sfo2.digitaloceanspaces.com/get-a-quote.png" alt="VWO Test Variant - Get a Quote"/>
            </div>
        </div>

        <div className="VWO">
            <div className="line-chart">
                <h3>V1 Control</h3>
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
            </div>

            <div className="line-chart">
                <h3>V2 Test Variant</h3>
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
            </div>
        </div>

        <div className="GA">
            <div className="line-chart">
                <h3>GA Timeline</h3>
                <Line 
                    data={data}
                    options={options}
                />
            </div>
        </div>

        <div className="VWO">
            <div className="line-chart">
                <h3>V1 Control</h3>
                <Line 
                    data={data}
                    options={options}
                />
            </div>

            <div className="line-chart">
                <h3>V2 Test Variant</h3>
                <Line 
                    data={data}
                    options={options}
                />
            </div>
        </div>
    </React.Fragment>
)};


export default RequestAQuote;