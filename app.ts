import express from 'express';
import {router as userRouter}  from './routes/users';

const app = express();
const port = 5000;

app.use(express.json());
app.use('/user', userRouter);

app.listen(port,()=>{
    console.log('listening on: ' + port)
});