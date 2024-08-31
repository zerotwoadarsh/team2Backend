const Form = require('./models/form.models');

// Function to get the count of cases for each distinct type
const countByType = async () => {
    try {
        const result = await Form.aggregate([
            {
                $group: {
                    _id: "$type",  // Group by 'type'
                    count: { $sum: 1 }  // Count the number of documents in each group
                }
            }
        ]);
        return result;
    } catch (err) {
        console.error('Error counting by type:', err);
        throw err;
    }
};

// Function to get the count of cases for each distinct location (city)
const countByLocation = async () => {
    try {
        const result = await Form.aggregate([
            {
                $group: {
                    _id: "$location",  // Group by 'location'
                    count: { $sum: 1 }  // Count the number of documents in each group
                }
            }
        ]);
        return result;
    } catch (err) {
        console.error('Error counting by location:', err);
        throw err;
    }
};

// Function to get the count of cases for each distinct sector
const countBySector = async () => {
    try {
        const result = await Form.aggregate([
            {
                $group: {
                    _id: "$sector",  // Group by 'sector'
                    count: { $sum: 1 }  // Count the number of documents in each group
                }
            }
        ]);
        return result;
    } catch (err) {
        console.error('Error counting by sector:', err);
        throw err;
    }
};

module.exports = {
    countByType,
    countByLocation,
    countBySector
};