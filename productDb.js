
require("dotenv").config()

const connect = require("./connect/db")
const jsonData = require("./product.json")
const Product = require("./models/product")
const start = async() =>{
    try {
        await connect(process.env.MONGODB_URL)
        await Product.deleteMany()
        await Product.create(jsonData)
        console.log("success")
    } catch (error) {
        console.log(error)
    }
}
start()