import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const root = style({});

export const date = style({
  ...theme.typographies.profile_sub,
  marginTop: rem(30),
  color: theme.colors.gray.mid,
});
