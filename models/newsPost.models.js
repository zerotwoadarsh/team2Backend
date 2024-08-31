import mongoose, { Schema } from "mongoose";

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

export const News = mongoose.model("News", newsSchema);
