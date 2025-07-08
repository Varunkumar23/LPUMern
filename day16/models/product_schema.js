const mongoose = require("mongoose");

const { Schema,model } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    require: true,
    trim: true,
    unique:true,
  },
  description: String,
  price: {
    type: Number,
    min: 0,
    require:true,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 1,
  },
  
},{
    timestamps:true,
    versionKey:false,
  });

const Product=mongoose.model("product",productSchema);

module.exports = mongoose.model("Product", productSchema);
