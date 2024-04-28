import mongoose from "mongoose";

const connectDB = async () => {
    if(process.env.MONGO_URL !== undefined) {
        try {
            const conn = await mongoose.connect(process.env.MONGO_URL);
            console.log(`MongoDb Connected Successfully to: ${conn.connection.host}`)
        } catch (error: any) {
            console.error(`Error: ${error.message}`);
            process.exit(1);
        }
    }
}

export default connectDB;