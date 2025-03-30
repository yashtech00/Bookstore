import mongoose from "mongoose";



const connectDB = async () => {
    const mongo_url = process.env.MONGO_URL;
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