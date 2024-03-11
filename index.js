// random-quote-generator.js

const axios = require('axios');

async function getRandomQuote() {
    try {
        const response = await axios.get('https://api.quotable.io/random');
        if (response.data && response.data.content) {
            return `${response.data.content} - ${response.data.author}`;
        } else {
            throw new Error('Failed to fetch quote');
        }
    } catch (error) {
        console.error('Error fetching quote:', error.message);
        return null;
    }
}

module.exports = getRandomQuote;