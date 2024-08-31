const express = require('express');
const router = express.Router();
const RedditPost = require('../models/redditModel');

// GET route to fetch all Reddit posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await RedditPost.find(); // Fetch all posts from the database
    res.json(posts); // Send the posts as a JSON response
  } catch (err) {
    console.error('Error fetching Reddit posts:', err);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});


module.exports = router;