const OpenAI = require('openai');
const config = require('../config');

// Create a new instance of the OpenAI client with the provided API Key
const openai = new OpenAI({
    apiKey: config.OPENAI_API_KEY,
})

// Export the function to get a response from OpenAI
exports.getOpenAiResponse = async(req, res) => {
    try {
        // Create a chat completion request to OpenAI
        const chatCompletion = await openai.chat.completions.create({
            messages: [{role: 'user', content:  "Can you give me 3 recepies based on the ingredients: ginger ale, asparagus, curry powder, walnut, rye, poppy seed"}],
            model: 'gpt-3.5-turbo',
        });

        // Extract the response message content from the OpenAI response
        const message = chatCompletion.choices[0].message.content;

        // Send the response message back to the client as a JSON object
        res.json({reply: message});
    } catch (error) {
        console.log('Error getting OpenAI response:', error);
        res.status(500).json({error: 'Something went wrong'});
    }
}