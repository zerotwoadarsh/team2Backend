const express = require('express');
const router = express.Router();
const Post = require('../models/form.models.js');

// Route to fetch the latest 10 news articles
router.get('/', async (req, res) => {
    try {
        const userPosts = await Post.find().limit(10);
        res.json(userPosts);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch news articles' });
    }
});

module.exports = router;
