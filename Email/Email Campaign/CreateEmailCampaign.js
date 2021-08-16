const fetch = require('node-fetch');
const url = require('../Variables').TransactionURL
const Header = require('../Variables').Header


// Methods :'POST'
// body{
//updateEnabled,
// tag
// sender{
//     name:String,
//     email:String,
//     id:string
// }
// name
// htmlContent
// htmllURL
// templateId
// scheduledAt
// Subject
// rteplyto
// toFiled
// recipents

function CreateEmailCampaign(props){
    const {method,body}=props;
    let options={
  headers: Header

    }
    options.method=method
    options.body= JSON.stringify(body)

    fetch(url, options)
    .then(res => res.json())
    .then(json =>  console.log('json',json))
    .catch(err => console.error('error:' + err));
    
   
}

module.exports={CreateEmailCampaign}
