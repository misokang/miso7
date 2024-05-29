const path = require('path');

const AWS = require('aws-sdk');
AWS.config.loadFromPath(
    path.join(__dirname, 'config', 'awsConfig.json')
);
   
    module.exports = {
     nedds: () => ManagedUpload,
     api : {
       sendPw : ( req, res )=> {
        console.log(req.body)
       } ,
        }
      }
     
