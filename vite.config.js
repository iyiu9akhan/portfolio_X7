import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: "/portfolio_X7/",
});


// tailwind.config.js
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust paths as needed
//   theme: {
//     extend: {
//       keyframes: {
//         shine: {
//           '0%': { backgroundPosition: '200% center' },
//           '100%': { backgroundPosition: '-200% center' },
//         },
//       },
//       animation: {
//         shine: 'shine 2s linear infinite',
//       },
//     },
//   },
//    plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };

