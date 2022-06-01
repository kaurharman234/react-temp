var mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
var citySchema = mongoose.Schema({
    city:{type:String,default:''},
    cityId:{type:Number,default:0},
    address:{type:String,default:''},
    userType:{ type:Number,default:0},
    // 2- city
    isBlocked:{ type:Boolean,default:false},
    createdAt:{ type:Date, default:Date.now()},
    updatedAt:{ type:Date }
});
var city = module.exports = mongoose.model('city', citySchema);