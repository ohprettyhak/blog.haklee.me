import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const list = style({
  ...theme.layouts.column,
  listStyle: 'none',
  gap: rem(8),
});

export const item = style({
  ...theme.typographies.h4,
  color: theme.colors.gray.accent,
  transition: 'color 0.2s',

  selectors: { '&:hover': { color: theme.colors.gray.mid } },
});
