import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const root = style({
  ...theme.layouts.columnCenterX,
});

export const stoneContainer = style({
  ...theme.layouts.columnCenter,
  padding: rem(32),
  borderRadius: rem(16),
  backgroundColor: theme.colors.background03,
});

export const stone = style({
  fontSize: rem(64),
});

export const errorTitle = style({
  marginTop: rem(12),
  color: theme.colors.gray.accent,
  fontSize: rem(28),
  fontWeight: 600,
  textAlign: 'center',
});

export const errorDescription = style({
  marginTop: rem(6),
  color: theme.colors.gray.accent,
  fontSize: rem(15),
  fontWeight: 500,
  textAlign: 'center',
});

export const recommend = style({
  marginTop: rem(48),
  color: theme.colors.gray.accent,
  fontSize: rem(22),
  fontWeight: 500,
  textAlign: 'center',
});

export const contact = style({
  marginTop: rem(8),
  color: theme.colors.gray.accent,
  fontSize: rem(13),
  fontWeight: 500,
  textAlign: 'center',
});

globalStyle(`${contact} > a`, {
  color: theme.colors.gray.mid,
  textDecoration: 'underline',
  cursor: 'pointer',
  transition: 'color 0.2s',
});

globalStyle(`${contact} > a:hover`, {
  color: theme.colors.gray.light,
});

export const backButton = style({
  width: 'fit-content',
  padding: rem(10),
  marginTop: rem(24),
  color: theme.colors.gray.accent,
  fontSize: rem(13),
  fontWeight: 500,
  border: `${rem(1)} solid ${theme.colors.background04}`,
  borderRadius: rem(7),
  backgroundColor: theme.colors.background02,
  transition: 'border-color 0.2s, background-color 0.2s',

  ':hover': {
    borderColor: theme.colors.background08,
    backgroundColor: theme.colors.background04,
  },
});
