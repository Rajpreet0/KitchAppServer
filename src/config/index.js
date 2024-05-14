const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    PORT: process.env.PORT
}