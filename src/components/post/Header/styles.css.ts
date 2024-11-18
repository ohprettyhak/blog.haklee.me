import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const root = style({
  marginTop: rem(20),
  marginBottom: rem(56),
});

export const cover = style({
  ...theme.layouts.center,
  backgroundColor: theme.colors.border,
  userSelect: 'none',
});

globalStyle(`${cover} div[data-gatsby-image-wrapper]`, {
  width: '100%',
  aspectRatio: '1.8 / 1',
  borderRadius: rem(14),
  overflow: 'hidden',
});

export const title = style({
  ...theme.typographies.post_title,
  padding: 0,
  marginTop: rem(17),
  color: theme.colors.gray.accent,
  wordBreak: 'keep-all',
});

export const subtitle = style({
  ...theme.typographies.post_subtitle,
  padding: 0,
  marginTop: rem(8),
  color: theme.colors.gray.bold,
});

export const description = style({
  ...theme.layouts.centerY,
  ...theme.typographies.h5,
  marginTop: rem(18),
  color: theme.colors.gray.light,
  wordBreak: 'keep-all',
});

export const middot = style({
  color: theme.colors.gray.bold,
});

globalStyle(`${description} a`, {
  opacity: 1,
  transition: 'opacity 0.2s',
});

globalStyle(`${description} a:hover`, {
  opacity: 0.7,
});
