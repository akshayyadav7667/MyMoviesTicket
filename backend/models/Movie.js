import mongoose from "mongoose";


const MovieSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true
    },
    genre:{
        type:[String],
        required:true,
    },
    language:{
        type:String,
        required:true,
    },
    releaseDate:{
        type:Date,
        required:true
    },
    director:{
        type:String,
    },
    cast:{
        type:[String]
    },
    poster:{
        type:String
    }
    
},{timestamps:true});


const Movies= mongoose.model("Movie",MovieSchema)

export default Movies;