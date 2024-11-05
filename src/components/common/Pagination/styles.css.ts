import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const root = style({
  ...theme.layouts.center,
  width: '100%',
  paddingBlock: rem(65),
});

export const container = style({
  ...theme.layouts.centerY,
  padding: 0,
  margin: 0,
  listStyle: 'none',
  userSelect: 'none',
});

export const item = style({
  ...theme.layouts.center,
  width: rem(28),
  height: rem(28),
  color: theme.colors.gray.mid,
  fontWeight: 400,
  cursor: 'pointer',
  borderRadius: rem(4),
  backgroundColor: 'transparent',
  transition: 'color 0.3s, background-color 0.3s',

  ':hover': { color: theme.colors.gray.accent, backgroundColor: theme.colors.gray.hover },
  ':active': { color: theme.colors.gray.accent, backgroundColor: theme.colors.border },
});

export const active = style({
  color: theme.colors.gray.accent,
  backgroundColor: theme.colors.border,
});

globalStyle(`${item} > a`, {
  width: '100%',
  textAlign: 'center',
});
