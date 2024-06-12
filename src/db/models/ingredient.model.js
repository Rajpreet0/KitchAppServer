const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    storage: {
        type: String,
        enum: ['Fridge', 'Freezer', 'Pantry'],
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    unit: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);
module.exports = Ingredient;

