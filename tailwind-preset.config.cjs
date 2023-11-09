const preset = require('./dist/example-tailwind-preset.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset],
  content: ['./src/lib/**/*.{ts,tsx}', './.storybook/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
