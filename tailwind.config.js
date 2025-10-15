/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Fallback für legacy Dateien
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        card: "hsl(var(--card))",
        muted: "hsl(var(--muted))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        popover: "hsl(var(--popover))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        foreground: "hsl(var(--foreground))",
        input: "hsl(var(--input))",
        background: "hsl(var(--background))",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "reveal-up": "revealUp 0.6s ease-out forwards",
        "spotlight": "spotlight 0.3s ease-out forwards",
        "gradient-border": "gradientBorder 2s linear infinite",
      },
      keyframes: {
        revealUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        gradientBorder: {
          "0%": { "--gradient-angle": "0deg" },
          "100%": { "--gradient-angle": "360deg" },
        },
      },
    },
  },
  plugins: [],
}
