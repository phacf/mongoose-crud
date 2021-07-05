import express from 'express';
import {dbConnect} from './models/db'
import {router as userRouter}  from './routes/users';

const app = express();
const port = 5000;

app.use(express.json());
app.use('/user', userRouter);

app.listen(port,async ()=>{
    console.log('listening on: ' + port)
    try{
        await dbConnect();
    }    
    catch(error){
        console.log(error)
    }
    console.log('Conectado ao Mongoose')
});