import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

/**
 * Rick and Morty API Service
 * Handles all API interactions with the Rick and Morty API
 */

/**
 * Fetches the first 20 characters from the Rick and Morty API
 * Uses the multiple characters endpoint for better performance
 * @returns {Promise<Array>} Array of character objects
 * @throws {Error} Network or server errors
 */
export const getCharacters = async () => {
    try {
        // Generate array of IDs from 1 to 20
        const ids = Array.from({ length: 20 }, (_, i) => i + 1).join(',');

        const response = await axios.get(`${BASE_URL}/character/${ids}`);

        // The endpoint returns an array directly when multiple IDs are provided
        return { results: response.data };
    } catch (error) {
        // Re-throw with more descriptive message
        if (error.response) {
            // Server responded with error status
            throw new Error(
                `API Error: ${error.response.status} - ${error.response.statusText}`
            );
        } else if (error.request) {
            // Request made but no response received
            throw new Error('Network Error: No response from server. Check your connection.');
        } else {
            // Something else happened
            throw new Error(`Request Error: ${error.message}`);
        }
    }
};
