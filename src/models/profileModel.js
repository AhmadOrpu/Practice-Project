const mongoose = require('mongoose');

let DataSchema = mongoose.Schema(
    {
        FirstName:{type:'string'},
        LastName:{type:'string'},
        EmailAddress:{type:'string'},
        MobileNumber:{type:'string'},
        City:{type:'string'},
        UserName:{type:'string',unique:true},
        Password:{type:'string'}

    },{versionKey:false,timestamps:true}
)
let profileModel = mongoose.model("profiles",DataSchema);

module.exports =profileModel;