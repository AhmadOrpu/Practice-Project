const TodoListModel=require('../models/TodoListModel');
//Todo Create
exports.CreateToDo=(req,res)=>{
    let reqBody =req.body;
    reqBody.UserName = req.headers.UserName

    TodoListModel.create(reqBody,(error,data)=>{
        if(error){
            res.status(400).json({status:"Failed",data:error})
        }else{
            res.status(201).json({status:"Success",data:data})
        }
    })
}

//Todo Read
exports.SelectToDo=(req,res)=>{
    let UserName =req.headers['UserName']
    TodoListModel.find({UserName:UserName},(error,data)=>{
        if(error){
            res.status(400).json({status:"Failed",data:error})
        }else{
            res.status(201).json({status:"Success",data:data})
        }
    })
    }

//Todo Update
    exports.UpdateToDo=(req,res)=>{
        let reqBody=req.body;
        reqBody.UserName = req.headers.UserName
        let _id = req.body['_id']
        TodoListModel.updateOne({_id:_id},reqBody,(error,data)=>{
            if(error){
                res.status(400).json({status:"Fail",data:error});
            }else{
                res.status(200).json({status:"Success",data:data});
            }
        })
    }

    //Todo Delete
    exports.DeleteToDo=(req,res)=>{
        let reqBody=req.body;
        let _id = req.body['_id']
        TodoListModel.remove({_id:_id},(error,data)=>{
            if(error){
                res.status(400).json({status:"Fail",data:error});
            }else{
                res.status(200).json({status:"Success",data:data});
            }
        })
    }

    //Todo Complete/Cancel Mark 
    exports.UpdateStatusToDo=(req,res)=>{
        let TodoStatus=req.body['TodoStatus'];
        let payload={TodoStatus:TodoStatus}
        let _id = req.body['_id'];
        TodoListModel.updateOne({_id:_id},payload,(error,data)=>{
            if(error){
                res.status(400).json({status:"Fail",data:error});
            }else{
                res.status(200).json({status:"Success",data:data});
            }
        })
    }

