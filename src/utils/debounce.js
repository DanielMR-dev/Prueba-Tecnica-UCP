/**
 * Debounce utility function
 * Delays execution of a function until after a specified wait time has elapsed
 * since the last time it was invoked.
 * 
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @returns {Function} Debounced function
 * 
 * @example
 * const debouncedSearch = debounce((query) => {
 *   console.log('Searching for:', query);
 * }, 300);
 * 
 * // Will only execute once after 300ms of no calls
 * debouncedSearch('rick');
 * debouncedSearch('rick s');
 * debouncedSearch('rick sanchez'); // Only this will execute
 */
export const debounce = (func, wait) => {
    let timeoutId;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeoutId);
            func(...args);
        };

        clearTimeout(timeoutId);
        timeoutId = setTimeout(later, wait);
    };
};
