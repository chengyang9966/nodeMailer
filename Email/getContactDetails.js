const fetch = require('node-fetch');
const url = require('./Variables').url
const ContactURL=require('../helper/contactURL').ContactURL
const Header = require('./Variables').Header

// method:'GET'
// parameter=ID



function GetContactDetails(props){
    const {method,parameter}=props;
    let options={
        headers: Header
          }
          options.method=method
         let newURL= parameter?`${url}/${parameter}`:url
         console.log('newURL: ', newURL);
        
          fetch(newURL, options)
          .then(res =>res.json())
          .then(json =>  console.log('json',json))
          .catch(err => console.error('error:' + err));
}

module.exports={GetContactDetails}