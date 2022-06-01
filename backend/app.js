const express = require('express');
const app = express()
const db  = require('./config/db')

app.use(express.urlencoded({extended:false}));

const adminRoute= require('./Routes/adminRoute')
const userRoute = require('./Routes/userRoute')


app.get('/',function(req,res){
    res.send("Welcome to Project Server")
})

app.use('/user',userRoute)
app.use('/admin',adminRoute)

const seeds = require('./Config/seeds')
seeds.insertuser()


app.listen(2222,function(){
    console.log("Server Running At 2222")
})