import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoint } from '@/styles/responsive.css';
import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  width: '100%',
  gap: rem(65),

  ...breakpoint({ tablet: { gridTemplateColumns: '1fr 1fr' } }),
});

export const container = style({
  ...theme.layouts.column,
  width: '100%',
  cursor: 'pointer',
});

export const cover = style({
  width: '100%',
  aspectRatio: '1.8 / 1',
  borderRadius: rem(14),
  backgroundColor: theme.colors.border,
  userSelect: 'none',
  overflow: 'hidden',
  transition: 'filter 0.3s ease',
});

export const title = style({
  ...theme.typographies.post_subtitle,
  display: '-webkit-box',
  paddingBlock: rem(2),
  paddingInline: rem(10),
  marginTop: rem(16),
  marginInline: rem(-10),
  marginBottom: rem(-2),
  color: theme.colors.gray.accent,
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  textOverflow: 'ellipsis',
  borderRadius: rem(8),
  overflow: 'hidden',
  transition: 'background-color 0.3s ease',
});

export const description = style({
  ...theme.typographies.h4,
  width: 'fit-content',
  paddingBlock: rem(2),
  paddingInline: rem(10),
  marginTop: rem(16),
  marginInline: rem(-10),
  marginBottom: rem(-2),
  color: theme.colors.gray.light,
  borderRadius: rem(8),
  transition: 'background-color 0.3s ease',
});

globalStyle(`${container}:hover ${cover}, ${container}:active ${cover}`, {
  filter: 'brightness(1.3)',
});

globalStyle(`${container}:hover ${title}`, {
  backgroundColor: theme.colors.gray.hover,
});

globalStyle(`${container}:hover ${description}`, {
  backgroundColor: theme.colors.gray.hover,
});

globalStyle(`${container}:active ${title}`, {
  backgroundColor: theme.colors.border,
});

globalStyle(`${container}:active ${description}`, {
  backgroundColor: theme.colors.border,
});
