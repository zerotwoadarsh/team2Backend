const express = require('express');
const router = express.Router();
const Post = require('../models/form.models.js');

const { countByType, countByLocation, countBySector } = require('../filter');

router.get('/', async (req, res) => {
  try {
    const typeCounts = await countByType();
    const locationCounts = await countByLocation();
    const sectorCounts = await countBySector();

    const result = {
      typeCounts,
      locationCounts,
      sectorCounts
    };

    res.json(result);
  } catch (err) {
    console.error('Error fetching analysis data:', err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
