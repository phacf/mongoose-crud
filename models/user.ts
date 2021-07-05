import {Schema, model} from 'mongoose';

interface User {
    name: string;
    email: string;
    pets: Array<string>;
};

const userSchema = new Schema<User>({
    name: {type: String, required: true},
    email:{
        type: String,
        trim: true
    },
    pets:{type: [String],default:[]}
});


//mongoose salva a colection user no banco 
export const userModel = model<User>('User', userSchema);



