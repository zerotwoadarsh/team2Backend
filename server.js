

const express = require('express');
const app = express();
const mongoose = require('./db');
const newsRoutes = require('./routes/news');
const userPostRoutes = require('./routes/userpost');
const cors = require('cors');

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 3000;

const axios = require('axios');




const api_key = 'eb346b8e787875b1de821423adc7a614';  
const url = "https://gnews.io/api/v4/search";  


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
    console.log('News Data from GNews API:', response.data);
  } catch (error) {
    console.error('Error fetching data from GNews API:', error);
  }
};


fetchNewsData('technology');  





app.use('/api/news', newsRoutes);
app.use('/api/userpost', userPostRoutes);





// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});