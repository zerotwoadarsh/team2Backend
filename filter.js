const Form = require('./models/form.models');
const countByType = async () => {
    try {
        const result = await Form.aggregate([
            {
                $match: { type: { $ne: null } }
            },
            {
                $group: {
                    _id: "$type",
                    count: { $sum: 1 }
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
                    _id: "$location",
                    count: { $sum: 1 }
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
                    _id: "$sector",
                    count: { $sum: 1 }
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