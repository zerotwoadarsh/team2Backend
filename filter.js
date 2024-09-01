const Form = require('./models/form.models');
const countByType = async () => {
    try {
        const result = await Form.aggregate([
            {
                $match: { cyberAttackType: { $ne: null } }
            },
            {
                $group: {
                    _id: "$cyberAttackType",  // Group by 'type'
                    count: { $sum: 1 }  // Count the number of documents in each group
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
                $match: { incidentAddress: { $ne: null } }
            },
            {
                $group: {
                    _id: "$incidentAddress",  // Group by 'location'
                    count: { $sum: 1 }  // Count the number of documents in each group
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
                    count: { $sum: 1 }  // Count the number of documents in each group
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