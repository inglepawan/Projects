// backend/server.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

// OpenAI API Key (keep this secure)
const OPENAI_API_KEY = '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'; 

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));  // Serve static files from frontend

// API route to get interview questions from OpenAI
app.post('/get-interview-questions', async (req, res) => {
    const { jobTitle, skill } = req.body;
    
    if (!jobTitle || !skill) {
        return res.status(400).json({ error: 'Job title and skill are required.' });
    }
    
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                model: 'text-davinci-003', // Choose the OpenAI model you want to use
                prompt: `Generate interview questions for the position of ${jobTitle} with skills in ${skill}.`,
                max_tokens: 200,
                temperature: 0.7,
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                }
            }
        );
        
        const questions = response.data.choices[0].text.trim().split('\n');
        res.json({ questions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching interview questions' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
