var Email = require('./Email')
const Methods =require('./Email/Variables').method
let body={
    method: Methods.POST,
  body: {updateEnabled: true,email:'yang826066@gmail.com',
  SMS:'+60108930879',
  attributes:{
    FNAME:'Cheng Yang',LNAME:'Ong',
  },includeListIds:[2],
  templateId:1,
  redirectionUrl:'https://chengyangong.com'
},
}
let temp={
  method: Methods.GET,
  parameter:2
}
let newtemp={
  method: Methods.POST,
  body:{
    sender:{
      name:'Cheng Yang ',
      email:'yang826066@gmail.com'
    },
    to:[{name:'cheng Yang',email:'chengyang9966@gmail.com'}],
    htmlContent:'<p>HELLOO</p>',
    textContent:'HELOO',
    subjec:'TESTING',
    
  }
}
let newbodyTest={
  method: Methods.POST,
  body:{
    sender:{
      name:'chengyang',
      email:'chengyang9966@gmail.com'
    },
    name:'testing capaign',
    htmlContent:'<p>HELLOOO</p>',
    subject:'Hello CY',
    sendAtBestTime: false,
  }
}

// Email.CreateContactWithConfirmatiom(body)
// Email.SendTransactionEmail(body)
Email.CreateEmailCampaign(newbodyTest)
// Email.GetContactDetails(temp)
// Email.CreateContact(body)
let newbody={
  method: Methods.GET,
  parameter:{
    limit:5,
    sort:"asc"
  }
}
// Email.GetAllContact(newbody)