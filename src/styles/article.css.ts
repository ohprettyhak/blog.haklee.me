import { globalStyle } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

globalStyle('article', {
  ...theme.typographies.post_body,
  color: theme.colors.gray.accent,
});

globalStyle('article h1', {
  fontSize: rem(28),
  lineHeight: 1.25,
  marginTop: rem(32),
  marginBottom: rem(16),
});

globalStyle('article h2', {
  fontSize: rem(22.4),
  lineHeight: 1.2,
  marginTop: rem(40),
  marginBottom: rem(19.2),
});

globalStyle('article h3', {
  fontSize: rem(19.2),
  lineHeight: 1.1,
  marginTop: rem(48),
  marginBottom: rem(24),
});

globalStyle('article h4', {
  fontSize: rem(16),
  lineHeight: 1.3,
  marginTop: rem(56),
  marginBottom: rem(28),
});

globalStyle('article h5, article h6', {
  fontSize: rem(16),
  lineHeight: 1.3,
  marginTop: rem(56),
  marginBottom: rem(28),
});

globalStyle('article h1, article h2, article h3, article h4, article h5, article h6', {
  fontWeight: 900,
});

globalStyle('article p', {
  margin: `0 0 ${rem(28)}`,
});

globalStyle('article > div[data-content] > :first-child', {
  marginTop: 0,
});

globalStyle('article > div[data-content] > :last-child', {
  marginBottom: 0,
});

globalStyle('article table', {
  maxWidth: '100%',
  borderCollapse: 'collapse',
  marginBottom: rem(28),
});

globalStyle('article th, article td', {
  padding: `${rem(4)} ${rem(8)}`,
  border: `1px solid ${theme.colors.gray.accent}`,
  textAlign: 'left',
});

globalStyle('article th', {
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  fontWeight: 600,
});

globalStyle('article blockquote', {
  paddingLeft: rem(16),
  borderLeft: `${rem(4)} solid ${theme.colors.gray.accent}`,
  margin: `0 0 ${rem(28)}`,
  color: theme.colors.gray.accent,
  fontStyle: 'italic',
});

globalStyle('article ul, article ol', {
  paddingLeft: rem(24),
  margin: `0 0 ${rem(28)}`,
});

globalStyle('article ul li, article ol li', {
  marginBottom: rem(8),
});

globalStyle('article p > code', {
  paddingBlock: rem(2),
  paddingInline: rem(4),
  fontFamily: theme.fonts.mono,
  fontSize: rem(14.5),
  lineHeight: 1.3,
  backgroundColor: theme.colors.border,
  borderRadius: rem(8),
});

globalStyle('article p > code::before', {
  content: '`',
});

globalStyle('article p > code::after', {
  content: '`',
});

globalStyle('article div[data-markdown-alert] > p', {
  padding: 0,
  margin: 0,
  fontFamily: theme.fonts.mono,
  fontSize: rem(14.5),
});
