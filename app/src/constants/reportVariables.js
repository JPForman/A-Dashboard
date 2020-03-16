// var reports = $.ajax({
//   url: `/api/token/${groupVariables.Aflac.reportIds.b2b}`,
//   type: 'GET',
//   dataType: 'json', // using json, jquery will make parse
//   success: function(data) {
//     var test = data[0].value.name; //Twilio Summary
//     var test2 = data[1].value.name; //Auction Insights
//     console.log(test);
//     console.log(test2);
//   }
// });

export const groupVariables = {
  Aflac: {
    groupId: 'e28872e3-b32a-4143-baa6-cd2eda51e440',
    reportIds: {
      b2b: '3fcff4e4-dca4-4264-9df2-2ede5d788a0e',
      b2c: '3fcff4e4-dca4-4264-9df2-2ede5d788a0e',
      agent: '3fcff4e4-dca4-4264-9df2-2ede5d788a0e',
      ABtest: 'ABtestid'
    },
    reportAccessTokens: {
      b2b: '',
      b2c: '',
      agent: '',
      ABtest: ''
    }
  }
};