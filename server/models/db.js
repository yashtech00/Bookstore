import mongoose from "mongoose";

const mongo_url = process.env.mongo_url;

const connectDB = async() => {
    try {
        await mongoose.connect(mongo_url,{
            useNewUrlParser: true,
            useUnifiedTopology:true            
        })
        console.log("mongoose is connected");
        
    } catch (e) {
        console.error("mongoose is disconnected",e.message);
    }
}

export default connectDB;