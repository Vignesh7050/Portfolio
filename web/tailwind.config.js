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
        'organization-name': 'var(--color-organization-name)',
        'experience-date': 'var(--color-experience-date)',
        'section-secondary': 'var(--color-section-secondary-text)',
        'nav-item-selected': 'var(--color-nav-item-selected)',
      },
      backgroundImage: {
        'profile-header': 'var(--color-profile-header)',
        'profile-bg': 'var(--profile-page-bg)',
        'section-bg': 'var(--color-section-bg)',
      },
      scrollMargin: {
        16: '4rem',
        18: '4.5rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
