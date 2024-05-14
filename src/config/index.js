const dotenv = require('dotenv');

// Load the environment variables from the .env file into process.env
dotenv.config();

// Export the configuration settings as an object
module.exports = {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    PORT: process.env.PORT
}