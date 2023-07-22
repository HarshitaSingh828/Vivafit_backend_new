const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config({ path: "./.env" });
const connectDb = async () => {
   try{
   const conn = await mongoose.connect(process.env.MONGODB_URI,{
       useNewUrlParser: true,
       useUnifiedTopology:true,
   })
   console.log(`MongoDB connected: ${conn.connection.host}`);
   }
   catch(error){
    console.log(`Error: ${error.message}`);
    process.exit();
   }
}

module.exports = connectDb;