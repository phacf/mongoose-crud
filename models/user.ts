import {Schema, model} from 'mongoose';

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
export const userModel = model<User>('User', userSchema);

