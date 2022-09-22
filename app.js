import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';

require('dotenv').config({ path: 'DATABASE' });
const app=express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Blog App API</h1>M');
    res.end();
});
mongoose.connect(process.env.DATABASE
)
.then(()=>app.listen(process.env.PORT||8080))
.then(()=>console.log('Example app listening on port ${port}!'))
.catch((err)=>console.log(err));


