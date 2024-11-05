import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const navList = style({
  ...theme.layouts.column,
  width: '100%',
  gap: rem(5),
  listStyle: 'none',
});

export const navItem = style({
  width: '100%',
  height: rem(40),
  color: theme.colors.gray.mid,
  borderRadius: rem(10),
  transition: 'background-color 0.2s',
});

export const navItemActive = style({
  color: theme.colors.gray.accent,
  backgroundColor: theme.colors.border,
});

export const navLink = style({
  ...theme.layouts.centerY,
  ...theme.typographies.a,
  width: '100%',
  height: '100%',
  paddingInline: rem(10),
});
