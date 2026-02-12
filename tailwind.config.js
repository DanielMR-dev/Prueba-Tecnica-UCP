/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Dark mode color palette
                dark: {
                    bg: '#0a0e17',        // Deep dark blue-black background
                    surface: '#151922',    // Card/surface background
                    border: '#1f2937',     // Border color
                    hover: '#1e293b',      // Hover state
                },
                // Bright green accent
                accent: {
                    DEFAULT: '#00ff41',    // Bright neon green
                    light: '#33ff66',      // Lighter green for hover
                    dark: '#00cc34',       // Darker green for active
                },
            },
        },
    },
    plugins: [],
}
