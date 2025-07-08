const mongoose=require("mongoose")

const {Schema,model}=mongoose;

const productSchema=new Schema({
    title:String,
    price:Number,
    rating:Number,
    description:String,
    quantity:Number,
    images:[String],

},{
    versionKey:false,
    timestamps:true,
})

const Product=model("product",productSchema)

module.exports={Product};