const user = require('../apis/user1/user1Model')
const bcrypt = require('bcrypt');
const saltRounds = 10 ;
exports.insertuser =()=>{
    let data ={
        name:'admin',email :'admin@gmail.com',password:'harry1234',userType:2
    }
    const hash = bcrypt.hashSync('harry1234',saltRounds);
    data.password =hash
   user.countDocuments()
    .then (total=>{
        data.userId= total+1
       user.findOne({'email':'admin@gmail.com'})
        .then(use=>{
            if(use==null){
                let useObj = new user(data)
                useObj.save(data,err=>{
                    console.log("Admin saved")
                })
            }
        })
        .catch(err=>{
            console.log("error in save admin")
        })
    })
}

