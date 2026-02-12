import { translateSpecies, translateStatus, translateGender } from '../utils/translations';

/**
 * CharacterCard Component
 * Displays individual character information in a card format
 * 
 * @param {Object} props
 * @param {Object} props.character - Character data object
 * @param {string} props.character.name - Character name
 * @param {string} props.character.image - Character image URL
 * @param {string} props.character.species - Character species
 * @param {string} props.character.status - Character status (Alive, Dead, unknown)
 * @param {string} props.character.gender - Character gender (Male, Female, Genderless, unknown)
 */
export const CharacterCard = ({ character }) => {
    const { name, image, species, status, gender } = character;

    // Status badge color mapping for dark mode
    const statusColors = {
        Alive: 'bg-green-900 text-green-300 border-green-600',
        Dead: 'bg-red-900 text-red-300 border-red-600',
        unknown: 'bg-gray-800 text-gray-400 border-gray-600',
    };

    const statusColor = statusColors[status] || statusColors.unknown;

    return (
        <article className="bg-dark-surface rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 border border-dark-border shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(0,255,65,0.3)]">
            {/* Character Image */}
            <div className="aspect-square overflow-hidden bg-dark-bg">
                <img
                    src={image}
                    alt={`${name} - ${translateSpecies(species)}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            {/* Character Info */}
            <div className="p-4">
                <h2 className="text-xl font-bold text-accent mb-2 truncate drop-shadow-[0_0_8px_rgba(0,255,65,0.3)]">
                    {name}
                </h2>

                <div className="space-y-2">
                    <p className="text-gray-300 text-sm">
                        <span className="font-semibold text-gray-400">Especie:</span> {translateSpecies(species)}
                    </p>

                    <p className="text-gray-300 text-sm">
                        <span className="font-semibold text-gray-400">Género:</span> {translateGender(gender)}
                    </p>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-sm font-semibold">Estado:</span>
                        <span
                            className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${statusColor}`}
                        >
                            {translateStatus(status)}
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
};
