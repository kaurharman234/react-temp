const { response } = require('express')
const res = require('express/lib/response')
const { reset } = require('nodemon/lib/utils')
const order =require('./ordermodel')

exports.getall =async(req,res)=>{
    if(!!req.decoded && req.decoded.usertype ==1)
    req.body.userid =req.decoded._id
    await order.find(req.body).then(res=>{
        res.send({success:true,status:200,message:"all orders loaded",data:reset})
    })
    .catch(err=>{
        res.send({
            success:false,status:500,message:!!err.message? err.message:err})
         })
}

exports.getsingle =async(req,res)=>{
let formdata =req.data
let validation =""
if(!formdata._id)
    validation +="_id is required"

if(!!validation)
    res.send({success:false,status:422,message:validation})
else{
    let query ={_id:formdata._id}
    await order.findone(query).then(res=>{
        if(!!res){
            res.send({success:true,status:200,message:" orders loaded successfully",data:res})
         }
         else
            res.send({ success:false,status:404,message:"no order found"})
      }).catch(err=>{
        res.send({success:false,status:500,message:!!err.message? err.message:err})
      })
}
}

exports.addorder =async (req,resp)=>{
    let formdata =req.data
    let validation =""
if(!formdata.parking)
    validation +="parking is required,"
if(!formdata.addcity)
    validation +="addcity is required,"
if(!formdata.selectslot)
validation +="selectslot is required,"
if(!!validation)
 resp.send({
    success:false,status:404,message:validation
 })
 else{
     let cityData = await  City.findone({_id:formdata.cityId})
     if(cityData== null){
         resp.send({success:false,status:200,message:"no city found"})
     }else{
         let total = await order.countDocuments()
         let orderData = {
             orderId:total+1,
             amountTotal:cityData.price,
             cityId: formdata.cityId,
             userId: formdata.userId,
             address: formdata.address,
         }
         let order = new order(orderData)
         order.save().then(res=>{
             resp.send({success:true,status:200,message:"order added successfully",data:res})
         }).catch(err=>{
             resp.send({success:false,status:500,message:!!err.message? err.message:err})
         })
         
     }
 }
}
 exports.updateorder = async(req,resp) =>{
     let userId = null
     if(!!req.decoded&& !!req.decoded._id){
         userId= req.decoded._id
     }
     let formData = req.body
     let validation = ""
     if(!formData._id)
        validation +="_id is required"
    if(!!validation)
        resp.send({success:false,status:422,message:validation})
    else{
        let query ={_id:formData._id}
        await order.findone(query).then(async res=>{
            if(!!res){
                let isInvaild =false
                if(!!formData.orderStatus){
                    if ((formData.orderStatus ==5 && res.orderStatus >2) || (formData.orderStatus<res.orderStatus)){
                        isInvaild= true
                }else{
                    res.orderStatus = formData.orderStatus
                }
                }
                if(!!formData.trackingId)
                    res.trackingId = formData.trackingId
                if(isInvaild)
                    resp.send({success:true,status:200,message:"cannot update order"})
                else
                    res.save().then(res=>{
                        resp.send({success:true,status:200,message:"order updated successfully",data:res})
                    }).catch(err=>{
                        resp.send({success:false,status:500,message:!!err.message? err.message:err})
                    })
                }
                else
                 resp.send({success:false,status:44,message:"no order found" })
                }).catch(err=>{
                    resp.send({success:false,status:500,message:!!err.message? err.message:err})
                })
            }
        }