import React from "react";
import ReactDOM from 'react-dom';

export default class ReportsAPI extends React.Component {
    

    state = {
        loading: true,
        report: undefined
    };
    
    async componentDidMount() {
        const url = "https://aflac-dashboard.herokuapp.com/api/reports"; // api url
        const response = await fetch(url, {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        const data = await response.json();
        this.setState({report: data.results[0], loading: false });

        await new Promise((resolve, reject) => setTimeout(resolve, 5000));

    };

    render() {
        return (
            <div>
                {this.state.loading || !this.state.report ? (
                    <div>loading...</div>
                ) : (
                    <div>
                        <div>{this.state.report.name}</div>
                        <div>{this.state.report.id}</div>
                        <div src={ this.state.report.embedUrl}></div>
                        <img src={this.state.report.reportType} />
                    </div>
                )}
            </div>
        );
    }
}