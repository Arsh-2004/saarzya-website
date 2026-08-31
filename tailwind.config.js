/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: "#8BA888",
        moss: "#587B6D",
        cream: "#F9F6F0",
        blush: "#E29578",
        clay: "#DDB892",
        slate: "#2D3748",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 45px -25px rgba(45, 55, 72, 0.35)",
        glow: "0 0 0 1px rgba(139, 168, 136, 0.25), 0 12px 40px -20px rgba(88, 123, 109, 0.45)",
      },
      backgroundImage: {
        "radial-calm": "radial-gradient(circle at 20% 15%, rgba(221, 184, 146, 0.35), transparent 42%), radial-gradient(circle at 78% 18%, rgba(139, 168, 136, 0.30), transparent 42%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
