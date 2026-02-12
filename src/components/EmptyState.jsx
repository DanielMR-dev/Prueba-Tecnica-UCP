/**
 * EmptyState Component
 * Displays a message when no characters match the search query
 * 
 * @param {Object} props
 * @param {string} props.searchQuery - The search term that returned no results
 */
export const EmptyState = ({ searchQuery }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] px-4">
            {/* Empty Icon */}
            <div className="w-16 h-16 mb-4 text-gray-500">
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
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>

            <h2 className="text-2xl font-bold text-gray-100 mb-2">
                No se encontraron personajes
            </h2>

            <p className="text-gray-400 text-center max-w-md">
                {searchQuery ? (
                    <>
                        No hay resultados para <span className="font-semibold text-accent">"{searchQuery}"</span>.
                        <br />
                        Intenta con otro nombre.
                    </>
                ) : (
                    'No hay personajes disponibles en este momento.'
                )}
            </p>
        </div>
    );
};
