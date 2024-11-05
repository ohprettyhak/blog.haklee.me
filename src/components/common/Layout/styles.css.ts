import { style } from '@vanilla-extract/css';

import { breakpoint } from '@/styles/responsive.css';
import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const root = style({
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  height: '100%',
  marginInline: 'auto',
  paddingLeft: 0,

  ...breakpoint({
    tablet: {
      maxWidth: `calc(${theme.sizes.appWidth} + ${theme.sizes.sidebarWidth})`,
      paddingLeft: theme.sizes.sidebarWidth,
    },
    desktop: { maxWidth: theme.sizes.appWidth, paddingLeft: 0 },
  }),
});

export const main = style({
  ...theme.layouts.column,
  paddingTop: rem(42.5),
  ...breakpoint({ tablet: { paddingTop: rem(100) } }),
});
