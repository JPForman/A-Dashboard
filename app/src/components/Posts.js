export default class ReportAccessToken extends React.Component {

    renderPowerbiReport({ reportID, embedURL, embedToken }) {

        var config = {
            accessToken: embedToken,
            reportId: reportID,
            groupId: groupID,
            embedUrl: embedURL,
            AuthenticationType: "MasterUser",
            embedTokenType: "reports",
            embedType: "report",
            filterPaneEnabled: false,
            navContentPaneEnabled: false,
            height: "100vh",
            width: "100%"
        };
    
        var PbiFailErrorMessage = (
            <div className="App-link">
            Oops! Looks like something went wrong!
            </div>
        );
    
        var invalidConfigErrorMessage =  (
            <div className="App-link">
                Oops! Looks like something went wrong, <br /> Please contact{" "}
                <a href="mailto:support@theoremadvertising.com?Subject=Aflac Dashboard: Error 500">
                support@theoremadvertising.com
                </a>
            </div>
        );
    
        return (
            <div className="powerbi-wrapper">
                <PowerBiEmbed 
                    config={config} 
                    PbiFailErrorMessage={PbiFailErrorMessage}
                    invalidConfigErrorMessage = {invalidConfigErrorMessage}
                    hideDefaultError = {false}
                />
            </div>
        )
    };
};