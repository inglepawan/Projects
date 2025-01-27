const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const app = express();
const port = 3000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// POST endpoint to get interview questions
app.post('/get-interview-questions', async (req, res) => {
    const { jobTitle, skill } = req.body;

    if (!jobTitle || !skill) {
        return res.status(400).json({ error: 'Job title and skill are required' });
    }

    try {
        const prompt = `Provide a list of interview questions for a ${jobTitle} with skills in ${skill}.`;

        const result = await model.generateContent(prompt);
        const questions = result.response.text.trim().split('\n').filter(Boolean);

        res.json({ questions });

    } catch (error) {
        console.error('Error generating questions:', error);
        res.status(500).json({ error: 'Failed to generate questions' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});