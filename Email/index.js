var {CreateContact} = require('./createContact')
var {GetAllContact} = require('./getAllContact')
var {CreateContactWithConfirmatiom} = require('./createContactWithConfirmation')
var {GetContactDetails} = require('./getContactDetails')
var {SendTransactionEmail} = require('./TransactionEmail/sendtransactionEmail')
var {CreateEmailCampaign} = require('./Email Campaign/CreateEmailCampaign')
module.exports={
    CreateContact:CreateContact,
    GetAllContact:GetAllContact,
    CreateContactWithConfirmatiom:CreateContactWithConfirmatiom,
    GetContactDetails:GetContactDetails,
    SendTransactionEmail:SendTransactionEmail,
    CreateEmailCampaign:CreateEmailCampaign
}