const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const redditPostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    id: {
        type: String,
        required: true,
        unique: true,
    },
    url: {
        type: String,
        required: true,
    },
    num_comments: {
        type: Number,
        required: true,
    },
    created: {
        type: Number,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
});

const RedditPost = mongoose.model('RedditPost', redditPostSchema);

module.exports = RedditPost;
