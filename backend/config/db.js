import mongoose, { connect } from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const URI = process.env.MONGO_URI

const connectDB = async() => {
    try {
        await mongoose.connect(URI);
        console.log(`Mongoose succesffully connected`);
    } catch (err) {
        console.error(`Error connecting to mongoose, ${err}`)
        process.exit(1);
    }
}

export default connectDB