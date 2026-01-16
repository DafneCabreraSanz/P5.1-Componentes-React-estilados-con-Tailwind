/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-purple': '#5c1690',
                'brand-shadow': '#5c169052',
                'primary-hover': '#f3eef7',
                'secondary-bg': '#e8d0fa',
                'secondary-hover': '#d59eff',
                'danger-bg': '#ffc4c4',
                'danger-hover': '#ff8b8b',
                'error': '#ff0000',
            },
        },
    },
}
