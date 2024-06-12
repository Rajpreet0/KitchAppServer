const app = require('./src/app');
const config = require('./src/config');
const db = require('./src/db/conn');
const { User, Ingredient, Recipe, ShoppingList, StorageList } = require('./src/db/models/index');
// Set the port number to the value specified in the configuration
const port = config.PORT || 3000;

// Start the server 
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

