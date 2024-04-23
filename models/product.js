const mongoose = require("mongoose");
 const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name must not be empty"]
    },
    price:{
        type:Number,
        required:[true, "Price must not be empty"]
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.9
    },
    createdDate:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        // enum:{
        //     values:["apple, samsung, sony,dell"],
        //     message:`{VALUE} is not supported`
        // }
    }
 })

 module.exports = mongoose.model("Product", productSchema)