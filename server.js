const express = require("express");
const app = express();
const mongoose = require('./Database/db');
const newsRoutes = require('./routes/news');
const userPostRoutes = require('./routes/userpost');
const formRoutes = require('./routes/formRoutes');
const analysisRoutes = require('./routes/analysis');
const redditPost = require('./routes/getRedditPost')


const cloudinary = require("./cloudinary");
cloudinary.cloudinaryConnect();

const cors = require("cors");

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

const axios = require("axios");

const { MongoClient } = require('mongodb');

const api_key = 'your_api_key';
const url = 'https://gnews.io/api/v4/search';

const mongoUri = 'mongodb://localhost:27017';
const dbName = 'cyberwatch';
const collectionName = 'news';

const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const fetchNewsData = async (query) => {
  try {
    const response = await axios.get(url, {
      params: {
        q: query,
        token: api_key,
        lang: 'en',
        max: 10
      }
    });

    const articles = response.data.articles;

    if (!client.isConnected()) {
      await client.connect();
    }

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    for (const article of articles) {
      const existingArticle = await collection.findOne({ url: article.url });

      if (!existingArticle) {
        await collection.insertOne(article);
        console.log(`Saved article: ${article.title}`);
      } else {
        console.log(`Duplicate article found: ${article.title}`);
      }
    }

  } catch (error) {
    console.error("Error fetching data from GNews API:", error);
  }
};

// Schedule the task to run every hour (3600000 ms = 1 hour)
const intervalTime = 3600000;

setInterval(() => {
  fetchNewsData("cyber crime OR cyber threat OR cyber security");
  console.log('Fetching new data...');
}, intervalTime);

process.on('SIGINT', async () => {
  await client.close();
  console.log("MongoDB connection closed.");
  process.exit(0);
});


// Routes
app.use('/api/news', newsRoutes);
app.use('/api/userpost', userPostRoutes);
app.use('/api/forms', formRoutes);
app.use('/api/analysis', analysisRoutes);
app.use('/api/getRedditPost', redditPost);



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});