import { useState, useEffect, useRef } from 'react';
import { getCharacters } from '../api/rickAndMorty';

/**
 * Custom hook for fetching and managing Rick and Morty characters
 * Handles loading, error, and data states with retry functionality
 * 
 * @returns {Object} Hook state and methods
 * @returns {Array} characters - Array of character objects
 * @returns {boolean} loading - Loading state indicator
 * @returns {string|null} error - Error message if fetch failed
 * @returns {Function} retry - Function to retry failed fetch
 */
export const useCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Ref to prevent double fetch in React 18 Strict Mode
    const hasFetched = useRef(false);

    const fetchCharacters = async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await getCharacters(); // Fetch first 20 characters by ID
            setCharacters(data.results);
        } catch (err) {
            setError(err.message);
            setCharacters([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Prevent double fetch in development (React 18 Strict Mode)
        if (hasFetched.current) return;
        hasFetched.current = true;

        fetchCharacters();
    }, []);

    /**
     * Retry function to manually trigger a new fetch
     * Useful for error recovery
     */
    const retry = () => {
        fetchCharacters();
    };

    return {
        characters,
        loading,
        error,
        retry,
    };
};
