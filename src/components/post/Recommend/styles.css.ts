import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const title = style({
  color: theme.colors.gray.accent,
  fontFamily: theme.fonts.mono,
  fontSize: rem(20),
  fontWeight: 500,
  lineHeight: rem(20),
});

export const postGrid = style({
  marginBlock: rem(65),
});
