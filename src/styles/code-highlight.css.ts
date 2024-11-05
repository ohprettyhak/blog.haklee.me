import { globalStyle } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

globalStyle(`code[class*="language-"], pre[class*="language-"]`, {
  color: '#393A34',
  fontFamily: theme.fonts.mono,
  direction: 'ltr',
  textAlign: 'left',
  whiteSpace: 'pre',
  wordSpacing: 'normal',
  wordBreak: 'normal',
  fontSize: rem(14),
  lineHeight: '150%',
  tabSize: 4,
  hyphens: 'none',
});

globalStyle(`pre > code[class*="language-"]`, {
  fontSize: rem(14),
});

globalStyle(
  `pre[class*="language-"]::selection, pre[class*="language-"] ::selection, code[class*="language-"]::selection, code[class*="language-"] ::selection`,
  { background: '#C1DEF1' },
);

globalStyle(`pre[class*="language-"]`, {
  padding: rem(16),
  margin: `${rem(8)} 0`,
  overflow: 'auto',
  border: `${rem(1)} solid ${theme.colors.border}`,
  borderRadius: rem(8),
  backgroundColor: theme.colors.white,
});

globalStyle(`:not(pre) > code[class*="language-"]`, {
  padding: rem(3.2),
  paddingTop: rem(1),
  paddingBottom: rem(1),
  background: '#f8f8f8',
  border: `${rem(1)} solid ${theme.colors.border}`,
});

globalStyle(`.token.comment, .token.prolog, .token.doctype, .token.cdata`, {
  color: '#008000',
  fontStyle: 'italic',
});

globalStyle(`.token.namespace`, {
  opacity: 0.7,
});

globalStyle(`.token.string`, {
  color: '#A31515',
});

globalStyle(`.token.punctuation, .token.operator`, {
  color: '#393A34',
});

globalStyle(
  `.token.url, .token.symbol, .token.number, .token.boolean, .token.variable, .token.constant, .token.inserted`,
  {
    color: '#36acaa',
  },
);

globalStyle(
  `.token.atrule, .token.keyword, .token.attr-value, .language-autohotkey .token.selector, .language-json .token.boolean, .language-json .token.number, code[class*="language-css"]`,
  {
    color: '#0000ff',
  },
);

globalStyle(`.token.function`, {
  color: '#393A34',
});

globalStyle(`.token.deleted, .language-autohotkey .token.tag`, {
  color: '#9a050f',
});

globalStyle(`.token.selector, .language-autohotkey .token.keyword`, {
  color: '#00009f',
});

globalStyle(`.token.important`, {
  color: '#e90',
});

globalStyle(`.token.important, .token.bold`, {
  fontWeight: 'bold',
});

globalStyle(`.token.italic`, {
  fontStyle: 'italic',
});

globalStyle(`.token.class-name, .language-json .token.property`, {
  color: '#2B91AF',
});

globalStyle(`.token.tag, .token.selector`, {
  color: '#800000',
});

globalStyle(`.token.attr-name, .token.property, .token.regex, .token.entity`, {
  color: '#ff0000',
});

globalStyle(`.token.directive.tag .tag`, {
  background: '#ffff00',
  color: '#393A34',
});

globalStyle(`.line-numbers.line-numbers .line-numbers-rows`, {
  borderRightColor: '#a5a5a5',
});

globalStyle(`.line-numbers .line-numbers-rows > span:before`, {
  color: '#2B91AF',
});

globalStyle(`.line-highlight.line-highlight`, {
  background: 'rgba(193, 222, 241, 0.2)',
  backgroundImage:
    'linear-gradient(to right, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0))',
});

// dark mode
globalStyle(`html[data-theme="dark"] code[class*="language-"]`, {
  color: '#E8E8E8',
});

globalStyle(`html[data-theme="dark"] pre[class*="language-"]`, {
  color: '#E8E8E8',
  backgroundColor: '#1E1E1E',
});

globalStyle(`html[data-theme="dark"] pre[class*="language-"] ::selection`, {
  background: '#4E5D6C',
});

globalStyle(`html[data-theme="dark"] code[class*="language-"] ::selection`, {
  background: '#4E5D6C',
});

globalStyle(`html[data-theme="dark"] pre[class*="language-"]::selection`, {
  background: '#4E5D6C',
});

globalStyle(`html[data-theme="dark"] code[class*="language-"]::selection`, {
  background: '#4E5D6C',
});

globalStyle(`html[data-theme="dark"] :not(pre) > code[class*="language-"]`, {
  background: '#2E2E2E',
});

