var mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
var adminSchema = mongoose.Schema({
    city:{type:String,default:''},
    adminname:{type:String,default:''},
    address:{type:String,default:''},
    userType:{ type:Number,default:0},
    // 1- admin, 2- user
    isBlocked:{ type:Boolean,default:false},
    createdAt:{ type:Date, default:Date.now()},
    updatedAt:{ type:Date }
});
var admin = module.exports = mongoose.model('admin', adminSchema);