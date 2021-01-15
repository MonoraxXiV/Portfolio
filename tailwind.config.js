const colors = require('tailwindcss/colors')
module.exports = {
    purge: [],
    darkMode: 'class',// or 'media' or 'class'
    theme: {

        extend: {
            colors: {
                blue: {
                    light: '#85d7ff',
                    DEFAULT: '#1fb6ff',
                    dark: '#009eeb',
                    custom: '#116466'
                },
                themed: {
                    teal: 'rgba(66, 189, 186,0.5)',
                    white: '#ffffff',
                    black: '#000000',
                    huneven: '#D9B08C',
                    heven: '#ff874a',
                    hlighteven: '#5c210c',
                    hlightuneven: '#995822'

                },
                teal: colors.teal,
                emerald: colors.emerald,
                lime: colors.lime,
                rose: colors.rose,
                fuchsia: colors.fuchsia,
                violet: colors.violet,
                lightBlue: colors.lightBlue,
                cyan: colors.cyan,
                orange: colors.orange,
                amber: colors.amber,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
