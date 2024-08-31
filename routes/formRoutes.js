const express = require('express');
const router = express.Router();
const Form = require('../models/form.models');

// POST route to handle form submission
router.post('/', async (req, res) => {
    try {
        const { name, email, address, phone, location, experience, file, type, sector } = req.body;

        // Create a new Form document
        const newForm = new Form({
            name,
            email,
            address,
            phone,
            location,
            experience,
            file,
            type,
            sector
        });

        // Save the new form to the database
        const savedForm = await newForm.save();

        // Respond with the saved form
        res.status(201).json(savedForm);
    } catch (err) {
        console.error('Error saving form:', err);
        res.status(500).json({ error: 'Failed to submit form' });
    }
});

module.exports = router;