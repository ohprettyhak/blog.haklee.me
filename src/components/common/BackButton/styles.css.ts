import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const root = style({
  ...theme.layouts.centerY,
  ...theme.typographies.h3,
  width: 'fit-content',
  paddingBlock: rem(5),
  paddingRight: rem(9),
  color: theme.colors.gray.accent,
  userSelect: 'none',
  gap: rem(10),
  opacity: 1,
  transition: 'opacity 0.2s',

  ':hover': { opacity: 0.7 },
});

globalStyle(`${root} > .material-symbols-rounded`, {
  fontSize: rem(18),
});
