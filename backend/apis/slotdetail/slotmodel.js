var mongoose = require('mongoose');
var slotSchema = mongoose.Schema({
    slotid:{ type:Number},
    totalslot: { type: String,default:'' },
    perhourprice:{ type:String,default:''},
     slotType:{ type:Number,default:0},
    // 4- slot
    teacherId:{ type:mongoose.Schema.Types.ObjectId,ref:'admin',default:null},
    isBlocked:{ type:Boolean,default:false},
    createdAt:{ type:Date, default:Date.now()},
    updatedAt:{ type:Date }
});
var slot = module.exports = mongoose.model('slot', slotSchema);