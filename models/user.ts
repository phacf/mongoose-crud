import {Schema, model, Query} from 'mongoose';

interface User {
    name: string;
    email: string;
};

const userSchema = new Schema<User>({
    name: {type: String, required: true},
    email:{
        type: String,
        trim: true
    }
});


//mongoose salva a colection user no banco 
export const userModel = model<User>('User', userSchema);



