import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from"../utils/apiError.js";
import {UserData} from "../models/register.model.js";
import {ApiResponse} from "../utils/ApiResponce.js";


const registerUser = asyncHandler( async (req,res)=>{
    const {username , mobile,email, password } = req.body;
    console.log(username);

    
    //alternate method  for condition

    if(
        [username, mobile, email, password].some((field) => field?.trim() === "")
    ){
        throw new ApiError(400, "All fields must be required");
    }

    const existedUser = await UserData.findOne({
        $or:[{ username }, { mobile }, { email }]
    })

    if(existedUser){
        throw new ApiError(409, "User with username or emial already exist");
    }

    const user = await UserData.create({
        username: username.toLowerCase(),
        mobile,
        email,
        password,
    });

    const createdUser = await UserData.findById(user.id).select(
        "-password "
    );

    if(!createdUser){
        throw new ApiError(500, "someting want wrong when registering a user" );
    }

    return res.status(201).json(
        new ApiResponse(201, "User Register successfully...", createdUser)
    )
});

export {registerUser};