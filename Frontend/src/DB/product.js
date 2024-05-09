const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
      picture:String,
      category: String,
      description: String,
      company_name: String,
      price: Number,
      old_price: Number
})

const UserModel = mongoose.model("Products" , ProductSchema);

module.exports = UserModel;