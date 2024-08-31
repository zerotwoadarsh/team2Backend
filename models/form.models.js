const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
    },
    type: {
        type: String,
    },
    sector:{
        type:String
    }
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
