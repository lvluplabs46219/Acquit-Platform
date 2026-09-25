/** Tailwind v4 + Next.js 16 Turbopack.
 *  Must use @tailwindcss/postcss — the v3 `tailwindcss` PostCSS plugin
 *  does not compile @theme / @utility / @custom-variant / @apply.
 */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
