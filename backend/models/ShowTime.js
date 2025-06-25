import mongoose from "mongoose";

const showTimeSchema= new mongoose.Schema({
    movie:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Movie',
        required:true,
    },
    theater:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Theater',
        required:true,
    },
    startTime:{
        type:Date,
        required:true,
    },
    endTime:{
        type:Date,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    availableSeats:{
        type:Number,
        required:true,
    },
    bookings:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Booking' ,
        }
    ]


},{ timestamps: true })

const showtime = mongoose.model('showtime',showTimeSchema);

export default showtime;