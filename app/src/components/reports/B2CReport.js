import React, {useEffect, useState} from 'react';
import PowerbiEmbedded from 'react-powerbi'

function B2CReport({setSidebarNavDisplay, report}) {
    console.log('report in b2c= ', report);
    
    // creates an array of the reportData
    const reportID = report.reportID;
    const [reports, setReportData] = useState([]);
    const groupID = `e28872e3-b32a-4143-baa6-cd2eda51e440`;
    const config = `eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLVdFU1QyLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6ZmFsc2V9fQ%3d%3d`;

    useEffect(() =>{
        getReport();
    }, []);

    const getReport = async () => {
        const response = await fetch(`/api/report/${reportID}`);
        const data = await response.json();
        setReportData(data.Token);
    }

    return (
    <React.Fragment>  
        {setSidebarNavDisplay('block')}
        <PowerbiEmbedded
            id={reportID}
            embedUrl={`https://app.powerbi.com/reportEmbed?reportId=${reportID}&groupId=${groupID}&config=${config}`}
            accessToken={reports}
            filterPaneEnabled={true}
            navContentPaneEnabled={true}
            embedType={`report`}
            tokenType={`Embed`}
            permissions={`All`}
        />
    </React.Fragment> 

)};


export default B2CReport;