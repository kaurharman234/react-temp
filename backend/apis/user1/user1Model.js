var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    userId:{ type:Number},
    name: { type: String,default:'' },
    email:{ type:String,default:''},
    password:{type:String,default:''},
    city :{type:String,default:''},
   userType:{ type:Number,default:0},
    // 1- user, 2- admin 
    teacherId:{ type:mongoose.Schema.Types.ObjectId,ref:'admin',default:null},
    
    isBlocked:{ type:Boolean,default:false},
    createdAt:{ type:Date, default:Date.now()},
    updatedAt:{ type:Date }
});
var user = module.exports = mongoose.model('user', userSchema);