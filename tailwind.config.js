const plugin = require("tailwindcss/plugin");
require('tailwindcss-aspect-ratio')
//require plugin for tailwind to use custom css
module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    aspectRatio: { // defaults to {}
      'none': 0,
      'square': [1, 1], // or 1 / 1, or simply 1
      '16/9': [16, 9],  // or 16 / 9
      '4/3': [4, 3],    // or 4 / 3
      '21/9': [21, 9],  // or 21 / 9
    },
  variants: {
    aspectRatio: ['responsive'], // defaults to ['responsive']
  },
    extend: {
      width: {
       '1/10': '10%',
       '1/20': '5%'
      },
      height: {
        '1/10': '10%',
        '1/20': '5%'
      },
      padding: {
        'full': '100%',
        '1/10': '10%',
        '1/20': '5%'
      },
      textColor: [
        'responsive',
        'hover',
        'focus',
        'before',
        'after',
        // If you want to combine it with a pseudo class,
        // use `<pseudo-class>_<pseudo-element>`.
        'hover_before',
        'hover_after',
        'focus_before'
      ],
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    // This plugin is useful in combination with tailwindcss-aspect-ratio.
    ({
      ratios: {
        '16/9': [16, 9],
        '4/3': [4, 3],
        '3/2': [3, 2],
        '1/1': [1, 1],
      },
      variants: ['before', 'hover_before', 'responsive'],
    }),
    plugin(function ({ addUtilities }) {
      addUtilities(
          {
            '.empty-content': {
              content: "''",
            },
          },
          ['before']
      )
    }),

      //pass callback to plugin function call
      plugin(function ({addComponents}) {
        //set variable to object with a key that is a class name and a value that is an
        //object of key value pairs of css style properties and string reps of values.
        //for custom effects(like hover), use another object as value.
        const buttons = {
          ".btn-red" : {
            padding: ".5rem 1rem",
            borderRadius: ".25rem",
            fontWeight: "600",
            backgroundColor: "#e3342f",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#cc1f1a"
            }
          }
        }
        addComponents(buttons);
      })
  ],
}
