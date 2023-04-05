/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}'
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      title1:       ['32px', { lineHeight: '40px'}],
      title2:       ['28px', { lineHeight: '36px'}],
      title3:       ['24px', { lineHeight: '32px'}],
      headline:     ['20px', { lineHeight: '28px'}],
      subheadline1: ['18px', { lineHeight: '24px'}],
      body1:        ['14px', { lineHeight: '1.4286'}],
      caption:      ['12px', { lineHeight: '16px'}],
      subcaption:   ['10px', { lineHeight: '14px'}],
    },
    fontFamily: {
      sans: ['Segoe UI', 'sans-serif'],
    },
    colors: {
      black: '#000',
      white: '#FFF',
      brand: {
        50:   '#F4F4FC',
        100:  '#E8EBFA',
        200:  '#E2E2F6',
        300:  '#E2E2F6', 
        400:  '#A6A7DC',
        450:  '#9EA2FF',
        500:  '#8B8CC7',
        600:  '#6264A7',
        650:  '#5b5fc7',
        700:  '#585A96',
        750:  '#444791',
        800:  '#464775',
        900:  '#33344A',
        1000: '#373644',
      },
      gray: {
        0:    '#FFFFFF',
        25:   '#F5F5F5',
        50:   '#FAF9F8',
        100:  '#F0F0F0',
        150:  '#EBEBEB',
        200:  '#E1DFDD',
        250:  '#C8C6C4',
        300:  '#B3B0AD', 
        350:  '#979593', 
        400:  '#8A8886',
        450:  '#605E5C',
        500:  '#484644',
        550:  '#3B3A39',
        600:  '#323131',
        650:  '#2D2C2C',
        700:  '#292828',
        750:  '#252423',
        800:  '#201F1F',
        850:  '#1B1A1A',
        900:  '#11100F',
        1000: '#000000',
      },
      orange: {
        50:  '#F9ECEA',
        100: '#EFDBD3',
        200: '#EDC2A7',
        300: '#E97548',
        400: '#CC4A31',
        500: '#BD432C',
        600: '#A33D2A',
        700: '#833122',
        800: '#664134',
        900: '#51332C',
      },
      pink: {
        50:  '#FCF2FA',
        100: '#F1DFEE',
        200: '#EC6FAE',
        300: '#DE569A',
        400: '#E959D9',
        500: '#B4009E',
        600: '#943670',
        700: '#0ff', /* Color not defined in teams color pallete */
        800: '#3E2D3B',
        900: '#1F191D',
      },
      red: {
        50: '#FCF4F6',
        100: '#F3D6D8',
        200: '#F9526B',
        300: '#E73550',
        400: '#C4314B',
        500: '#A72037',
        600: '#8E192E',
        700: '#4F222B',
        800: '#3E1F25',
        900: '#1E040A',
      },
      green: {
        50:  '#0ff', /* Color not defined in teams color pallete */
        100: '#0ff', /* Color not defined in teams color pallete */
        200: '#92C353',
        300: '#6BB700',
        400: '#13A40E',
        500: '#0ff', /* Color not defined in teams color pallete */
        600: '#237B4B',
        700: '#0ff', /* Color not defined in teams color pallete */
        800: '#0ff', /* Color not defined in teams color pallete */
        900: '#0ff', /* Color not defined in teams color pallete */
      },
      yellow: {
        50: '#0ff', /* Color not defined in teams color pallete */
        100: '#FBF6D9',
        200: '#0ff', /* Color not defined in teams color pallete */
        300: '#F9EC02',
        400: '#F8D22A',
        500: '#FFB900',
        600: '#FFAA44',
        700: '#0ff', /* Color not defined in teams color pallete */
        800: '#0ff', /* Color not defined in teams color pallete */
        900: '#0ff', /* Color not defined in teams color pallete */
      },
      silver: {
        100: '#0ff', /* Color not defined in teams color pallete */
        200: 'rgba(255,255,255,0.75)',
        300: 'rgba(255,255,255,0.65)',
        400: 'rgba(255,255,255,0.5)',
        500: '#0ff', /* Color not defined in teams color pallete */
        600: 'rgba(255,255,255,0.3)',
        700: 'rgba(255,255,255,0.2)',
        800: 'rgba(255,255,255,0.1)',
        900: 'rgba(255,255,255,0.05)',
      }, 
      ruby: {
        100: '#0ff', /* Color not defined in teams color pallete */
        200: '#0ff', /* Color not defined in teams color pallete */
        300: '#0ff', /* Color not defined in teams color pallete */
        400: '#0ff', /* Color not defined in teams color pallete */
        500: 'rgba(196,49,75,0.9)',
        600: 'rgba(167,32,55,0.9)',
        700: 'rgba(142,25,46,0.9)',
        800: '#0ff', /* Color not defined in teams color pallete */
        900: '#0ff', /* Color not defined in teams color pallete */
      },
      onyx: { 
        100: 'rgba(59,58,57,0.9)',
        200: 'rgba(45,44,44,0.4)',
        300: 'rgba(37,36,35,0.2)',
        400: 'rgba(37,36,35,0.65)',
        500: 'rgba(41,40,40,0.9)',
        600: '#0ff', /* Color not defined in teams color pallete */
        700: 'rgba(0,0,0,0.5)',
        800: 'rgba(27,26,26,0.9)',
        900: 'rgba(0,0,0,0.8)',
      },
      amethyst: {
        100: '#0ff', /* Color not defined in teams color pallete */
        200: '#0ff', /* Color not defined in teams color pallete */
        300: '#0ff', /* Color not defined in teams color pallete */
        400: 'rgba(98,100,167,0.75)',
        500: 'rgba(51,52,74,0.5)',
        600: 'rgba(70,71,117,0.4)',
        700: 'rgba(98,100,167,0.15)',
        800: '#0ff', /* Color not defined in teams color pallete */
        900: '#0ff', /* Color not defined in teams color pallete */
      },
    },
    extend: {},
    },
  plugins: [],
}
