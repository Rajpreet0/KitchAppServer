const mongoose = require('mongoose');


const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingredient',
            required: true,
        }
    ],
    instructions: {
        type: [String],
        required: true,
    },
    category: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
        default: 'Lunch'
    },
    time: {
        type: Number,
        enum: [1,2,3],
        required: true,
    },
    skillLevel: {
        type: String,
        enum: ['easy', 'medium', 'advanced'],
        required: true
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;