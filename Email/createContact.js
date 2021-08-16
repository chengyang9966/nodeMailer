const fetch = require('node-fetch');
const url = require('./Variables').url
const Header = require('./Variables').Header


// Methods :'POST'
// body{
//updateEnabled,
// email,
//   SMS:Phone Number,
//   attributes:{
//     FNAME:'Cheng Yang',LNAME:'Ong',
// }
// }

function CreateContact(props){
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

module.exports={CreateContact}
