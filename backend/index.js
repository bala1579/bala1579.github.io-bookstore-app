import express from 'express';
import { PORT , CONN } from './config.js';
import mongoose from 'mongoose'
import {Book} from './models/bookmodel.js'
import bookRoutes from './routes/bookRoutes.js'
import cors from 'cors'

// const express = require("express")
// const mongoose = require("mongoose")





const app = express();

app.use(express.json());

// Middelware for cors policy
// Option 1: Allow All origin with Default of cors(*)

app.use(cors());                //  Cross Origin Resource Sharing  

// Option 2 : Allow custom Origins

// app.use(
//   cors({
//         origin : "http//localhost:5000",
//         method : ['GET' , 'PUT' , 'DELETE' , 'POST'],
//         allowedHeaders : ['Content-Type']
//   })
// )



app.get('/' , (req , res)=>
{
   console.log(req);                                    // this is request
   return res.status(234).send('welcome to mern stack');               // this is response
})

// app.listen(PORT , ()=>
// {
//     console.log(`app is listning on port ${PORT}`)
// })


app.use('/books' , bookRoutes);               // this mean all request with books prefix use bookRoutes











mongoose.connect(CONN)
.then(()=>
{
  console.log(" database connected");

  app.listen(PORT , ()=>                    // this database is connected then express server is running
   {
       console.log(`app is listning on port ${PORT}`)
   })
})
.catch((error)=>
{
 console.log(error);
});



