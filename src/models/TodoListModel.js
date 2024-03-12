const mongoose = require('mongoose');

let DataSchema = mongoose.Schema(
    {
        UserName:{type:'string'},
        TodoSubject:{type:'string'},
        TodoDescription:{type:'string'},
        TodoStatus:{type:'string'},
        
    },{versionKey:false,timestamps:true}
)
let TodoListModel = mongoose.model("todolists",DataSchema);

module.exports =TodoListModel;