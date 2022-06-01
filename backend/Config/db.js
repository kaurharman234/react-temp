const mongoose= require('mongoose')
mongoose.connect("mongodb://127.0.0.1/parking")
.then(con=>{
    console.log("DB Connected")
})
.catch(err=>{
    console.log("Error Occur",err)
})
