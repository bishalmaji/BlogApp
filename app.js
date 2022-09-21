import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';

// mongo password=lyQ2Vf0zv7XwOuam


const app=express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose.connect('mongodb+srv://admin:bishalmaji123@cluster0.wybs81a.mongodb.net/Blog?retryWrites=true&w=majority'
)
.then(()=>app.listen(8000))
.then(()=>console.log("Connected to database and listing to port 50000"))
.catch((err)=>console.log(err));


