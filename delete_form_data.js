const mongoose = require('mongoose');
const Form = require('./models/form.models'); // Update the path to your Form model

// MongoDB connection URI
const mongoURI = 'mongodb+srv://admin:ronakraj1@cluster0.bjksk03.mongodb.net/cyberwatch?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected');

    // Delete all documents from the 'userpost' collection
    try {
      const result = await Form.deleteMany({});
      console.log(`${result.deletedCount} documents deleted`);
    } catch (err) {
      console.error('Error deleting documents:', err);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch(err => console.error('MongoDB connection error:', err));
