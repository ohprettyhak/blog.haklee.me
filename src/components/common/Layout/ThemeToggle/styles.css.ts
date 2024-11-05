import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const themeToggle = style({
  ...theme.layouts.center,
  ...theme.typographies.h4,
  width: '100%',
  height: rem(40),
  color: theme.colors.gray.accent,
  border: `${rem(1)} solid ${theme.colors.border}`,
  borderRadius: rem(10),
  backgroundColor: theme.colors.toggle,
});
