const mongoose = require('mongoose');


// MongoDB connection URI
const dbURI = process.env.MONGO_URL;

// Options for the connection
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose.connect(dbURI, options)
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

// Export the connection
module.exports = mongoose;
