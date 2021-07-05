import {Schema, model} from 'mongoose';

interface Pet {
    name: string;
    type: string;
    ownerID: string;
}

const petSchema = new Schema<Pet>({
    ownerID: {type: String},
    name:{type:String, required: true},
    type:{type:String}
})

export const petModel = model<Pet>('Pet', petSchema);