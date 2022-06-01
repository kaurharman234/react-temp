const parking = require('../addparking/parkingmodel')

exports.addparking = (req,res)=>{
    if (req==undefined||req.body==undefined||req.body.city==undefined ||
      req.body.parkingname==undefined||req.body.address==undefined
        )
        {
        res.json({
            "message":"try again",
            "status":43,
            "success":false,
            
         });
        }
    else{
       let parkingObj=new parking();
       parkingObj.city=req.body.city,
       parkingObj.parkingname=req.body.parkingname,
       parkingObj.address=req.body.address,
       parkingObj.save()
       

       .then(async parkingobj=>{
        res.json({
            "message":" parking added",
            "status":200,
            "success":true,
            "data":parkingobj
            
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
    exports.updateparking = (req,res)=>{
        parking.updateOne({"_id":req.body._id},{
            city:req.body.city,
            parkingname:req.body.parkingname,
            address:req.body.address
        })
        .then(data=>{
            res.json({
                "message":" parking updated",
                "status":200,
                "success":true
            })
        })    
    }
    exports.showparking = (req,res)=>{
        parking.find().exec(function(err,data){
             if(err){
                  res.json({
                      "message":"Error in API",
                      "status":500,
                      "success":false,
                      "error":String(err)
                  })
             }else{
                 let parkingObj=new parking();
                 parkingObj.city=req.body.city,
                 parkingObj.save()
                 
                 .then(async parkingobj=>{
                  res.json({
                      "message":"parkingshow",
                      "status":200,
                      "success":true,
                      "parkingobj":data
                  })
             }
          )}
     })
     }
     exports.deleteparking = (req,res)=>{
         if(req.body._id==undefined || req.body._id==null)
         {
             res.json({
                 "message":"Please Enter an Id to proceed",
                 "status":400,
                 "success":false
             })
         }
         else{
             parking.deleteOne({"_id":req.body._id})
             .then(data=>{
                 res.json({
                     "message":"Delete city",
                     "success":true,
                     "status":200
                 })
             })
             .catch(err=>{
                 res.json({
                     "message":"Error in Delete city",
                     "success":false,
                     "status":500,
                     "error":String(err)
                 })
             })
         }
         
     }
     