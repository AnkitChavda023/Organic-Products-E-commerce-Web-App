import mongoose from 'mongoose';

const ProductData = new mongoose.Schema(
    {
        tag : {
            type: String,
        },
        picture : {
            type: String,
            required : true,
            
        },
        category : {
            type: String,
            required: true,
        },
        description :  {
            type: String,
            required: true,
        }, 
        company_name : {
            type: String,
            required: true,
        },
        price: {
            type : Number,
            required: true,
        },
        old_price : {
            type : Number,
            required: true,
        }
       
    }, {timestamps: true});

export const ProductDatas = mongoose.model("ProductData" , ProductData);