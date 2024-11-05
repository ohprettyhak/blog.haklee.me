import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const divider = style({
  width: '100%',
  height: rem(0.5),
  border: 'none',
  background: theme.colors.gradient.sidebar_divider,
});
