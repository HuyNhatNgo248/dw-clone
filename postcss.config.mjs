const config = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {}, // <-- Changed from "@tailwindcss/postcss"
    autoprefixer: {}, // Required for vendor prefixing
  },
}
export default config
