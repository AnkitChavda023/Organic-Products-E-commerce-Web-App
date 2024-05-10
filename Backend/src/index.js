import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from '../src/app.js';
dotenv.config({
    path:'./env',
})

connectDB()
.then(()=>{
    app.on("error", (err)=>{
        console.log("ERR: ", err);
        throw err;
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log("server listening on port :" + process.env.PORT);
    });
})
.catch((error)=>{
    console.log("MongoDB connection Failed!: " + error);
});

