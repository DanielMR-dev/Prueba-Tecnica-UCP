import { CharacterCard } from './CharacterCard';

/**
 * CharacterGrid Component
 * Responsive grid layout for displaying character cards
 * 
 * @param {Object} props
 * @param {Array} props.characters - Array of character objects to display
 */
export const CharacterGrid = ({ characters }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>
    );
};
