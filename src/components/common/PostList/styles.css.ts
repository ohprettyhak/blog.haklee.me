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

  ...breakpoint({ tablet: { flexDirection: 'row', gap: rem(35) } }),
});

export const cover = style({
  width: '100%',
  aspectRatio: '1.8 / 1',
  borderRadius: rem(14),
  backgroundColor: theme.colors.border,
  userSelect: 'none',
  overflow: 'hidden',
  transition: 'filter 0.3s ease',

  ...breakpoint({ tablet: { width: rem(346) } }),
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

globalStyle(`${item}:hover ${cover}, ${item}:active ${cover}`, {
  filter: 'brightness(1.3)',
});

globalStyle(`${frontmatter}:hover ${title}`, {
  backgroundColor: theme.colors.gray.hover,
});

globalStyle(`${frontmatter}:hover ${subtitle}`, {
  backgroundColor: theme.colors.gray.hover,
});

globalStyle(`${frontmatter}:hover ${description}`, {
  backgroundColor: theme.colors.gray.hover,
});

globalStyle(`${frontmatter}:active ${title}`, {
  backgroundColor: theme.colors.border,
});

globalStyle(`${frontmatter}:active ${subtitle}`, {
  backgroundColor: theme.colors.border,
});

globalStyle(`${frontmatter}:active ${description}`, {
  backgroundColor: theme.colors.border,
});
