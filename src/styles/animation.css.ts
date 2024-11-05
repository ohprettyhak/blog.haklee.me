import { globalStyle, keyframes } from '@vanilla-extract/css';

import { rem } from '@/utils/pxto';

const fadeInSlide = keyframes({
  '0%': { opacity: '0', transform: `translateY(${rem(4)})` },
  '100%': { opacity: '1', transform: 'none' },
});

globalStyle('[data-animate] > *', {
  vars: {
    '--level': '0',
    '--delay': '50ms',
    '--start': '0ms',
  },
  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      animation: `${fadeInSlide} 500ms both`,
      animationDelay: 'calc(var(--level) * var(--delay) + var(--start))',
    },
  },
});

globalStyle('[data-animate-speed="slow"] > *', {
  vars: { '--delay': '100ms' },
});

globalStyle('[data-animate-speed="fast"] > *', {
  vars: { '--delay': '25ms' },
});

for (let i = 1; i <= 20; i++) {
  globalStyle(`[data-animate] > *:nth-child(${i})`, {
    vars: { '--level': `${i}` },
  });
}
