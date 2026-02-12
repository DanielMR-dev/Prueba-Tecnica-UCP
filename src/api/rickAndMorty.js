import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

/**
 * Rick and Morty API Service
 * Handles all API interactions with the Rick and Morty API
 */

/**
 * Fetches characters from the Rick and Morty API
 * @param {number} page - Page number to fetch (default: 1)
 * @returns {Promise<Object>} API response with character data
 * @throws {Error} Network or server errors
 */
export const getCharacters = async (page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}/character`, {
            params: { page },
        });
        return response.data;
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
