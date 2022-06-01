var mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
var orderSchema = mongoose.Schema({
    orderid: {type:Number,default:0},
    userid:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"user"},
    cityid  :{type:Number,default:0},
    orderstatus:{type:Number,default:0},
    status:{type:Boolean,default:true},
    city:{type:String,default:''},
   address:{type:String,default:''},
   bookingname:{type:String,default:''},
    parkingname:{type:String,default:''},
    userType:{ type:Number,default:0},
    // 1-order, 2- user
    isBlocked:{ type:Boolean,default:false},
    createdAt:{ type:Date, default:Date.now()},
    updatedAt:{ type:Date }
});
var order= module.exports = mongoose.model('order',orderSchema);