const express = require('express');
const router = express.Router();
const Post = require('../models/form.models.js');

const { countByType, countByLocation, countBySector } = require('../filter');


// Route to fetch analysis data
router.get('/', async (req, res) => {
  try {
    const countByType = await countByType();
    console.log('Count by type:', countByType);
    const countByLocation = await countByLocation();
    console.log('Count by locaation:', countByLocation);
    const countBySector = await countBySector();
    console.log('Count by sector:', countBySector);
    
    const result = {
      countByType,
      countByLocation,
      countBySector}
      ;

    res.json(result);

  } catch (err) {
    console.error('Error fetching analysis data:', err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
