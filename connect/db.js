// username shanzatariq833
// password 1NoiZjJb3KxFTO83
// uri mongodb+srv://shanzatariq833:1NoiZjJb3KxFTO83@cluster0.fr9lruu.mongodb.net/
// mongodb+srv://shanzatariq833:<password>@cluster0.fr9lruu.mongodb.net/

const  mongoose  = require('mongoose');

// const uri = 'mongodb+srv://shanzatariq833:1NoiZjJb3KxFTO83@cluster0.fr9lruu.mongodb.net'; // MongoDB connection URI
// const client = mongoose.connect(uri, {
//     useNewUrlParser : true, 
//     useUnifiedTopology:true
// });

 function connect(uri) {
    try {
         const mongo =  mongoose.connect(uri, {
            useNewUrlParser : true, 
            useUnifiedTopology:true
        });;
        console.log('Connected to MongoDB');
        return mongo; // Change 'your_database_name' to your actual database name
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
}

module.exports = connect;

