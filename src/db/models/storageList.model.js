const mongoose = require('mongoose');

const storageListSchema = mongoose.Schema({
    ingredients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient'
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const StorageList = mongoose.model('StorageList', storageListSchema);
module.exports = StorageList;