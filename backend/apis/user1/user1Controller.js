const user=require('./user1Model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {insertMany} = require('./user1Model');

const saltRounds =10 ;
const SECRET = 'parking';
exports.login = (req,res)=>{
   user.findOne({'email':req.body.email})
    .then(uObj=>{
        if(uObj==null){
            res.json({
                "message":"Email-Password Not Match",
                "status":200,
                "success":false
            })
        }
        else{
            if(bcrypt.compareSync(req.body.password, uObj.password))
            {
               let payload ={
                  
                   email:uObj.email,
                   password:uObj.password,
               }
              let token = jwt.sign(payload,SECRET,{ expiresIn: 60*60*24*30 })
               res.json({
                "message":"login successfully",
                "status":200,
                "sucess":true,
                "token":token
            })
            }else{
                res.json({
                    "message":"Email-Password not Match",
                    "status":400,
                    "sucess":false
                })
            }
        }
        
    })
         .catch(err=>{
            console.log(err)
            res.json({
                "message":"Error Login API",
                "status":500,
                "sucess":false,
                "err":String(err)
            })
        })    
    }
    

exports.registrationform = (req,res)=>{
   if(req.body.name==undefined||req.body.email==undefined|| req.body.password==undefined|| req.body.city==undefined){
  res.json({
        "message":"please fill the form",
        "status":200,
        "success":false,
    })
    }
    else{
         let userObj= new user()
 userObj.name = req.body.name==undefined?'':req.body.name;
 userObj.email = req.body.email==undefined?'':req.body.email;
 userObj.password = req.body.password==undefined?0:req.body.password;
 userObj.city = req.body.city==undefined?'':req.body.city
  userObj.save()

    .then(async uobj=>{
        let counter = await user.countDocuments().exec();
        letuserObj = new user();
    letuserObj.name = req.body.name
    letuserObj.email = req.body.email
    const hash = bcrypt.hashSync(req.body.password, saltRounds);
      userObj.password = hash
      userObj.userType = 1
      userObj.userId = (counter+1)
      userObj._Id = uobj._id
      userObj.save()
    .then (uobj=>{
            res.json({
                "message":"user Saved",
                "status":200,
                "success":true,
                 "data":data
            })
        })
      
    })
}
     res.json({
      "message":"user Saved",
        "status":200,
        "success":true,
        "data":user
    });
}
exports.showuser = (req,res)=>{
   user.find().exec(function(err,data){
        if(err){
             res.json({
                 "message":"Error in API",
                 "status":500,
                 "success":false,
                 "error":String(err)
             })
        }else{
             res.json({
                 "message":"All users",
                 "status":200,
                 "success":true,
                 "user1":data
             })
        }
     })
}

exports.updateuser = (req,res)=>{
    user.updateOne({"_id":req.body._id},{
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    .then(data=>{
        res.json({
            "message":"user updated",
            "status":200,
            "success":true
        })
    })    
}
exports.deleteuser = (req,res)=>{
    if(req.body._id==undefined || req.body._id==null)
    {
        res.json({
            "message":"Please Enter an Id to proceed",
            "status":400,
            "success":false
        })
    }
    else{
        user.deleteOne({"_id":req.body._id})
        .then(data=>{
            res.json({
                "message":"Delete user",
                "success":true,
                "status":200
            })
        })
        .catch(err=>{
            res.json({
                "message":"Error in Delete user",
                "success":false,
                "status":500,
                "error":String(err)
            })
        })
    }
    
}
