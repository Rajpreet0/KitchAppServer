const OpenAI = require('openai');
const config = require('../config');

// Create a new instance of the OpenAI client with the provided API Key
const openai = new OpenAI({
    apiKey: config.OPENAI_API_KEY,
})

exports.getOpenAiResponse = async(req, res) => {
    const query = req.body.query;
    try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [{role: 'user', content: query}],
            model: 'gpt-3.5-turbo',
        });

        const msg = chatCompletion.choices[0].message.content;

        res.json({reply: msg});
    } catch (error) {
        console.log('Error getting OpenAI Response:',  error);
        res.status(500).json({error: 'Something went wrong'});
    }
}