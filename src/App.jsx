import { useState, useMemo } from 'react';
import { useCharacters } from './hooks/useCharacters';
import { SearchBar } from './components/SearchBar';
import { CharacterGrid } from './components/CharacterGrid';
import { LoadingState } from './components/LoadingState';
import { ErrorState } from './components/ErrorState';
import { EmptyState } from './components/EmptyState';

/**
 * Main App Component
 * Orchestrates the Rick and Morty character browser
 * Implements client-side search filtering for instant results
 */
function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const { characters, loading, error, retry } = useCharacters();

    /**
     * Filter characters based on search query (client-side)
     * Uses useMemo to avoid re-filtering on every render
     */
    const filteredCharacters = useMemo(() => {
        if (!searchQuery.trim()) {
            return characters;
        }

        const query = searchQuery.toLowerCase();
        return characters.filter((character) =>
            character.name.toLowerCase().includes(query)
        );
    }, [characters, searchQuery]);

    /**
     * Handle search input changes
     */
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    /**
     * Determine which UI state to render
     */
    const renderContent = () => {
        // Loading state
        if (loading) {
            return <LoadingState />;
        }

        // Error state (network/server errors)
        if (error) {
            return <ErrorState message={error} onRetry={retry} />;
        }

        // Empty state (no results from search)
        if (filteredCharacters.length === 0) {
            return <EmptyState searchQuery={searchQuery} />;
        }

        // Success state (display characters)
        return <CharacterGrid characters={filteredCharacters} />;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg">
            {/* Header */}
            <header className="bg-dark-surface shadow-lg border-b border-dark-border backdrop-blur-sm bg-opacity-80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <h1 className="text-3xl sm:text-4xl font-bold text-accent text-center drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">
                        Rick & Morty
                        <span className="block text-lg sm:text-xl font-normal text-gray-300 mt-1">
                            Explorador de Personajes
                        </span>
                    </h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search Bar - Only show when not loading and no error */}
                {!loading && !error && (
                    <SearchBar value={searchQuery} onChange={handleSearchChange} />
                )}

                {/* Content Area */}
                {renderContent()}
            </main>

            {/* Footer */}
            <footer className="mt-12 py-6 text-center text-gray-400 text-sm">
                <p>
                    Datos proporcionados por{' '}
                    <a
                        href="https://rickandmortyapi.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-light underline transition-colors"
                    >
                        Rick and Morty API
                    </a>
                </p>
            </footer>
        </div>
    );
}

export default App;
