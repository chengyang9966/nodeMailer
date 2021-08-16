// const fetch = require('node-fetch');
// var SibApiV3Sdk = require('sib-api-v3-sdk');
// var defaultClient = SibApiV3Sdk.ApiClient.instance;

// var apiKey = defaultClient.authentications['api-key'];
// const url = 'https://api.sendinblue.com/v3/smtp/email';
// const options = {
//   method: 'POST',
//   headers: {Accept: 'application/json', 'Content-Type': 'application/json'}
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));




// # Create a campaign\

// # Include the Sendinblue library\
var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;
// # Instantiate the client\
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';
var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();
// # Define the campaign settings\
emailCampaigns.name = "Campaign sent via the API";
emailCampaigns.subject = "My subject";
emailCampaigns.sender = {"name": "Cheng Yang", "email":"yang826066@gmail.com"};
emailCampaigns.type = "classic";
// # Content that will be sent\
emailCampaigns.htmlContent= 'Congratulations! You successfully sent this example campaign via the Sendinblue API.';
// # Select the recipients\
emailCampaigns.recipients={listIds: [2]};
// # Schedule the sending in one hour\
// scheduledAt: '2018-01-01 00:00:01';
// }

apiInstance.createEmailCampaign(emailCampaigns).then(function(data) {
    console.log('API called successfully. Returned data: ' + data);
    }, function(error) {
    console.error(error);
    });