globalStyle(`html[data-theme="dark"] .token.comment`, {
  color: '#6A9955',
});

globalStyle(`html[data-theme="dark"] .token.prolog`, {
  color: '#6A9955',
});

globalStyle(`html[data-theme="dark"] .token.doctype`, {
  color: '#6A9955',
});

globalStyle(`html[data-theme="dark"] .token.cdata`, {
  color: '#6A9955',
});

globalStyle(`html[data-theme="dark"] .token.string`, {
  color: '#CE9178',
});

globalStyle(`html[data-theme="dark"] .token.punctuation`, {
  color: '#D4D4D4',
});

globalStyle(`html[data-theme="dark"] .token.operator`, {
  color: '#D4D4D4',
});

globalStyle(`html[data-theme="dark"] .token.url`, {
  color: '#B5CEA8',
});

globalStyle(`html[data-theme="dark"] .token.symbol`, {
  color: '#B5CEA8',
});

globalStyle(`html[data-theme="dark"] .token.number`, {
  color: '#B5CEA8',
});

globalStyle(`html[data-theme="dark"] .token.boolean`, {
  color: '#B5CEA8',
});

globalStyle(`html[data-theme="dark"] .token.variable`, {
  color: '#B5CEA8',
});

globalStyle(`html[data-theme="dark"] .token.constant`, {
  color: '#B5CEA8',
});

globalStyle(`html[data-theme="dark"] .token.inserted`, {
  color: '#B5CEA8',
});

globalStyle(`html[data-theme="dark"] .token.atrule`, {
  color: '#569CD6',
});

globalStyle(`html[data-theme="dark"] .token.keyword`, {
  color: '#569CD6',
});

globalStyle(`html[data-theme="dark"] .token.attr-value`, {
  color: '#569CD6',
});

globalStyle(`html[data-theme="dark"] .language-autohotkey .token.selector`, {
  color: '#569CD6',
});

globalStyle(`html[data-theme="dark"] .language-json .token.boolean`, {
  color: '#569CD6',
});

globalStyle(`html[data-theme="dark"] .language-json .token.number`, {
  color: '#569CD6',
});

globalStyle(`html[data-theme="dark"] code[class*="language-css"]`, {
  color: '#569CD6',
});

globalStyle(`html[data-theme="dark"] .token.function`, {
  color: '#DCDCAA',
});

globalStyle(`html[data-theme="dark"] .token.deleted`, {
  color: '#D16969',
});

globalStyle(`html[data-theme="dark"] .language-autohotkey .token.tag`, {
  color: '#D16969',
});

globalStyle(`html[data-theme="dark"] .token.selector`, {
  color: '#9CDCFE',
});

globalStyle(`html[data-theme="dark"] .language-autohotkey .token.keyword`, {
  color: '#9CDCFE',
});

globalStyle(`html[data-theme="dark"] .token.important`, {
  color: '#F44747',
});

globalStyle(`html[data-theme="dark"] .token.class-name`, {
  color: '#4EC9B0',
});

globalStyle(`html[data-theme="dark"] .language-json .token.property`, {
  color: '#4EC9B0',
});

globalStyle(`html[data-theme="dark"] .token.tag`, {
  color: '#D7BA7D',
});

globalStyle(`html[data-theme="dark"] .token.selector`, {
  color: '#D7BA7D',
});

globalStyle(`html[data-theme="dark"] .token.attr-name`, {
  color: '#FF79C6',
});

globalStyle(`html[data-theme="dark"] .token.property`, {
  color: '#FF79C6',
});

globalStyle(`html[data-theme="dark"] .token.regex`, {
  color: '#FF79C6',
});

globalStyle(`html[data-theme="dark"] .token.entity`, {
  color: '#FF79C6',
});

globalStyle(`html[data-theme="dark"] .token.directive.tag .tag`, {
  background: '#282C34',
  color: '#61AFEF',
});

globalStyle(`html[data-theme="dark"] .line-numbers.line-numbers .line-numbers-rows`, {
  borderRightColor: '#4B5263',
});

globalStyle(`html[data-theme="dark"] .line-numbers .line-numbers-rows > span:before`, {
  color: '#ABB2BF',
});

globalStyle(`html[data-theme="dark"] .line-highlight.line-highlight`, {
  background: 'rgba(255, 215, 0, 0.1)',
  backgroundImage: 'linear-gradient(to right, rgba(255, 215, 0, 0.1) 70%, rgba(255, 215, 0, 0))',
});
