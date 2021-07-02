import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const user = process.env.MONGO_DB_USER //|| 'phacf';
const pass = process.env.MONGO_DB_PASSWORD //|| 124578;

export const dbConnect = async () => {
    await connect(`mongodb+srv://${user}:${pass}@cluster0.l3c2v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

