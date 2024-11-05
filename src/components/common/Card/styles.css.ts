import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const root = style({
  position: 'relative',
  width: '100%',
  height: rem(183),
  marginTop: rem(30),
  border: `${rem(1)} solid rgba(0, 0, 0, 0.03)`,
  borderRadius: rem(14),
  boxShadow: `
    inset 0 ${rem(-2)} ${rem(2)} rgba(255, 255, 255, 0.3),
    inset 0 ${rem(2)} ${rem(2)} rgba(255, 255, 255, 0.3)
  `,
  overflow: 'hidden',
});

export const content = style({
  ...theme.layouts.rowBetween,
  width: '100%',
  height: '100%',
  padding: rem(30),
});
