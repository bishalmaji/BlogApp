import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';

// mongo password=lyQ2Vf0zv7XwOuam


const app=express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose.connect(process.env.DATABASE
)
.then(()=>app.listen(process.env.PORT||8080))
.then(()=>console.log('Example app listening on port ${port}!'))
.catch((err)=>console.log(err));


