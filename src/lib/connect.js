import mongoose from 'mongoose';

const Dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}
export default Dbconnect;