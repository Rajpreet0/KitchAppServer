const app = require('./src/app');
const config = require('./src/config');

// Set the port number to the value specified in the configuration
const port = config.PORT || 3000;

// Start the server 
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

