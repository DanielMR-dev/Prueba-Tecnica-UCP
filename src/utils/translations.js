/**
 * Translation utilities for Rick and Morty API data
 * Converts English species names to Spanish
 */

/**
 * Species translation map
 * Maps common species from the API to Spanish equivalents
 */
const speciesTranslations = {
    'Human': 'Humano',
    'Alien': 'Alienígena',
    'Humanoid': 'Humanoide',
    'Robot': 'Robot',
    'Cronenberg': 'Cronenberg',
    'Disease': 'Enfermedad',
    'Poopybutthole': 'Poopybutthole',
    'Mythological Creature': 'Criatura Mitológica',
    'Animal': 'Animal',
    'unknown': 'Desconocido',
};

/**
 * Translates species name from English to Spanish
 * @param {string} species - Species name in English
 * @returns {string} Species name in Spanish
 */
export const translateSpecies = (species) => {
    if (!species) return 'Desconocido';
    return speciesTranslations[species] || species;
};

/**
 * Status translation map
 */
const statusTranslations = {
    'Alive': 'Vivo',
    'Dead': 'Muerto',
    'unknown': 'Desconocido',
};

/**
 * Translates status from English to Spanish
 * @param {string} status - Status in English
 * @returns {string} Status in Spanish
 */
export const translateStatus = (status) => {
    if (!status) return 'Desconocido';
    return statusTranslations[status] || status;
};

/**
 * Gender translation map
 */
const genderTranslations = {
    'Male': 'Masculino',
    'Female': 'Femenino',
    'Genderless': 'Sin género',
    'unknown': 'Desconocido',
};

/**
 * Translates gender from English to Spanish
 * @param {string} gender - Gender in English
 * @returns {string} Gender in Spanish
 */
export const translateGender = (gender) => {
    if (!gender) return 'Desconocido';
    return genderTranslations[gender] || gender;
};
