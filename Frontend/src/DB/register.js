const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/FinalYearProject")
.then(()=>{
    console.log("mongodb conected");
})
.catch(()=>{
    console.log("failed");
})

const newSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    ConfirmPassword:{
        type:String,
        required:true,
    },
})

const Register = mongoose.model('Register' , newSchema);



module.exports = Register;

