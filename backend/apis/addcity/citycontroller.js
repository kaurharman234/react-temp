const city = require('../addcity/citymodel')



exports.addcity = (req,res)=>{
    if (req.body.city==undefined ||req.body.address==undefined)
        {
        res.json({
            "message":"try again",
            "status":43,
            "success":false,
            
         });
        }
    else{
       let cityObj=new city();
       cityObj.city=req.body.city,
       cityObj.address=req.body.address,
       cityObj.save()
       

       .then(async cityobj=>{
        res.json({
            "message":" city added",
            "status":200,
            "success":true,
            "data":cityobj
            
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
    exports.updatecity = (req,res)=>{
        city.updateOne({"_id":req.body._id},{
            city:req.body.city,
           
        })
        .then(data=>{
            res.json({
                "message":" city updated",
                "status":200,
                "success":true
            })
        })    
    }
exports.showcity = (req,res)=>{
   city.find().exec(function(err,data){
        if(err){
             res.json({
                 "message":"Error in API",
                 "status":500,
                 "success":false,
                 "error":String(err)
             })
        }else{
            let cityObj=new city();
            cityObj.city=req.body.city,
            cityObj.save()
            
            .then(async cityobj=>{
             res.json({
                 "message":"cityshow",
                 "status":200,
                 "success":true,
                 "cityobj":data
             })
        }
     )}
})
}
exports.deletecity = (req,res)=>{
    if(req.body._id==undefined || req.body._id==null)
    {
        res.json({
            "message":"Please Enter an Id to proceed",
            "status":400,
            "success":false
        })
    }
    else{
        city.deleteOne({"_id":req.body._id})
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
