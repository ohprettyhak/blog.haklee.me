import { style } from '@vanilla-extract/css';

import { breakpoint } from '@/styles/responsive.css';
import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const root = style({
  ...theme.layouts.rowBetween,
  position: 'fixed',
  display: 'none',
  top: 0,
  left: 0,
  flexDirection: 'column',
  width: theme.sizes.sidebarWidth,
  height: '100dvh',
  paddingInline: rem(40),
  paddingBlock: rem(44),

  ...breakpoint({ tablet: { display: 'flex' } }),
});

export const topContainer = style({
  ...theme.layouts.column,
  width: '100%',
  gap: rem(25),
});

export const branding = style({
  ...theme.typographies.h3,
  paddingBlock: rem(12.5),
  paddingInline: rem(10),
  color: theme.colors.gray.accent,
  wordBreak: 'keep-all',
  userSelect: 'none',
});

export const bottomContainer = style({
  ...theme.layouts.column,
  width: '100%',
  gap: rem(20),
});

export const license = style({
  ...theme.typographies.h6,
  width: '100%',
  color: theme.colors.license,
});
