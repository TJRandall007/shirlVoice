module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: { enabled: false, content: ["./src/**/*.js", "./src/**/**/*.js"] },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
