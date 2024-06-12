const mongoose = require('mongoose')

const shoppingListSchema = mongoose.Schema({
    items: [{
        ingredient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingredient'
        },
        quantity: {
            type: Number,
            required: true,
        },
        unit: {
            type: String,
            required: true
        }
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const ShoppingList = mongoose.model('ShoppingList', shoppingListSchema);
module.exports = ShoppingList;