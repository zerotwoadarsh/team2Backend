const express = require('express');
const router = express.Router();
const News = require('../models/news'); // Import the News model

// Route to fetch the latest 10 news articles
router.get('/news', async (req, res) => {
    try {
        const newsArticles = await News.find().sort({ date: -1 }).limit(10); // Fetch and sort by date (descending)
        res.json(newsArticles); // Send the fetched articles as JSON
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch news articles' });
    }
});

module.exports = router;