
// Import required modules
const express = require('express');
const app = express();
const mongoose = require('./db');
const newsRoutes = require('./routes/news');

// Middleware to parse incoming JSON requests
app.use(express.json());


const PORT = process.env.PORT || 3000;

const axios = require('axios');




const api_key = 'eb346b8e787875b1de821423adc7a614';  // Replace with your GNews API key
const url = "https://gnews.io/api/v4/search";  // GNews API endpoint

// Function to fetch news data from GNews API and log it
const fetchNewsData = async (query) => {
  try {
    const response = await axios.get(url, {
      params: {
        q: query,  // Search query
        token: api_key,  // API key
        lang: 'en',  // Language (optional)
        max: 10  // Max results (optional)
      }
    });
    console.log('News Data from GNews API:', response.data);
  } catch (error) {
    console.error('Error fetching data from GNews API:', error);
  }
};


fetchNewsData('technology');  





app.use('/api/news', newsRoutes);





// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});