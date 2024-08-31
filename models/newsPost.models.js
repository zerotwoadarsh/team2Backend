const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

const News = mongoose.model("News", newsSchema);

module.exports = News;
