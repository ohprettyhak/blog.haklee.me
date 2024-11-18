import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoint } from '@/styles/responsive.css';
import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const list = style({
  ...theme.layouts.column,
  listStyle: 'none',
  gap: rem(30),
});

export const item = style({
  ...theme.layouts.column,
  gap: rem(18),
  cursor: 'pointer',

  ...breakpoint({ tablet: { flexDirection: 'row', gap: rem(35) } }),
});

export const cover = style({
  width: '100%',
  userSelect: 'none',
  overflow: 'hidden',

  ...breakpoint({ tablet: { width: rem(346) } }),
});

globalStyle(`${cover} div[data-gatsby-image-wrapper]`, {
  width: '100%',
  aspectRatio: '1.8 / 1',
  borderRadius: rem(14),
  overflow: 'hidden',
  transition: 'filter 0.3s',
});

export const frontmatter = style({
  ...theme.layouts.column,
  flex: 1,
});

export const title = style({
  ...theme.typographies.post_subtitle,
  paddingBlock: rem(2),
  paddingInline: rem(10),
  marginInline: rem(-10),
  marginBottom: rem(-2),
  color: theme.colors.gray.accent,
  borderRadius: rem(8),
  transition: 'background-color 0.3s ease',
});

export const subtitle = style({
  ...theme.typographies.post_description,
  paddingBlock: rem(2),
  paddingInline: rem(10),
  marginTop: rem(12),
  marginInline: rem(-10),
  marginBottom: rem(-2),
  color: theme.colors.gray.mid,
  borderRadius: rem(8),
  transition: 'background-color 0.3s ease',

  ...breakpoint({ tablet: { marginTop: rem(20) } }),
});

export const description = style({
  ...theme.layouts.centerY,
  ...theme.typographies.h5,
  width: 'fit-content',
  paddingBlock: rem(2),
  paddingInline: rem(10),
  marginTop: rem(8),
  marginInline: rem(-10),
  marginBottom: rem(-2),
  color: theme.colors.gray.light,
  borderRadius: rem(8),
  transition: 'background-color 0.3s ease',

  ...breakpoint({ tablet: { marginTop: rem(18) } }),
});

export const middot = style({
  color: theme.colors.gray.bold,
});

globalStyle(
  `${item}:hover ${cover} div[data-gatsby-image-wrapper], ${item}:active ${cover} div[data-gatsby-image-wrapper]`,
  {
    filter: 'brightness(1.2)',
  },
);

globalStyle(`${item}:hover ${title}`, {
  backgroundColor: theme.colors.gray.hover,
});

globalStyle(`${item}:hover ${subtitle}`, {
  backgroundColor: theme.colors.gray.hover,
});

globalStyle(`${item}:hover ${description}`, {
  backgroundColor: theme.colors.gray.hover,
});

globalStyle(`${item}:active ${title}`, {
  backgroundColor: theme.colors.border,
});

globalStyle(`${item}:active ${subtitle}`, {
  backgroundColor: theme.colors.border,
});

globalStyle(`${item}:active ${description}`, {
  backgroundColor: theme.colors.border,
});
