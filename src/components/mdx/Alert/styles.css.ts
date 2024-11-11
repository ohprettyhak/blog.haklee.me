import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

const rootBase = style({
  ...theme.layouts.column,
  padding: rem(14),
  marginBottom: rem(28),
  border: `${rem(1)} solid`,
  borderRadius: rem(11),
  gap: rem(12),
});

export const root = styleVariants({
  note: [
    rootBase,
    {
      borderColor: theme.colors.mdx.note,
      backgroundColor: theme.colors.mdx.noteBackground,
    },
  ],
  tip: [
    rootBase,
    {
      borderColor: theme.colors.mdx.tip,
      backgroundColor: theme.colors.mdx.tipBackground,
    },
  ],
  important: [
    rootBase,
    {
      borderColor: theme.colors.mdx.important,
      backgroundColor: theme.colors.mdx.importantBackground,
    },
  ],
  warning: [
    rootBase,
    {
      borderColor: theme.colors.mdx.warning,
      backgroundColor: theme.colors.mdx.warningBackground,
    },
  ],
  caution: [
    rootBase,
    {
      borderColor: theme.colors.mdx.caution,
      backgroundColor: theme.colors.mdx.cautionBackground,
    },
  ],
});

export const titleBase = style({
  ...theme.layouts.centerY,
  ...theme.typographies.h3,
  gap: rem(8),
});

export const title = styleVariants({
  note: [titleBase, { color: theme.colors.mdx.note }],
  tip: [titleBase, { color: theme.colors.mdx.note }],
  important: [titleBase, { color: theme.colors.mdx.important }],
  warning: [titleBase, { color: theme.colors.mdx.warning }],
  caution: [titleBase, { color: theme.colors.mdx.caution }],
});

globalStyle(`${titleBase} > .material-symbols-rounded`, {
  fontSize: '20px',
});
