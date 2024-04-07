const express = require('express')
const Register = require('../my-app/src/DB/register');
const cors = require('cors');
const Products = require('../my-app/src/DB/product');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// app.get('/getAllProducts', (req,res)=>{
//     console.log("getAllProducts is visited-------");
//     Products.find()
//     .then(users => res.status(200).json({status:true, data:users}))
//     .catch(err => res.status(400).json({status:false }))
// });

app.post('/register', async(req,res)=>{
    const {username , mobile,email,password ,ConfirmPassword} = req.body;

    try{
        const check = await Register.findOne({email:email});

        if(check){
            res.json("exist");
        }

        else {

            const data ={
                username:username,
                mobile:mobile,
                email:email,
                password:password,
                ConfirmPassword:ConfirmPassword
            };

            await Register.insertMany([data]);
            res.json("success");
        }
    }
    catch(e){
        console.log(e);
    }
})


app.listen(8000, ()=>{
    console.log("port Connected");
})