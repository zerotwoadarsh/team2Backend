const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');

formSchema = require("../models/form.models.js")

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:ronakraj1@cluster0.bjksk03.mongodb.net/cyberwatch?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



// Create the model
const Form = mongoose.model('Form', formSchema);

// Generate and insert fake data
async function seedDB() {
    await Form.deleteMany({}); // Clear existing data

    const attackTypes = ['Ransomware', 'DDoS', 'Phishing', 'Malware', 'SQL Injection', 'Man-in-the-Middle', 'Zero-Day Exploit'];

    for (let i = 0; i < 50; i++) {
        const form = new Form({
            name: faker.name.fullName(),
            email: faker.internet.email(),
            address: faker.address.streetAddress(),
            phone: faker.phone.number(),
            location: faker.address.city(),
            experience: faker.lorem.sentence(),
            file: faker.system.fileName(),
            type: faker.helpers.arrayElement(attackTypes),
            sector: faker.helpers.arrayElement(['Technology', 'Healthcare', 'Finance', 'Education']),
        });

        try {
            await form.save();
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
