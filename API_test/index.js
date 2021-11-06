//import express
import express from "express";
//import mongoose
import mongoose from "mongoose";
// import routes
import route from "./routes/index.js";
//import cors
import cors from "cors";
// construct express function
const app = express();

// connect ke database mongoDB
// mongoose.connect("mongodb://localhost:27017/apitest_db",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.on('error', (error)=> console.error(error));
// db.once('open', () => console.log('Database Connected'));

const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose
        .connect('mongodb://localhost:27017/queue_db', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        .then(() => console.log('Connected Successfully'))
        .catch((err) => console.error('Not Connected'));
}

module.exports = connectDB;

// app.get('/', (req, res) =>{
//     res.send('welcome');
// });

// middleware 
app.use(cors());
app.use(express.json());
app.use('/product',route);

// listening to port
app.listen('3000',()=> console.log('server running at port: 3000'));
