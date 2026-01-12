export type ThemeColors = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  border: string;
};

export type Theme = {
  id: string;
  name: string;
  colors: ThemeColors;
};

export const THEMES: Theme[] = [
  {
    id: 'default',
    name: 'Neo Pop',
    colors: {
      primary: '#FACC15', // yellow-400
      secondary: '#22D3EE', // cyan-400
      accent: '#F472B6', // pink-400
      background: '#F0F0F0', // gray-100/ish
      surface: '#FFFFFF',
      text: '#000000',
      border: '#000000',
    },
  },
  {
    id: 'cyber',
    name: 'Cyberpunk',
    colors: {
      primary: '#FCEE0A', // bright yellow
      secondary: '#00F0FF', // neon cyan
      accent: '#FF003C', // neon red
      background: '#0d0d0d', // dark
      surface: '#1a1a1a', // dark gray
      text: '#FFFFFF', // white text
      border: '#FCEE0A', // yellow border
    },
  },
  {
    id: 'retro',
    name: 'Retro',
    colors: {
      primary: '#FCA311', // orange
      secondary: '#14213D', // dark blue
      accent: '#E5E5E5', // light gray
      background: '#FFFFFF',
      surface: '#FCA311', // orange surface
      text: '#000000',
      border: '#14213D',
    },
  },
  {
    id: 'monochrome',
    name: 'Monochrome',
    colors: {
      primary: '#D4D4D4',
      secondary: '#A3A3A3',
      accent: '#737373',
      background: '#E5E5E5',
      surface: '#FFFFFF',
      text: '#000000',
      border: '#000000',
    },
  },
];
