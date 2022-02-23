const {Schema} = require('mongoose');
const customerSchema =  new Schema({
        name: {type:String, required:true},
        email:{type:String, required:true},
        currentBalance:{type:Number, required:true},
},{
    timestamps:true,
});

module.exports = customerSchema;