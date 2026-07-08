import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'], theme: { extend: { colors: { space: '#050505', silver: '#cfd3d7', bin: '#39ff88', warning: '#ffd84d' }, fontFamily: { display: ['Impact','Arial Black','sans-serif'], sans: ['Inter','ui-sans-serif','system-ui'] }, boxShadow: { glow: '0 0 40px rgba(57,255,136,.18)' } } }, plugins: [] };
export default config;
