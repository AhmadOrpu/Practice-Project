const jwt = require('jsonwebtoken');

module.exports =(req,res,next)=>{
    let token = req.headers['token']

    jwt.verify(token,"xyz-123",function(error,decodeData){
        if(error){
            res.status(400).json({status:"Failed",data:error})
        }else{
            //Get UserName from decoded token & add with request header
            let UserName = decodeData['data']['UserName'];
            req.headers.UserName = UserName
            next();
        }
    })
}