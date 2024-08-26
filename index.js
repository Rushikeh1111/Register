const express= require('express')
const mongoose= require('mongoose')
const path=require('path')
const port=3000

const app=express()
    app.use(express.static(__dirname))

mongoose.connect("mongodb://127.0.0.1:27017/Student")
.then(() => {
    console.log(`connection succefully...........`);
}).catch((err) => {
    console.log(`not connect`);
});

const db =mongoose.connection;

const userSchema =new mongoose.Schema({
    username:{type:String,required: true},
    Bdate: {type: Date, required: true},
    Pnumber:{type: String, required: true},
    Address:{type: String, required: true},
    uemail:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    cpassword:{type: String, required: true}
    
})

const Users =new mongoose.model("Users",userSchema)


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'app.html'))
})

// app.get('/get',(req,res)=>{
//     res.sendFile(path.join(__dirname,'app.html'))
// })



app.get('/get',async(req,res)=>{
    const{username,Bdate,Pnumber,Address,uemail,  password, cpassword}= req.query
     const user=new Users({
        username: username,
        Bdate:Bdate ,
        Pnumber:Pnumber,
        Address:Address,
        uemail:uemail,
        password:password,
        cpassword:cpassword
       })
    
       await user.save()
       console.log(username)
       res.send("From submitted successfully")
})

app.listen(port,()=>{
     console.log("server is running")
})