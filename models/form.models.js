const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const formSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    incidentAddress: {
        type: String,
        required: true,
    },
    cyberThreatDescription: {
        type: String,
        required: true,
    },
    sector: {
        type: String,
    },
    cyberAttackType: {
        type: String,
    },
    FIRLink: {
        type: String,
    },
});

const Form = mongoose.model("userpost", formSchema);

module.exports = Form;
