import express from 'express'

import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();


const app=express();
app.use(express.json())
app.use(cors())


connectDb();

app.use('/api/user',userRoutes)


const PORT= process.env.PORT || 3000

app.listen(PORT ,()=>{
    console.log(`server is listing on ${PORT}`)
})