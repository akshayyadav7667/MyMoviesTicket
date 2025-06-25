import mongoose from "mongoose";

const TheaterSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    settingCapacity:{
        type:Number,
        required:true
    },
    amenities:{
        type:[String]
    },
    showTimes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'showtime'
        }
    ]


},{timestamps:true})


const Theater= mongoose.model("Theater",TheaterSchema)

export default Theater;