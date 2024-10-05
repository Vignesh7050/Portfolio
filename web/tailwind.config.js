const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib-components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        background: 'var(--color-bg)',
        foreground: 'var(--color-fg)',
        secondary: 'var(--color-secondary)',
        'header-border': 'var(--color-header-border)',
        'nav-item-hover': 'var(--color-secondary-nav-item-hover)',
        'header-color': 'var(--color-header)',
        'button-hover': 'var(--color-button-hover)',
      },
      backgroundImage: {
        'profile-header': 'var(--color-profile-header)',
        'profile-bg': 'var(--profile-page-bg)',
        'experience-bg': 'var(--color-experience-bg)',
        'skills-bg': 'var(--color-skills-bg)',
        'contacts-bg': 'var(--color-contacts-bg)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
