import React, {useEffect, useState} from 'react';
import PowerbiEmbedded from 'react-powerbi'

function ReportRequest ({ reportID }) {
    // creates an array of the reportData
    const [reports, setReportData] = useState([]);
    const groupID = `e28872e3-b32a-4143-baa6-cd2eda51e440`;
    const config = `eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLVdFU1QyLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6ZmFsc2V9fQ%3d%3d`;

    console.log(reportID);

    useEffect(() =>{
        getReport();
    }, []);

    const getReport = async () => {
        const response = await fetch(`/api/report/${reportID}`);
        const data = await response.json();
        setReportData(data.Token);
        console.log(setReportData);
    }

    return (
    <div>  
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
    </div> 
)};


export default ReportRequest;