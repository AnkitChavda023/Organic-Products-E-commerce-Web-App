import mongoose from 'mongoose';

const registerDataSchema = new mongoose.Schema(
    {
        username : {
            type: String,
            required: true,
            unique: true
        },
        email : {
            type: String,
            required: [true , "Email address is required"],
            unique: [true,"Email address already exist!"],
            lowercase: true
        },
        mobile : {
            type: String,
            required: [true,"Mobile number is required"],
            unique: [true,"Mobile number is already exist!"],
            
        },
        password :  {
            type: String,
            required: [true,"Password is required"],
        },
        confirmPassword : {
            type: String,
            required: true,
        },  
    }, {timestamps: true});

export const UserData = mongoose.model("UserData" , registerDataSchema);