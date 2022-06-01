var mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
var parkingSchema = mongoose.Schema({
    city:{type:String,default:''},
    parkingname:{type:String,default:''},
    address:{type:String,default:''},
    userType:{ type:Number,default:0},
    // 1- parking, 2- user
    isBlocked:{ type:Boolean,default:false},
    createdAt:{ type:Date, default:Date.now()},
    updatedAt:{ type:Date }
});
var parking = module.exports = mongoose.model('parking', parkingSchema);