const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker'); // Import from @faker-js/faker
const Form = require('./models/form.models'); // Update the path to your Form model

// MongoDB connection URI
const mongoURI = 'mongodb+srv://admin:ronakraj1@cluster0.bjksk03.mongodb.net/cyberwatch?retryWrites=true&w=majority';

// States of India for the incident address
const statesOfIndia = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

// Sectors options
const sectors = [
  'Information Technology (IT)', 'Healthcare', 'Financial Services', 
  'Retail and E-commerce', 'Government and Public Sector', 
  'Education', 'Other'
];

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Function to generate fake data
const generateFakeData = () => {
  return {
    fullName: faker.person.fullName(), // Updated method
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phoneNumber: faker.phone.number(),
    incidentAddress: `${faker.helpers.arrayElement(statesOfIndia)}`,
    cyberThreatDescription: faker.lorem.sentence(),
    sector: faker.helpers.arrayElement(sectors),
    cyberAttackType: faker.helpers.arrayElement(['Phishing', 'Ransomware', 'DDoS', 'Malware']),
    FIRLink: faker.internet.url(),
  };
};

// Function to populate database
const populateDatabase = async (numRecords) => {
  try {
    const fakeData = Array.from({ length: numRecords }, generateFakeData);
    await Form.insertMany(fakeData);
    console.log(`${numRecords} records inserted`);
  } catch (err) {
    console.error('Error inserting records:', err);
  } finally {
    mongoose.connection.close();
  }
};

// Call the function to populate the database with 10 records
populateDatabase(200);
