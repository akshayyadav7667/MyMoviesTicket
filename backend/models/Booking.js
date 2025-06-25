import mongoose from "mongoose";

const BookingSchema= new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    showTime:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'showtime',
        required:true,
    },
    seats:{
        type:Number,
        required:true,
    },
    totalPice:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:['confirmed', 'cancelled'],
        default:'confirmed'
    }
},{timestamps:true});


const Booking = mongoose.model("Booking", BookingSchema)

export default Booking;