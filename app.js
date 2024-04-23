// app.js
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const connect = require('./connect/db');
require("dotenv").config()

const app = express();

// Use the productRoutes router
app.use('/api', productRoutes);

// Start the server
const PORT = process.env.PORT || 8000;
const start = async() =>{
    try {
        await connect(process.env.MONGODB_URL);
   } catch (err) {
       console.error('Error fetching users:', err);
   }
    app.listen(PORT, () => {
    
        console.log(`Server is running on port ${PORT}`);
    });
}


start()