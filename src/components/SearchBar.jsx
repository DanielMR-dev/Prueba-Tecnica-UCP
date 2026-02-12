/**
 * SearchBar Component
 * Accessible search input for filtering characters by name
 * 
 * @param {Object} props
 * @param {string} props.value - Current search value
 * @param {Function} props.onChange - Handler for input changes
 */
export const SearchBar = ({ value, onChange }) => {
    const handleClear = () => {
        onChange({ target: { value: '' } });
    };

    return (
        <div className="w-full max-w-2xl mx-auto mb-8">
            <div className="relative">
                <label htmlFor="character-search" className="sr-only">
                    Buscar personajes
                </label>
                <input
                    id="character-search"
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Buscar personajes por nombre..."
                    className="w-full px-4 py-3 pl-12 pr-12 text-gray-100 bg-[#0d1117] border-2 border-dark-border rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.4)] focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent focus:shadow-[0_8px_30px_rgba(0,255,65,0.2)] transition-all placeholder-gray-500"
                    aria-label="Buscar personajes por nombre"
                />

                {/* Search Icon */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-accent">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>

                {/* Clear Button */}
                {value && (
                    <button
                        onClick={handleClear}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-accent transition-colors"
                        aria-label="Limpiar búsqueda"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};
