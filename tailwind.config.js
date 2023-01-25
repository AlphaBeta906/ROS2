module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
  ],
  plugins: [
    require("daisyui")
  ],
  important: true,
  daisyui: {
    themes: false,
  },
}
