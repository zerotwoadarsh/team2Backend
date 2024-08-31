const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker'); // For @faker-js/faker

const News = require('../models/newsPost.models.js'); // Adjust the path as needed

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:ronakraj1@cluster0.bjksk03.mongodb.net/cyberwatch?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Generate and insert fake data
async function seedDB() {
    await News.deleteMany({}); // Clear existing data

    for (let i = 0; i < 50; i++) {
        const news = new News({
            title: faker.lorem.sentence(),
            source: faker.company.name(), // Updated method
            date: faker.date.past().toISOString().split('T')[0], // Format as YYYY-MM-DD
            url: faker.internet.url(),
            description: faker.lorem.paragraph(),
        });

        try {
            await news.save();
            console.log(`Record ${i + 1} saved`);
        } catch (error) {
            console.error(`Error saving record ${i + 1}:`, error.message);
        }
    }

    mongoose.connection.close();
}

seedDB().then(() => {
    console.log('Database seeding complete.');
});