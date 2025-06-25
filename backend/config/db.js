
import mongoose from 'mongoose'

const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database is connected !`)
    } catch (error) {
        console.log(error.meessage);
        process.exit(1);
    }
}

export default connectDb;