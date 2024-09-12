// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require('express-async-errors');
require('dotenv').config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require('./db/models');

// Index of all puppies - DO NOT MODIFY
app.get('/puppies', async (req, res, next) => {
    const allPuppies = await Puppy.findAll({order: [['name', 'ASC']]});

    res.json(allPuppies);
});



// STEP 1: Update a puppy by id
app.put('/puppies/:puppyId', async (req, res, next) => {
    try {
        const { puppyId } = req.params;
        const { ageYrs, weightLbs, microchipped } = req.body;

        // Find the puppy by ID
        const puppy = await Puppy.findByPk(puppyId);

        if (!puppy) {
            return res.status(404).json({
                message: `Puppy with id ${puppyId} not found.`
            });
        }

        // Update only the allowed attributes
        if (ageYrs !== undefined) puppy.ageYrs = ageYrs;
        if (weightLbs !== undefined) puppy.weightLbs = weightLbs;
        if (microchipped !== undefined) puppy.microchipped = microchipped;

        // Save the updated puppy
        await puppy.save();

        // Send response
        res.json({
            message: `Successfully updated puppy with id ${puppyId}.`,
            puppy
        });
    } catch (err) {
        next(err);
    }
});


// STEP 2: Delete a puppy by id
app.delete('/puppies/:puppyId', async (req, res, next) => {
    try {
        const { puppyId } = req.params;

        // Find the puppy by ID
        const puppy = await Puppy.findByPk(puppyId);

        if (!puppy) {
            return res.status(404).json({
                message: `Puppy with id ${puppyId} not found.`
            });
        }

        // Delete the puppy
        await puppy.destroy();

        // Send response
        res.json({
            message: `Successfully deleted puppy with id ${puppyId}.`,
            puppy
        });
    } catch (err) {
        next(err);
    }
});


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
if (require.main === module) {
    const port = 8000;
    app.listen(port, () => console.log('Server is listening on port', port));
} else {
    module.exports = app;
}
