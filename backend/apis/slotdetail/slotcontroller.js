const slot=require('./slotmodel')
exports.selectslot = (req,res)=>{
     if (req.body.slotid==undefined ||req.body.totalslot==undefined||req.body.perhourprice==undefined )
         {
         res.json({
             "message":"try again",
             "status":43,
             "success":false,
             
          });
         }
     else{
        let slotObj=new slot();
        slotObj.slotid=req.body.slotid,
        slotObj.totalslot=req.body.totalslot,
        slotObj.perhourprice=req.body.perhourprice,
        slotObj.save()
        
 
        .then(async slotobj=>{
         res.json({
             "message":" slot selected",
             "status":200,
             "success":true,
             "data":slotobj
             
          });
        })
        .catch(err=>{
         res.json({
             "message":"err while adding",
             "status":500,
             "success":false,
             "error": String(err)
             
          }); 
        })
      }
     }
     exports.updateslot= (req,res)=>{
          slot.updateOne({"_id":req.body._id},{
              slotid:req.body.slotid,
              totalslot:req.body.totalslot,
              perhourprice:req.body.perhourprice,
             
          })
          .then(data=>{
              res.json({
                  "message":" slotupdated",
                  "status":200,
                  "success":true
              })
          })    
      }
  exports.showslot= (req,res)=>{
     slot.find().exec(function(err,data){
          if(err){
               res.json({
                   "message":"Error in API",
                   "status":500,
                   "success":false,
                   "error":String(err)
               })
          }else{
              let slotObj=new slot();
              slotObj.slotid=req.body.slotid,
              slotObj.save()
              
              .then(async slotobj=>{
               res.json({
                   "message":"slotshow",
                   "status":200,
                   "success":true,
                   "slotobj":data
               })
          }
       )}
  })
  }
  exports.deleteslot= (req,res)=>{
      if(req.body._id==undefined || req.body._id==null)
      {
          res.json({
              "message":"Please Enter an Id to proceed",
              "status":400,
              "success":false
          })
      }
      else{
          slot.deleteOne({"_id":req.body._id})
          .then(data=>{
              res.json({
                  "message":"Delete slot",
                  "success":true,
                  "status":200
              })
          })
          .catch(err=>{
              res.json({
                  "message":"Error in Delete slot",
                  "success":false,
                  "status":500,
                  "error":String(err)
              })
          })
      }
      
  }
  