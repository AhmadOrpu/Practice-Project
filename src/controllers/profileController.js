const profileModel = require("../models/profileModel");
const jwt = require("jsonwebtoken");

//User Registration
exports.CreateProfile=(req,res)=>{
    let reqBody =req.body;
    profileModel.create(reqBody,(error,data)=>{
        if(error){
            res.status(400).json({status:"Failed",data:error})
        }else{
            res.status(201).json({status:"Success",data:data})
        }
    })
}

//User Login
exports.UserLogin=(req,res)=>{
    let UserName =req.body['UserName'];
    let Password =req.body['Password'];
    profileModel.find({UserName:UserName, Password:Password},(error,data)=>{
        if(error){
            res.status(400).json({status:"Failed",data:error})
        }else{
            if(data.length>0){
                //Create Auth Token 
                let payload ={
                    exp:Math.floor(Date.now()/1000)+(24*60*60),
                    data:data[0]
                }
                let token = jwt.sign(payload,"xyz-123");
                res.status(200).json({status:"Success",token:token,data:data});
            }else{
                res.status(400).json({status:"Unauthorized"})
            }
        }
    })
    }

    //User Profile read
    exports.SelectProfile=(req,res)=>{
        let UserName =req.headers['UserName']
        profileModel.find({UserName:UserName},(error,data)=>{
            if(error){
                res.status(400).json({status:"Failed",data:error})
            }else{
                res.status(201).json({status:"Success",data:data})
            }
        })
        }

    //User Profile Update
    exports.UpdateProfile=(req,res)=>{
        let UserName =req.headers['UserName'];
        let reqBody=req.body;
        profileModel.updateOne({UserName:UserName},reqBody,(error,data)=>{
            if(error){
                res.status(400).json({status:"Fail",data:error});
            }else{
                res.status(200).json({status:"Success",data:data});
            }
        })
        }    
