import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const root = style({
  ...theme.layouts.column,
  paddingTop: rem(70),
  paddingBottom: rem(65),
  gap: rem(30),
});

export const titleContainer = style({
  ...theme.layouts.rowBetween,
});

export const title = style({
  ...theme.typographies.h3,
  color: theme.colors.gray.light,
});

export const expandLink = style({
  ...theme.layouts.center,
  ...theme.typographies.h4,
  height: rem(32),
  paddingInline: rem(12),
  color: theme.colors.gray.light,
  border: `${rem(1)} solid ${theme.colors.border}`,
  borderRadius: rem(10),
  backgroundColor: theme.colors.toggle,
  gap: rem(8),
});

export const expandIcon = style({
  fontSize: rem(14),
  fontWeight: 600,
  color: theme.colors.gray.mid,
});

export const centered = style({
  ...theme.layouts.center,
  height: '100%',
  padding: 0,
  marginTop: rem(-67.5),
});
