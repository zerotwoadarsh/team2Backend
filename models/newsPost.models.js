import mongoose, { Schema } from "mongoose";

const formSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true      
    },
    phone: {
        type: String,
        required: true
    },
    location: {  
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    file: {
        type: String,
    }
});

export const Form = mongoose.model("Form", formSchema);
