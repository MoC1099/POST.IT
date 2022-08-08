import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; 
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
/*
initialize the app
setting up bodyparsers so that they can properly send out requests since we will be uploading pictures
whcih means that the router.get inside the posts.js will be reached by localhost:3000/posts istead of localhost:3000/
every route inside of teh postroutes, is gonna start with posts
dot env is to secure the connection url from other people
*/
 dotenv.config(); 
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/posts',postRoutes); 

// we use mongoose to connect to our database
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true}) //2nd one is the object with all the options
/*
these are not req but if u dont set em up you will have error/warning in the console
we chain a .then bec this return a promise
if our connection is successful then we wanna pull our App.listen
listen acepts 2 paramaters "PORT" and 2nd will be a callback function which is going to ran once our application successfully listens
*/
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))

//run if connection to the database is not successful
.catch((error) => console.log(error.message));


 
