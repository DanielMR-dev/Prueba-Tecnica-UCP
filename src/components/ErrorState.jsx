/**
 * ErrorState Component
 * Displays error message with retry button when data fetch fails
 * 
 * @param {Object} props
 * @param {string} props.message - Error message to display
 * @param {Function} props.onRetry - Callback function for retry button
 */
export const ErrorState = ({ message, onRetry }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] px-4">
            {/* Error Icon */}
            <div className="w-16 h-16 mb-4 text-red-400">
                <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-full h-full"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>

            <h2 className="text-2xl font-bold text-gray-100 mb-2">
                Oops! Algo salió mal
            </h2>

            <p className="text-gray-400 text-center mb-6 max-w-md">
                {message}
            </p>

            <button
                onClick={onRetry}
                className="px-6 py-3 bg-accent text-dark-bg font-medium rounded-lg hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg transition-colors shadow-lg hover:shadow-accent/50"
            >
                Reintentar
            </button>
        </div>
    );
};
