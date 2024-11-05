import './reset.css';
import './article.css';

import { globalStyle } from '@vanilla-extract/css';

import { theme } from './theme.css';

globalStyle('body', {
  paddingInline: theme.sizes.appInlineSpace,
  paddingBottom: 'env(safe-area-inset-bottom)',
  fontFamily: theme.fonts.sans,
  overflowX: 'hidden',
  backgroundColor: theme.colors.background,
});

globalStyle('#___gatsby, #___gatsby > div', {
  height: '100%',
});

globalStyle('img', {
  userSelect: 'none',
});

globalStyle('[data-color-scheme="dark"]', {
  colorScheme: 'dark',
});

globalStyle('[data-color-scheme="light"]', {
  colorScheme: 'light',
});
