import mongoose from 'mongoose';
// import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';
// import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const registerDataSchema = new mongoose.Schema(
    {
        username : {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        email : {
            type: String,
            required: [true , "Email address is required"],
            unique: [true,"Email address already exist!"],
            lowercase: true,
            trim: true
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
        // refreshToken : {
        //     type: String,
            
        // },
    }, {timestamps: true});

    // registerDataSchema.plugin(mongooseAggregatePaginate);
    registerDataSchema.pre("save", async function(next){
        if(!this.isModified("password")) return next();
        this.password = await bcrypt.hash(this.password, 10);
        next();
    });

    registerDataSchema.methods.isPasswordCorrect = async function(password){
       return await bcrypt.compare(password, this.password);
    }

    // registerDataSchema.methods.generateAccessToken = async function(){
    //    return await jwt.sign({
    //         _id: this._id,
    //         email: this.email,
    //         username: this.username,
    //         mobile: this.mobile,
    //     },
    //     process.env.ACCESS_TOKEN_SECRET,
    //     {
    //         expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    //     }
    // )
    // }
    // registerDataSchema.methods.generateRefreshToken = async function(){
    //     return await jwt.sign({
    //         _id: this._id,
    //     },
    //     process.env.REFRESH_TOKEN_SECRET,
    //     {
    //         expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    //     }
    // )
    // }

export const UserData = mongoose.model("UserData" , registerDataSchema);