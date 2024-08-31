const express = require('express');
const router = express.Router();
const Post = require('../models/form.models.js');

const { countByType, countByLocation, countBySector } = require('../filter');


// Route to fetch the latest 10 news articles
router.get('/', async (req, res) => {
    try {
        // countByType()
        //     .then(result => {
        //         console.log('Count by type:', result);
        //     })
        //     .catch(err => console.error(err));

        // Example: Get count by location
        // countByLocation()
        //     .then(result => {
        //         console.log('Count by location:', result);
        //     })
        //     .catch(err => console.error(err));

        // Example: Get count by sector
        countBySector()
            .then(result => {
                console.log('Count by sector:', result);
            })
            .catch(err => console.error(err));

    } catch (err) { }
});

module.exports = router;


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
