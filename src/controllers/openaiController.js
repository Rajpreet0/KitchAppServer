const OpenAI = require('openai');
const config = require('../config');

const openai = new OpenAI({
    apiKey: config.OPENAI_API_KEY,
})

exports.getOpenAiResponse = async(req, res) => {
    try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [{role: 'user', content: 'What is the Capital of France ?'}],
            model: 'gpt-3.5-turbo',
        });

        const message = chatCompletion.choices[0].message.content;
        res.json({reply: message});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong'});
    }
}