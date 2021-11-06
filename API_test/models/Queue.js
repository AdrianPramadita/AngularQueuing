// import mongoose 
import mongoose from "mongoose";

// Buat Schema
const Queue = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    queue:{
        type: Number,
        required: true
    }
});

// export model
export default mongoose.model('Queues', Queue);