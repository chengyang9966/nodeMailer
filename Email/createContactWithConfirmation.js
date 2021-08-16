const fetch = require('node-fetch');
const url = require('./Variables').DOIURL
const Header = require('./Variables').Header

// Methods:'POST'


function CreateContactWithConfirmatiom(props){
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

module.exports={CreateContactWithConfirmatiom}
