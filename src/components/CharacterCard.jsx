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
 */
export const CharacterCard = ({ character }) => {
    const { name, image, species, status } = character;

    // Status badge color mapping
    const statusColors = {
        Alive: 'bg-green-100 text-green-800 border-green-200',
        Dead: 'bg-red-100 text-red-800 border-red-200',
        unknown: 'bg-gray-100 text-gray-800 border-gray-200',
    };

    const statusColor = statusColors[status] || statusColors.unknown;

    return (
        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
            {/* Character Image */}
            <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                    src={image}
                    alt={`${name} - ${species}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            {/* Character Info */}
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2 truncate">
                    {name}
                </h2>

                <div className="space-y-2">
                    <p className="text-gray-600 text-sm">
                        <span className="font-semibold">Especie:</span> {species}
                    </p>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-600 text-sm font-semibold">Estado:</span>
                        <span
                            className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${statusColor}`}
                        >
                            {status === 'Alive' ? 'Vivo' : status === 'Dead' ? 'Muerto' : 'Desconocido'}
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
};
