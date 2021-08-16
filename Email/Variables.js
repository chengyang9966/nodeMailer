const url = 'https://api.sendinblue.com/v3/contacts';
const DOIURL = 'https://api.sendinblue.com/v3/contacts/doubleOptinConfirmation';
const TransactionURL ='https://api.sendinblue.com/v3/smtp/email'
const EmailCampaignURL='https://api.sendinblue.com/v3/emailCampaigns'
const Header = {Accept: 'application/json', 'Content-Type': 'application/json', 'api-key': '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'}

const method={
    POST:"post",
    GET:'get',
    PUT:'put',
    PATCH:'patch',
    DELETE:'delete'
}

exports.url=url
exports.TransactionURL=TransactionURL
exports.DOIURL=DOIURL
exports.Header=Header
exports.method=method