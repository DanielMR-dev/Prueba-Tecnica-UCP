/**
 * LoadingState Component
 * Displays a loading spinner with message while data is being fetched
 */
export const LoadingState = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
            {/* Animated Spinner */}
            <div className="relative w-16 h-16 mb-4">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-dark-border rounded-full"></div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-accent rounded-full border-t-transparent animate-spin"></div>
            </div>

            <p className="text-gray-300 text-lg font-medium">
                Cargando personajes...
            </p>
        </div>
    );
};
