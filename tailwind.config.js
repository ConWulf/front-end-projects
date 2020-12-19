const plugin = require("tailwindcss/plugin");
//require plugin for tailwind to use custom css
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
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
