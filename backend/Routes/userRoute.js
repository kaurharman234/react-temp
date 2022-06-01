    const router = require('express').Router();
    const user1Controller = require('../apis/user1/user1Controller')
    const slotcontroller=require('../apis/slotdetail/slotcontroller')
    const parkingcontroller = require('../apis/addparking/parkingcontroller')
    const citycontroller = require('../apis/addcity/citycontroller')
    const ordercontroller = require('../apis/ordercheck/ordercontroller')

    router.get('/',function(req,res){
        res.send("You are in user Router")
    })

    router.post('/registrationform',user1Controller.registrationform)
    router.post('/showuser',user1Controller.showuser)
    router.post('/deleteuser',user1Controller.deleteuser)
    router.post('/updateuser',user1Controller.updateuser)
    router.post('/login',user1Controller.login)
    router.post('/selectslot',slotcontroller.selectslot)
    router.post('/addparking',parkingcontroller.addparking)
    router.post('/addcity',citycontroller.addcity)
    router.post('/addorder',ordercontroller.addorder)
    router.post('/updateorder',ordercontroller.updateorder)
    module.exports = router