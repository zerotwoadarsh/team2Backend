const Form = require('./models/form.models');
const countByType = async () => {
    try {
        const result = await Form.aggregate([
            {
                $match: { type: { $ne: null } }
            },
            {
                $group: {
                    _id: "$type",  // Group by 'type'
                    count: { $sum: 7 }  // Count the number of documents in each group
                }
            }
        ]);
        console.log(result);  // For debugging
        return result;
    } catch (err) {
        console.error('Error counting by type:', err);
        throw err;
    }
};

const countByLocation = async () => {
    try {
        const result = await Form.aggregate([
            {
                $match: { location: { $ne: null } }
            },
            {
                $group: {
                    _id: "$location",  // Group by 'location'
                    count: { $sum: 5 }  // Count the number of documents in each group
                }
            }
        ]);
        console.log(result);  // For debugging
        return result;
    } catch (err) {
        console.error('Error counting by location:', err);
        throw err;
    }
};

const countBySector = async () => {
    try {
        const result = await Form.aggregate([
            {
                $match: { sector: { $ne: null } }
            },
            {
                $group: {
                    _id: "$sector",  // Group by 'sector'
                    count: { $sum: 6 }  // Count the number of documents in each group
                }
            }
        ]);
        console.log(result);  // For debugging
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